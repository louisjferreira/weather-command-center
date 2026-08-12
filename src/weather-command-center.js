const WCC_STYLES = `
:host{display:block;width:100%;color:#fff}
ha-card{overflow:hidden;border:0;background:transparent;box-shadow:none}
.shell{min-height:720px;box-sizing:border-box;padding:28px;border-radius:28px;position:relative;overflow:hidden;background:linear-gradient(145deg,#16283d,#315b7d);font-family:Roboto,sans-serif}
.shell::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 80% 10%,rgba(255,255,255,.2),transparent 32%),linear-gradient(135deg,rgba(255,255,255,.06),transparent 45%);pointer-events:none}
.shell.has-bg{background-size:cover;background-position:center}
.shell.has-bg::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,20,35,.26),rgba(8,20,35,.55))}
.shell.sun{background:linear-gradient(145deg,#087db8,#54b6df)}
.shell.cloud{background:linear-gradient(145deg,#354b62,#70869b)}
.shell.rain{background:linear-gradient(145deg,#152f48,#406783)}
.shell.storm{background:linear-gradient(145deg,#171a2e,#3d4264)}
.shell.snow{background:linear-gradient(145deg,#50758e,#a5c4d2)}
.shell.night{background:linear-gradient(145deg,#080f25,#263b62)}
.topbar,.hero,.metrics,.content-grid,section,.footer{position:relative;z-index:1}
.topbar{display:flex;justify-content:space-between;align-items:flex-start;gap:20px}
.eyebrow,.section-title{font-size:11px;letter-spacing:.18em;opacity:.72;font-weight:700}
.title{font-size:28px;font-weight:700;margin-top:4px}
.condition-pill{padding:9px 14px;border:1px solid rgba(255,255,255,.22);background:rgba(0,0,0,.12);border-radius:999px;backdrop-filter:blur(12px);white-space:nowrap}
.hero{display:flex;align-items:end;justify-content:space-between;gap:20px;min-height:220px;padding:20px 8px 30px}
.hero-main{display:flex;align-items:center;gap:24px}
.hero-icon{font-size:92px;line-height:1;filter:drop-shadow(0 8px 18px rgba(0,0,0,.16))}
.temperature{font-size:96px;line-height:.95;font-weight:300;letter-spacing:-.06em}
.temperature span{font-size:36px;vertical-align:top;margin-left:6px;opacity:.75}
.feels{margin-top:10px;opacity:.72;font-size:15px}
.location{align-self:end;opacity:.72;font-size:14px}
.metrics{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin-bottom:22px}
.metric{padding:15px 17px;border-radius:18px;background:rgba(0,0,0,.14);border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(12px)}
.metric span{display:block;font-size:11px;text-transform:uppercase;letter-spacing:.12em;opacity:.62;margin-bottom:7px}
.metric strong{font-size:18px;font-weight:600}
.content-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(360px,.85fr);gap:14px;margin-bottom:22px}
.panel{border-radius:20px;background:rgba(0,0,0,.14);border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(12px);padding:18px;min-height:270px;box-sizing:border-box}
.panel-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.panel-title strong{font-size:12px;letter-spacing:.13em}
.panel-subtitle{font-size:11px;opacity:.55}
.radar{width:100%;height:220px;object-fit:cover;border-radius:14px;display:block;background:rgba(0,0,0,.16)}
.radar-empty{height:220px;border-radius:14px;background:rgba(0,0,0,.12);display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;box-sizing:border-box;color:rgba(255,255,255,.58);font-size:13px}
.wind-wrap{height:220px;display:flex;align-items:center;justify-content:center}
.wind-svg{width:240px;height:240px;max-width:100%;max-height:240px}
.wind-svg text{fill:rgba(255,255,255,.72);font:700 11px Roboto,sans-serif}
.wind-svg .ring{fill:none;stroke:rgba(255,255,255,.16);stroke-width:1}
.wind-svg .axis{stroke:rgba(255,255,255,.12);stroke-width:1}
.wind-svg .arrow{stroke:rgba(255,255,255,.95);stroke-width:4;stroke-linecap:round}
.wind-svg .arrowhead{fill:rgba(255,255,255,.95)}
.wind-svg .center{fill:rgba(255,255,255,.16);stroke:rgba(255,255,255,.35);stroke-width:1}
.wind-readout{text-align:center;margin-top:-2px;font-size:12px;opacity:.7}
.days-title{margin:0 0 12px 3px}
.days{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}
.day{text-align:center;padding:14px 8px;min-height:135px;border-radius:18px;background:rgba(0,0,0,.13);border:1px solid rgba(255,255,255,.09);backdrop-filter:blur(10px)}
.day-name{font-size:12px;font-weight:700;opacity:.75}
.day-icon{font-size:32px;margin:11px 0}
.day-temp{font-size:15px}.day-temp span{opacity:.55;margin-left:4px}
.day-rain{margin-top:9px;font-size:11px;opacity:.62}
.empty{padding:30px;opacity:.6}
.footer{margin-top:18px;text-align:right;font-size:11px;opacity:.48}
.error{padding:30px;color:#ffd0d0}
@media(max-width:1000px){.content-grid{grid-template-columns:1fr 1fr}.metrics{grid-template-columns:repeat(3,1fr)}.days{grid-template-columns:repeat(4,1fr)}}
@media(max-width:700px){.shell{padding:18px;border-radius:20px;min-height:0}.topbar{flex-direction:column}.condition-pill{align-self:flex-start}.hero{min-height:180px;padding:10px 0 20px;align-items:flex-start;flex-direction:column}.hero-main{gap:15px}.hero-icon{font-size:60px}.temperature{font-size:64px}.location{align-self:flex-start}.metrics{grid-template-columns:repeat(2,1fr)}.content-grid{grid-template-columns:1fr}.days{grid-template-columns:repeat(2,1fr)}}
`;

