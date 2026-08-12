/* Weather Command Center - source */

class WeatherCommandCenter extends HTMLElement {
  static getStubConfig() {
    return {
      type: 'custom:weather-command-center',
      weather_entity: 'weather.home',
      name: 'Home Weather'
    };
  }

  setConfig(config) {
    if (!config || typeof config !== 'object') throw new Error('Invalid configuration');
    this.config = {
      weather_entity: config.weather_entity || config.entity || 'weather.home',
      name: config.name || 'Weather',
      temperature_entity: config.temperature_entity,
      humidity_entity: config.humidity_entity,
      pressure_entity: config.pressure_entity,
      wind_speed_entity: config.wind_speed_entity,
      wind_direction_entity: config.wind_direction_entity,
      precipitation_entity: config.precipitation_entity,
      uv_entity: config.uv_entity,
      location: config.location || '',
      forecast_days: Number(config.forecast_days || 7)
    };
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    this.render();
  }

  getCardSize() { return 8; }

  _state(entityId) {
    if (!entityId || !this._hass) return undefined;
    return this._hass.states[entityId];
  }

  _value(entityId, fallback = '—') {
    const state = this._state(entityId);
    return state && state.state !== 'unavailable' && state.state !== 'unknown' ? state.state : fallback;
  }

  _attr(entityId, attr, fallback = '—') {
    const state = this._state(entityId);
    return state?.attributes?.[attr] ?? fallback;
  }

  _unit(entityId, fallback = '') {
    return this._state(entityId)?.attributes?.unit_of_measurement || fallback;
  }

  _weatherIcon(condition) {
    const map = {
      sunny: '☀️', clear-night: '🌙', partlycloudy: '⛅', cloudy: '☁️', rainy: '🌧️', pouring: '🌧️',
      lightning: '⛈️', 'lightning-rainy': '⛈️', snowy: '🌨️', snow: '❄️', windy: '💨', 'windy-variant': '🌬️',
      fog: '🌫️', hail: '🌨️', exceptional: '⚠️'
    };
    return map[condition] || '🌤️';
  }

  _conditionLabel(condition) {
    if (!condition) return 'Unknown';
    return condition.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  _background(condition) {
    const c = condition || '';
    if (c.includes('rain') || c === 'pouring') return 'rain';
    if (c.includes('snow')) return 'snow';
    if (c.includes('lightning')) return 'storm';
    if (c === 'cloudy' || c === 'fog') return 'cloud';
    if (c === 'clear-night') return 'night';
    if (c === 'sunny' || c === 'partlycloudy') return 'sun';
    return 'default';
  }

  async _getForecast() {
    if (!this._hass || !this.config?.weather_entity) return [];
    try {
      const result = await this._hass.callWS({
        type: 'weather/get_forecasts',
        entity_id: this.config.weather_entity,
        type: 'daily'
      });
      const data = result?.[this.config.weather_entity];
      return data?.forecast || [];
    } catch (e) {
      return [];
    }
  }

  async render() {
    if (!this.config || !this._hass) return;
    const weather = this._state(this.config.weather_entity);
    if (!weather) {
      this.innerHTML = `<ha-card><div style="padding:20px">Weather entity <b>${this.config.weather_entity}</b> was not found.</div></ha-card>`;
      return;
    }

    const condition = weather.state;
    const attrs = weather.attributes || {};
    const temp = this.config.temperature_entity ? this._value(this.config.temperature_entity) : (attrs.temperature ?? '—');
    const tempUnit = this.config.temperature_entity ? this._unit(this.config.temperature_entity, this._hass.config.unit_system.temperature) : (attrs.temperature_unit || '°');
    const humidity = this.config.humidity_entity ? this._value(this.config.humidity_entity) : (attrs.humidity ?? '—');
    const pressure = this.config.pressure_entity ? this._value(this.config.pressure_entity) : (attrs.pressure ?? '—');
    const wind = this.config.wind_speed_entity ? this._value(this.config.wind_speed_entity) : (attrs.wind_speed ?? '—');
    const windUnit = this.config.wind_speed_entity ? this._unit(this.config.wind_speed_entity) : (attrs.wind_speed_unit || '');
    const windDir = this.config.wind_direction_entity ? this._value(this.config.wind_direction_entity) : (attrs.wind_bearing ?? '—');
    const uv = this.config.uv_entity ? this._value(this.config.uv_entity) : '—';

    const forecast = await this._getForecast();
    const days = forecast.slice(0, this.config.forecast_days);

    const fmtDay = date => {
      try { return new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date(date)); }
      catch (_) { return '—'; }
    };
    const fmtTime = date => {
      try { return new Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit' }).format(new Date(date)); }
      catch (_) { return '—'; }
    };

    const forecastHtml = days.map(day => `
      <div class="day">
        <div class="day-name">${fmtDay(day.datetime)}</div>
        <div class="day-icon">${this._weatherIcon(day.condition)}</div>
        <div class="day-temp"><b>${day.temperature ?? '—'}°</b> <span>${day.templow ?? ''}${day.templow != null ? '°' : ''}</span></div>
        <div class="day-rain">${day.precipitation_probability != null ? `${day.precipitation_probability}%` : '—'} rain</div>
      </div>`).join('');

    this.innerHTML = `
      <ha-card>
        <div class="shell ${this._background(condition)}">
          <div class="topbar">
            <div><div class="eyebrow">WEATHER COMMAND CENTER</div><div class="title">${this.config.name}</div></div>
            <div class="condition-pill">${this._weatherIcon(condition)} ${this._conditionLabel(condition)}</div>
          </div>

          <div class="hero">
            <div class="hero-main">
              <div class="hero-icon">${this._weatherIcon(condition)}</div>
              <div><div class="temperature">${temp}<span>${tempUnit}</span></div><div class="feels">Feels like ${attrs.apparent_temperature ?? '—'}${tempUnit}</div></div>
            </div>
            <div class="location">${this.config.location || attrs.friendly_name || this.config.name}</div>
          </div>

          <div class="metrics">
            <div class="metric"><span>Humidity</span><strong>${humidity}${humidity !== '—' ? '%' : ''}</strong></div>
            <div class="metric"><span>Pressure</span><strong>${pressure}</strong></div>
            <div class="metric"><span>Wind</span><strong>${wind} ${windUnit}</strong></div>
            <div class="metric"><span>Direction</span><strong>${windDir}${typeof windDir === 'number' ? '°' : ''}</strong></div>
            <div class="metric"><span>UV Index</span><strong>${uv}</strong></div>
          </div>

          <section><div class="section-title">7 DAY FORECAST</div><div class="days">${forecastHtml || '<div class="empty">Forecast unavailable</div>'}</div></section>

          <div class="footer">${weather.last_updated ? `Updated ${fmtTime(weather.last_updated)}` : 'Live Home Assistant weather data'}</div>
        </div>
      </ha-card>`;
  }
}

if (!customElements.get('weather-command-center')) customElements.define('weather-command-center', WeatherCommandCenter);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'weather-command-center',
  name: 'Weather Command Center',
  description: 'Full-screen weather command center for Home Assistant',
  preview: true
});