class WeatherCommandCenter extends HTMLElement {
  static getStubConfig() {
    return {type:'custom:weather-command-center',weather_entity:'weather.home',name:'Home Weather'};
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
      uv_entity: config.uv_entity,
      radar_entity: config.radar_entity,
      radar_url: config.radar_url,
      location: config.location || '',
      forecast_days: Math.min(7, Math.max(1, Number(config.forecast_days || 7))),
      background_urls: config.background_urls || {}
    };
    this._forecastKey = '';
    this._forecast = [];
    this.render();
  }

  set hass(hass) { this._hass = hass; this.render(); }
  getCardSize() { return 8; }

  _state(id) { return id && this._hass ? this._hass.states[id] : undefined; }
  _value(id, fallback='—') {
    const s = this._state(id);
    return s && !['unavailable','unknown'].includes(s.state) ? s.state : fallback;
  }
  _unit(id, fallback='') { return this._state(id)?.attributes?.unit_of_measurement || fallback; }

  _icon(condition) {
    const map = {
      sunny:'☀️','clear-night':'🌙',partlycloudy:'⛅',cloudy:'☁️',
      rainy:'🌧️',pouring:'🌧️',lightning:'⛈️','lightning-rainy':'⛈️',
      snowy:'🌨️',snow:'❄️',windy:'💨','windy-variant':'🌬️',
      fog:'🌫️',hail:'🌨️',exceptional:'⚠️'
    };
    return map[condition] || '🌤️';
  }

  _label(c) { return c ? c.replace(/-/g,' ').replace(/\b\w/g,x=>x.toUpperCase()) : 'Unknown'; }

  _bgClass(c) {
    if (!c) return 'default';
    if (c.includes('lightning')) return 'storm';
    if (c.includes('rain')) return 'rain';
    if (c.includes('snow')) return 'snow';
    if (c === 'cloudy' || c === 'fog') return 'cloud';
    if (c === 'clear-night') return 'night';
    if (c === 'sunny' || c === 'partlycloudy') return 'sun';
    return 'default';
  }

  _backgroundUrl(condition) {
    const urls = this.config.background_urls || {};
    return urls[condition] || urls[this._bgClass(condition)] || urls.default || '';
  }

  async _getForecast() {
    if (!this._hass?.callWS) return [];
    try {
      const response = await this._hass.callWS({
        type:'call_service',
        domain:'weather',
        service:'get_forecasts',
        service_data:{type:'daily'},
        target:{entity_id:this.config.weather_entity},
        return_response:true
      });
      return response?.response?.[this.config.weather_entity]?.forecast
        || response?.[this.config.weather_entity]?.forecast || [];
    } catch (error) {
      console.warn('Weather Command Center forecast error', error);
      return [];
    }
  }

  _day(value) {
    try { return new Intl.DateTimeFormat(undefined,{weekday:'short'}).format(new Date(value)); }
    catch(e) { return '—'; }
  }

  _time(value) {
    try { return new Intl.DateTimeFormat(undefined,{hour:'2-digit',minute:'2-digit'}).format(new Date(value)); }
    catch(e) { return '—'; }
  }

  _radarSource() {
    if (this.config.radar_url) return this.config.radar_url;
    const state = this._state(this.config.radar_entity);
    return state?.attributes?.entity_picture || state?.attributes?.image || '';
  }

  _windSvg(direction, speed) {
    const bearing = Number(direction);
    const validBearing = Number.isFinite(bearing) ? bearing : 0;
    const numericSpeed = Number(speed);
    const speedText = Number.isFinite(numericSpeed) ? `${speed} ${this._unit(this.config.wind_speed_entity,'')}` : '—';
    const len = 78;
    const angle = validBearing * Math.PI / 180;
    const x2 = 120 + Math.sin(angle) * len;
    const y2 = 120 - Math.cos(angle) * len;
    const bx = x2 - Math.sin(angle - Math.PI / 6) * 16;
    const by = y2 + Math.cos(angle - Math.PI / 6) * 16;
    const cx = x2 - Math.sin(angle + Math.PI / 6) * 16;
    const cy = y2 + Math.cos(angle + Math.PI / 6) * 16;
    return `<div><div class="wind-wrap"><svg class="wind-svg" viewBox="0 0 240 240" aria-label="Wind direction ${validBearing.toFixed(0)} degrees"><circle class="ring" cx="120" cy="120" r="92"/><circle class="ring" cx="120" cy="120" r="66"/><circle class="ring" cx="120" cy="120" r="40"/><line class="axis" x1="120" y1="18" x2="120" y2="222"/><line class="axis" x1="18" y1="120" x2="222" y2="120"/><text x="120" y="13" text-anchor="middle">N</text><text x="228" y="124" text-anchor="middle">E</text><text x="120" y="235" text-anchor="middle">S</text><text x="12" y="124" text-anchor="middle">W</text><line class="arrow" x1="120" y1="120" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/><polygon class="arrowhead" points="${x2.toFixed(1)},${y2.toFixed(1)} ${bx.toFixed(1)},${by.toFixed(1)} ${cx.toFixed(1)},${cy.toFixed(1)}"/><circle class="center" cx="120" cy="120" r="9"/></svg></div><div class="wind-readout">${validBearing.toFixed(0)}° · ${speedText}</div></div>`;
  }

  async render() {
    if (!this.config || !this._hass) return;
    const weather = this._state(this.config.weather_entity);
    if (!weather) {
      this.innerHTML=`<ha-card><div class="error">Weather entity <b>${this.config.weather_entity}</b> was not found.</div></ha-card>`;
      return;
    }

    if (!this._styleAdded) {
      const style=document.createElement('style');
      style.textContent=WCC_STYLES;
      this.appendChild(style);
      this._styleAdded=true;
    }

    const a=weather.attributes||{};
    const condition=weather.state;
    const temp=this.config.temperature_entity ? this._value(this.config.temperature_entity) : a.temperature ?? '—';
    const tempUnit=this.config.temperature_entity ? this._unit(this.config.temperature_entity) : a.temperature_unit || '°';
    const humidity=this.config.humidity_entity ? this._value(this.config.humidity_entity) : a.humidity ?? '—';
    const pressure=this.config.pressure_entity ? this._value(this.config.pressure_entity) : a.pressure ?? '—';
    const wind=this.config.wind_speed_entity ? this._value(this.config.wind_speed_entity) : a.wind_speed ?? '—';
    const windUnit=this.config.wind_speed_entity ? this._unit(this.config.wind_speed_entity) : a.wind_speed_unit || '';
    const direction=this.config.wind_direction_entity ? this._value(this.config.wind_direction_entity) : a.wind_bearing ?? '—';
    const uv=this.config.uv_entity ? this._value(this.config.uv_entity) : a.uv_index ?? '—';

    const key=`${this.config.weather_entity}|${weather.last_updated||''}`;
    if (key !== this._forecastKey) {
      this._forecastKey=key;
      this._forecast=await this._getForecast();
    }

    const days=(this._forecast||[]).slice(0,this.config.forecast_days);
    const forecastHtml=days.map(day=>`<div class="day"><div class="day-name">${this._day(day.datetime)}</div><div class="day-icon">${this._icon(day.condition)}</div><div class="day-temp"><b>${day.temperature ?? '—'}°</b> <span>${day.templow!=null ? day.templow+'°' : ''}</span></div><div class="day-rain">${day.precipitation_probability!=null ? day.precipitation_probability+'%' : '—'} rain</div></div>`).join('');

    const radar=this._radarSource();
    const radarHtml=radar
      ? `<img class="radar" src="${radar}" alt="Weather radar">`
      : `<div class="radar-empty">Radar source not configured.<br><br>Set <b>radar_entity</b> or <b>radar_url</b> in the card configuration.</div>`;

    const windHtml=this._windSvg(direction,wind);
    const background=this._backgroundUrl(condition);
    const shellClass=`shell ${this._bgClass(condition)}${background ? ' has-bg' : ''}`;
    const shellStyle=background ? ` style="background-image:url('${background.replace(/'/g,"%27")}')"` : '';

    const old=this.querySelector('ha-card');
    if(old) old.remove();

    const card=document.createElement('ha-card');
    card.innerHTML=`<div class="${shellClass}"${shellStyle}>
      <div class="topbar"><div><div class="eyebrow">WEATHER COMMAND CENTER</div><div class="title">${this.config.name}</div></div><div class="condition-pill">${this._icon(condition)} ${this._label(condition)}</div></div>
      <div class="hero"><div class="hero-main"><div class="hero-icon">${this._icon(condition)}</div><div><div class="temperature">${temp}<span>${tempUnit}</span></div><div class="feels">Feels like ${a.apparent_temperature ?? '—'}${tempUnit}</div></div></div><div class="location">${this.config.location || a.friendly_name || this.config.name}</div></div>
      <div class="metrics"><div class="metric"><span>Humidity</span><strong>${humidity}${humidity!=='—'?'%':''}</strong></div><div class="metric"><span>Pressure</span><strong>${pressure}</strong></div><div class="metric"><span>Wind</span><strong>${wind} ${windUnit}</strong></div><div class="metric"><span>Direction</span><strong>${direction}°</strong></div><div class="metric"><span>UV Index</span><strong>${uv}</strong></div></div>
      <div class="content-grid">
        <div class="panel"><div class="panel-title"><strong>WEATHER RADAR</strong><span class="panel-subtitle">${this.config.radar_entity || 'Radar'}</span></div>${radarHtml}</div>
        <div class="panel"><div class="panel-title"><strong>WIND</strong><span class="panel-subtitle">Current direction & speed</span></div>${windHtml}</div>
      </div>
      <section><div class="section-title days-title">7 DAY FORECAST</div><div class="days">${forecastHtml || '<div class="empty">Forecast unavailable</div>'}</div></section>
      <div class="footer">${weather.last_updated ? `Updated ${this._time(weather.last_updated)}` : 'Live Home Assistant weather data'}</div>
    </div>`;
    this.appendChild(card);
  }
}

if(!customElements.get('weather-command-center')) customElements.define('weather-command-center',WeatherCommandCenter);
window.customCards=window.customCards||[];
if(!window.customCards.some(c=>c.type==='weather-command-center')) window.customCards.push({
  type:'weather-command-center',
  name:'Weather Command Center',
  description:'Full-screen weather command center for Home Assistant',
  preview:true,
  getEntitySuggestion:(h,e)=>e?.startsWith('weather.') ? {config:{type:'custom:weather-command-center',weather_entity:e}} : null
});
