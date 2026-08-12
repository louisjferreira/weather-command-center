const WCC_STYLES = `<style>
:host{display:block;width:100%;color:#fff}
ha-card{overflow:hidden;border:0;background:transparent;box-shadow:none}
.shell{min-height:720px;box-sizing:border-box;padding:24px;border-radius:28px;position:relative;overflow:hidden;background:linear-gradient(145deg,#16283d,#315b7d);font-family:Roboto,sans-serif}
.shell.has-bg{background-size:cover;background-position:center}
.shell.has-bg:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,20,35,.20),rgba(8,20,35,.70));pointer-events:none}
.topbar,.hero,.metrics,.content-grid,.station,section,.footer{position:relative;z-index:1}
.topbar{display:flex;justify-content:space-between;align-items:flex-start;gap:20px}
.eyebrow,.section-title{font-size:10px;letter-spacing:.18em;opacity:.72;font-weight:700}
.title{font-size:27px;font-weight:700;margin-top:4px}
.condition-pill,.map-tab{border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.13);border-radius:999px;backdrop-filter:blur(12px);color:#fff}
.condition-pill{padding:8px 13px;white-space:nowrap}
.hero{display:flex;align-items:end;justify-content:space-between;gap:20px;min-height:170px;padding:10px 8px 22px}
.hero-main{display:flex;align-items:center;gap:22px}
.hero-icon{font-size:78px;line-height:1}
.temperature{font-size:88px;line-height:.95;font-weight:300;letter-spacing:-.06em}
.temperature span{font-size:34px;vertical-align:top;margin-left:5px;opacity:.75}
.feels{margin-top:8px;opacity:.72;font-size:14px}
.location{align-self:end;opacity:.72;font-size:13px}
.metrics{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:9px;margin-bottom:13px}
.metric,.panel,.station{padding:14px 16px;border-radius:17px;background:rgba(0,0,0,.14);border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(12px)}
.metric span,.station-item span,.wind-stat span{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.12em;opacity:.62;margin-bottom:6px}
.metric strong,.station-item strong,.wind-stat strong{font-size:17px;font-weight:600}
.content-grid{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(320px,.8fr);gap:13px;margin-bottom:13px}
.panel{min-height:280px;box-sizing:border-box}
.panel-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:9px}
.panel-title strong{font-size:11px;letter-spacing:.13em}
.panel-subtitle{font-size:10px;opacity:.55}
.map-tabs{display:flex;gap:5px;overflow:auto;margin-bottom:8px}
.map-tab{border-radius:8px;padding:5px 9px;font-size:9px;cursor:pointer;white-space:nowrap}
.map-tab.active{background:rgba(255,255,255,.2)}
.map-frame{height:225px;border-radius:13px;overflow:hidden;position:relative;background:#263747}
.map-frame img,.map-frame iframe{width:100%;height:100%;display:block;border:0}
.map-frame iframe{background:#263747}
.map-empty{height:225px;border-radius:13px;background:rgba(0,0,0,.12);display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;box-sizing:border-box;color:rgba(255,255,255,.68);font-size:12px}
.map-empty strong{display:block;color:#fff;margin-bottom:5px}
.map-controls{display:flex;justify-content:space-between;align-items:center;margin-top:8px}
.map-buttons{display:flex;gap:5px}
.map-btn{border:1px solid rgba(255,255,255,.16);background:rgba(0,0,0,.16);color:#fff;border-radius:8px;width:30px;height:27px;cursor:pointer}
.map-link{color:rgba(255,255,255,.75);font-size:10px;text-decoration:none}
.wind-panel{display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:center}
.wind-wrap{height:195px;display:flex;align-items:center;justify-content:center}
.wind-svg{width:205px;height:205px;max-width:100%}
.wind-svg text{fill:rgba(255,255,255,.72);font:700 10px Roboto,sans-serif}
.wind-svg .ring{fill:none;stroke:rgba(255,255,255,.16);stroke-width:1}
.wind-svg .axis{stroke:rgba(255,255,255,.12);stroke-width:1}
.wind-svg .arrow{stroke:#fff;stroke-width:4;stroke-linecap:round}
.wind-svg .arrowhead{fill:#fff}
.wind-svg .center{fill:rgba(255,255,255,.16);stroke:rgba(255,255,255,.35);stroke-width:1}
.wind-readout{text-align:center;font-size:12px;opacity:.8;margin-top:-12px}
.wind-stats{display:grid;gap:8px}
.wind-stat{padding:11px;border-radius:13px;background:rgba(0,0,0,.1);border:1px solid rgba(255,255,255,.07)}
.wind-stat strong{font-size:15px}
.station{margin-bottom:13px;padding:15px 16px}
.station-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:11px}
.station-head strong{font-size:11px;letter-spacing:.13em}
.station-head span{font-size:10px;opacity:.5}
.station-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:9px}
.station-item{padding:11px;border-radius:13px;background:rgba(0,0,0,.1);border:1px solid rgba(255,255,255,.07)}
.station-item strong{font-size:15px}
.days-title{margin:0 0 10px 3px}
.days{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:7px}
.day{text-align:center;padding:12px 7px;min-height:128px;border-radius:16px;background:rgba(0,0,0,.13);border:1px solid rgba(255,255,255,.09);backdrop-filter:blur(10px)}
.day-name{font-size:11px;font-weight:700;opacity:.75}
.day-icon{font-size:30px;margin:10px 0}
.day-temp{font-size:14px}
.day-temp span{opacity:.55;margin-left:4px}
.day-rain{margin-top:8px;font-size:10px;opacity:.62}
.footer{margin-top:14px;text-align:right;font-size:10px;opacity:.48}
.empty{padding:30px;opacity:.6}
@media(max-width:1000px){.content-grid{grid-template-columns:1fr}.metrics{grid-template-columns:repeat(3,1fr)}.station-grid{grid-template-columns:repeat(3,1fr)}}
@media(max-width:700px){.shell{padding:17px;border-radius:20px;min-height:0}.hero{min-height:155px;align-items:flex-start;flex-direction:column}.hero-icon{font-size:58px}.temperature{font-size:62px}.metrics,.station-grid{grid-template-columns:repeat(2,1fr)}.wind-panel{grid-template-columns:1fr}.days{grid-template-columns:repeat(2,1fr)}}
</style>`;

const RAINVIEWER_API = 'https://api.rainviewer.com/public/weather-maps.json';
const SAT24_URL = 'https://www.sat24.com/en-gb/country/zw';
const DEFAULT_BACKGROUNDS = {
  sunny:'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2000&q=80',
  partlycloudy:'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2000&q=80',
  cloudy:'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2000&q=80',
  rainy:'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=2000&q=80',
  storm:'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=2000&q=80',
  snow:'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=2000&q=80',
  night:'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80',
  default:'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2000&q=80'
};

class WeatherCommandCenter extends HTMLElement {
  static getStubConfig(){return {type:'custom:weather-command-center',weather_entity:'weather.home',name:'Home Weather'}}

  setConfig(c){
    if(!c||typeof c!=='object') throw new Error('Invalid configuration');
    const w=c.wittboy||{},m=c.weather_map||{};
    this.config={
      weather_entity:c.weather_entity||c.entity||'weather.home',
      name:c.name||'Weather',
      temperature_entity:c.temperature_entity||w.temperature,
      humidity_entity:c.humidity_entity||w.humidity,
      pressure_entity:c.pressure_entity||w.pressure,
      wind_speed_entity:c.wind_speed_entity||w.wind_speed,
      wind_direction_entity:c.wind_direction_entity||w.wind_direction,
      wind_gust_entity:c.wind_gust_entity||w.wind_gust,
      uv_entity:c.uv_entity||w.uv,
      dew_point_entity:c.dew_point_entity||w.dew_point,
      feels_like_entity:c.feels_like_entity||w.feels_like,
      rain_rate_entity:c.rain_rate_entity||w.rain_rate,
      rain_24h_entity:c.rain_24h_entity||w.rain_24h,
      solar_entity:c.solar_entity||w.solar,
      location:c.location||'',
      station_name:c.station_name||'Local Weather Station',
      wu_station_id:c.weather_underground?.station_id||c.wu_station_id||'',
      forecast_days:Math.min(7,Math.max(1,Number(c.forecast_days||7))),
      background_urls:c.background_urls||{},
      auto_discover:w.auto_discover!==false,
      map_provider:m.provider||c.map_provider||'windy',
      windy_zoom:Number(m.windy_zoom||c.windy_zoom||7),
      sat24_url:m.sat24_url||c.sat24_url||SAT24_URL,
      wundermap_url:m.wundermap_url||c.wundermap_url||''
    };
    this._forecast=[];this._busy=false;this._discover={};this._mapProvider=this.config.map_provider;
    this._radarMeta=null;this._radarIndex=-1;this._radarZoom=6;this._radarBusy=false;this._radarError='';
    this.render();
  }

  set hass(h){this._hass=h;this.render()}
  getCardSize(){return 10}
  _state(id){return id&&this._hass?this._hass.states[id]:undefined}
  _value(id,f='—'){const s=this._state(id);return s&&!['unknown','unavailable'].includes(s.state)?s.state:f}
  _unit(id,f=''){return this._state(id)?.attributes?.unit_of_measurement||f}
  _num(id){const n=Number(this._value(id,NaN));return Number.isFinite(n)?n:null}

  _entity(explicit,patterns){
    if(explicit)return explicit;
    if(!this.config.auto_discover||!this._hass?.states)return;
    const key=patterns.join('|'),cached=this._discover[key];
    if(cached){const s=this._state(cached);if(s&&!['unknown','unavailable'].includes(s.state))return cached}
    let best,bestScore=-Infinity;
    for(const [id,s] of Object.entries(this._hass.states)){
      const idText=id.toLowerCase(),nameText=String(s.attributes?.friendly_name||'').toLowerCase(),text=`${idText} ${nameText}`;
      if(!/(ecowitt|witboy|wh90|ws90)/i.test(text))continue;
      let score=0;
      patterns.forEach((p,index)=>{const q=p.toLowerCase();if(nameText===q)score+=1000-index*10;else if(nameText.includes(q))score+=100-index*5;if(idText.includes(q.replace(/\s+/g,'_')))score+=60-index*3;if(idText.includes(q))score+=30-index*2});
      if(!['unknown','unavailable'].includes(s.state))score+=20;
      if(score>bestScore){bestScore=score;best=id}
    }
    if(best)this._discover[key]=best;
    return best;
  }

  _ids(){return{
    temperature:this._entity(this.config.temperature_entity,['outdoor temperature','outdoor temp','temperature_80bf']),
    humidity:this._entity(this.config.humidity_entity,['outdoor humidity','humidity_80bf']),
    pressure:this._entity(this.config.pressure_entity,['relative pressure','pressure relative','pressure_relative']),
    windSpeed:this._entity(this.config.wind_speed_entity,['wind speed','wind_speed','0x0b_80bf']),
    windDirection:this._entity(this.config.wind_direction_entity,['wind direction','wind_direction','0x0a_80bf']),
    windGust:this._entity(this.config.wind_gust_entity,['wind gust','wind_gust','gust','0x0c_80bf']),
    uv:this._entity(this.config.uv_entity,['uv index','uv_index','uv_index_80bf']),
    dew:this._entity(this.config.dew_point_entity,['dewpoint temperature','dew point','dewpoint','dewpoint_80bf']),
    feels:this._entity(this.config.feels_like_entity,['feels like temperature','feels like','feels_like_temp']),
    rainRate:this._entity(this.config.rain_rate_entity,['rain rate','rain_rate','0x0e_80bf']),
    rain24:this._entity(this.config.rain_24h_entity,['24-hour rain','24 hour rain','24h rain','0x7c_80bf']),
    solar:this._entity(this.config.solar_entity,['solar radiation','solar_radiation','solar_lux'])
  }}

  _icon(c){return({sunny:'☀️','clear-night':'🌙',partlycloudy:'⛅',cloudy:'☁️',rainy:'🌧️',pouring:'🌧️',lightning:'⛈️','lightning-rainy':'⛈️',snowy:'🌨️',snow:'❄️',windy:'💨','windy-variant':'🌬️',fog:'🌫️',hail:'🌨️',exceptional:'⚠️'})[c]||'🌤️'}
  _label(c){return c?c.replace(/-/g,' ').replace(/\b\w/g,x=>x.toUpperCase()):'Unknown'}
  _bg(c){if(c?.includes('lightning'))return'storm';if(c?.includes('rain'))return'rain';if(c?.includes('snow'))return'snow';if(c==='cloudy'||c==='fog')return'cloud';if(c==='clear-night')return'night';if(c==='sunny'||c==='partlycloudy')return'sun';return'default'}
  _day(v){try{return new Intl.DateTimeFormat(undefined,{weekday:'short'}).format(new Date(v))}catch(e){return'—'}}
  _tempUnit(id,a){return String(this._unit(id,a?.temperature_unit||'°C')).replace(/^°/,'')}
  _background(c){const u=this.config.background_urls||{};return u[c]||u[this._bg(c)]||u.default||DEFAULT_BACKGROUNDS[c]||DEFAULT_BACKGROUNDS[this._bg(c)]||DEFAULT_BACKGROUNDS.default}
  _loc(){const lat=Number(this._hass?.config?.latitude),lon=Number(this._hass?.config?.longitude);return Number.isFinite(lat)&&Number.isFinite(lon)?{lat,lon}:null}

  async _loadForecast(){if(!this._hass?.callWS||this._busy)return;this._busy=true;try{const r=await this._hass.callWS({type:'call_service',domain:'weather',service:'get_forecasts',service_data:{type:'daily'},target:{entity_id:this.config.weather_entity},return_response:true});this._forecast=r?.response?.[this.config.weather_entity]?.forecast||r?.[this.config.weather_entity]?.forecast||[]}catch(e){console.warn('WCC forecast',e)}finally{this._busy=false;this.render()}}
  async _radar(){if(this._radarMeta||this._radarBusy)return;this._radarBusy=true;try{const r=await fetch(RAINVIEWER_API,{cache:'no-store'});if(!r.ok)throw Error(r.status);const d=await r.json(),past=d?.radar?.past||[];this._radarMeta=past.length?{host:d.host,frames:past}:null;if(past.length)this._radarIndex=past.length-1;else this._radarError='No RainViewer radar frames were returned'}catch(e){this._radarError='RainViewer radar is not available for this location'}finally{this._radarBusy=false;this.render()}}
  _radarUrl(){const l=this._loc(),m=this._radarMeta;if(!l||!m?.frames?.length||this._radarIndex<0)return'';const f=m.frames[this._radarIndex];return`${m.host}${f.path}/512/${this._radarZoom}/${l.lat.toFixed(4)}/${l.lon.toFixed(4)}/2/1_0.png`}

  _windyUrl(){const l=this._loc(),lat=l?l.lat.toFixed(4):'-18.1850',lon=l?l.lon.toFixed(4):'31.5519',z=Math.min(11,Math.max(3,this.config.windy_zoom));return`https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&detailLat=${lat}&detailLon=${lon}&width=900&height=420&zoom=${z}&level=surface&overlay=radar&product=radar&menu=true&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1&play=1`}
  _wunderUrl(){const l=this._loc();if(this.config.wundermap_url)return this.config.wundermap_url;if(!l)return'https://www.wunderground.com/wundermap/';return`https://www.wunderground.com/wundermap/?lat=${l.lat}&lon=${l.lon}&wxsn=1&zoom=8`}
  _mapCandidates(){return[['windy','WINDY'],['radar','RADAR'],['wundermap','WUNDERMAP'],['satellite','SAT24']]}

  _mapHtml(){
    const p=this._mapProvider,tabs=this._mapCandidates().map(([k,n])=>`<button class="map-tab ${p===k?'active':''}" data-map="${k}">${n}</button>`).join('');
    let body='',credit='',link='';
    if(p==='windy'){body=`<div class="map-frame"><iframe src="${this._windyUrl()}" title="Windy weather map" frameborder="0" scrolling="no" allowfullscreen></iframe></div>`;credit='Windy';link=`<a class="map-link" href="${this._windyUrl()}" target="_blank" rel="noopener">Open Windy ↗</a>`}
    else if(p==='radar'){const u=this._radarUrl();body=u?`<div class="map-frame"><img src="${u}" alt="Rain radar"></div>`:`<div class="map-empty"><div><strong>Radar unavailable here</strong>${this._radarError||'Checking radar coverage…'}<br><small>Use Windy for the regional weather map.</small></div></div>`;credit='RainViewer';link=`<a class="map-link" href="https://www.rainviewer.com/" target="_blank" rel="noopener">RainViewer ↗</a>`}
    else if(p==='wundermap'){body=`<div class="map-frame"><iframe src="${this._wunderUrl()}" title="WunderMap" frameborder="0" scrolling="no" allowfullscreen></iframe></div>`;credit='Weather Underground';link=`<a class="map-link" href="${this._wunderUrl()}" target="_blank" rel="noopener">Open WunderMap ↗</a>`}
    else{body=`<div class="map-empty"><div><strong>SAT24</strong>Satellite coverage is available on the external SAT24 site, but its page does not reliably allow embedded dashboards.<br><small>Use Windy for the in-card view.</small></div></div>`;credit='SAT24';link=`<a class="map-link" href="${this.config.sat24_url}" target="_blank" rel="noopener">Open SAT24 ↗</a>`}
    return`<div class="map-tabs">${tabs}</div>${body}<div class="map-controls"><div class="map-buttons">${p==='radar'?'<button class="map-btn" data-map-action="prev">◀</button><button class="map-btn" data-map-action="next">▶</button><button class="map-btn" data-map-action="zoomout">−</button><button class="map-btn" data-map-action="zoomin">+</button>':''}</div><span class="panel-subtitle">${credit}</span>${link}</div>`
  }

  _wind(dir,speed,gust,pressure){
    const b=Number.isFinite(dir)?dir:0,n=Number(speed),u=this._unit(this._ids().windSpeed,'km/h'),len=66,a=b*Math.PI/180,x=100+Math.sin(a)*len,y=100-Math.cos(a)*len,bx=x-Math.sin(a-Math.PI/6)*14,by=y+Math.cos(a-Math.PI/6)*14,cx=x-Math.sin(a+Math.PI/6)*14,cy=y+Math.cos(a+Math.PI/6)*14;
    return`<div class="wind-panel"><div><div class="wind-wrap"><svg class="wind-svg" viewBox="0 0 200 200"><circle class="ring" cx="100" cy="100" r="68"/><circle class="ring" cx="100" cy="100" r="48"/><circle class="ring" cx="100" cy="100" r="29"/><line class="axis" x1="100" y1="22" x2="100" y2="178"/><line class="axis" x1="22" y1="100" x2="178" y2="100"/><text x="100" y="14" text-anchor="middle">N</text><text x="100" y="193" text-anchor="middle">S</text><text x="10" y="104" text-anchor="middle">W</text><text x="190" y="104" text-anchor="middle">E</text><line class="arrow" x1="100" y1="100" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/><polygon class="arrowhead" points="${x.toFixed(1)},${y.toFixed(1)} ${bx.toFixed(1)},${by.toFixed(1)} ${cx.toFixed(1)},${cy.toFixed(1)}"/><circle class="center" cx="100" cy="100" r="6"/></svg></div><div class="wind-readout">${Number.isFinite(n)?`${b.toFixed(0)}° · ${n.toFixed(1)} ${u}`:'No wind data'}</div></div><div class="wind-stats"><div class="wind-stat"><span>Gust</span><strong>${gust===null?'—':gust.toFixed(1)} ${this._unit(this._ids().windGust,'km/h')}</strong></div><div class="wind-stat"><span>Pressure</span><strong>${pressure===null?'—':pressure.toFixed(1)} ${this._unit(this._ids().pressure,'hPa')}</strong></div><div class="wind-stat"><span>Direction</span><strong>${Number.isFinite(dir)?this._cardinal(dir):'—'}</strong></div></div></div>`
  }
  _cardinal(d){const dirs=['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];return dirs[Math.round((d%360)/22.5)%16]}
  _format(id,dec=1,f='—'){const n=this._num(id);return n===null?f:n.toFixed(dec)}

  _render(){
    if(!this._hass){this.innerHTML='';return}
    const ids=this._ids(),ws=this._state(this.config.weather_entity),a=ws?.attributes||{},condition=ws?.state||'cloudy',temp=this._num(ids.temperature)??(Number.isFinite(Number(a.temperature))?Number(a.temperature):null),humidity=this._num(ids.humidity)??(Number.isFinite(Number(a.humidity))?Number(a.humidity):null),pressure=this._num(ids.pressure)??(Number.isFinite(Number(a.pressure))?Number(a.pressure):null),wind=this._num(ids.windSpeed)??(Number.isFinite(Number(a.wind_speed))?Number(a.wind_speed):null),dir=this._num(ids.windDirection)??(Number.isFinite(Number(a.wind_bearing))?Number(a.wind_bearing):null),gust=this._num(ids.windGust)??(Number.isFinite(Number(a.wind_gust_speed))?Number(a.wind_gust_speed):null),uv=this._num(ids.uv)??(Number.isFinite(Number(a.uv_index))?Number(a.uv_index):null),feels=this._num(ids.feels)??(Number.isFinite(Number(a.apparent_temperature))?Number(a.apparent_temperature):temp),unit=this._tempUnit(ids.temperature,a),bg=this._background(condition);
    this.innerHTML=`${WCC_STYLES}<ha-card><div class="shell has-bg ${this._bg(condition)}" style="background-image:url('${String(bg).replace(/'/g,"\\'")}')"><div class="topbar"><div><div class="eyebrow">WEATHER COMMAND CENTER</div><div class="title">${this.config.name}</div></div><div class="condition-pill">${this._icon(condition)} ${this._label(condition)}</div></div><div class="hero"><div class="hero-main"><div class="hero-icon">${this._icon(condition)}</div><div><div class="temperature">${temp===null?'—':temp.toFixed(1)}<span>°${unit}</span></div><div class="feels">Feels like ${feels===null?'—':feels.toFixed(1)}°${unit}</div></div></div><div class="location">${this.config.location||a.location_name||'Home'}</div></div><div class="metrics"><div class="metric"><span>Humidity</span><strong>${humidity===null?'—':humidity.toFixed(0)}%</strong></div><div class="metric"><span>Pressure</span><strong>${pressure===null?'—':pressure.toFixed(1)} ${this._unit(ids.pressure,'hPa')}</strong></div><div class="metric"><span>Wind</span><strong>${wind===null?'—':wind.toFixed(1)} ${this._unit(ids.windSpeed,'km/h')}</strong></div><div class="metric"><span>Direction</span><strong>${dir===null?'—':dir.toFixed(0)}°</strong></div><div class="metric"><span>UV Index</span><strong>${uv===null?'—':uv.toFixed(0)}</strong></div></div><div class="content-grid"><div class="panel"><div class="panel-title"><strong>WEATHER MAP</strong><span class="panel-subtitle">LIVE / SATELLITE / RADAR</span></div>${this._mapHtml()}</div><div class="panel"><div class="panel-title"><strong>WIND & ATMOSPHERE</strong><span class="panel-subtitle">LIVE OBSERVATION</span></div>${this._wind(dir,wind,gust,pressure)}</div></div><div class="station"><div class="station-head"><strong>LOCAL WEATHER STATION</strong><span>${this.config.station_name}${this.config.wu_station_id?` · ${this.config.wu_station_id}`:''}</span></div><div class="station-grid"><div class="station-item"><span>Dew Point</span><strong>${this._format(ids.dew,1)} ${this._unit(ids.dew,'°C')}</strong></div><div class="station-item"><span>Rain Rate</span><strong>${this._format(ids.rainRate,1)} ${this._unit(ids.rainRate,'mm/h')}</strong></div><div class="station-item"><span>24h Rain</span><strong>${this._format(ids.rain24,1)} ${this._unit(ids.rain24,'mm')}</strong></div><div class="station-item"><span>Wind Gust</span><strong>${this._format(ids.windGust,1)} ${this._unit(ids.windGust,'km/h')}</strong></div><div class="station-item"><span>Solar</span><strong>${this._format(ids.solar,1)} ${this._unit(ids.solar,'W/m²')}</strong></div></div></div><section><div class="section-title days-title">${this._forecast.length||0} DAY FORECAST</div><div class="days">${this._forecast.length?this._forecast.slice(0,this.config.forecast_days).map(f=>`<div class="day"><div class="day-name">${this._day(f.datetime)}</div><div class="day-icon">${this._icon(f.condition)}</div><div class="day-temp">${f.temperature??'—'}° <span>${f.templow??'—'}°</span></div><div class="day-rain">${f.precipitation_probability==null?'—':`${f.precipitation_probability}% rain`}</div></div>`).join(''):'<div class="empty">Forecast unavailable</div>'}</div></section><div class="footer">Updated ${new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</div></div></ha-card>`;this._wire()
  }

  _wire(){this.querySelectorAll('[data-map]').forEach(b=>b.onclick=()=>{this._mapProvider=b.dataset.map;this.render()});this.querySelectorAll('[data-map-action]').forEach(b=>b.onclick=()=>{const a=b.dataset.mapAction,m=this._radarMeta?.frames?.length||0;if(a==='prev'&&m)this._radarIndex=Math.max(0,this._radarIndex-1);if(a==='next'&&m)this._radarIndex=Math.min(m-1,this._radarIndex+1);if(a==='zoomout')this._radarZoom=Math.max(2,this._radarZoom-1);if(a==='zoomin')this._radarZoom=Math.min(7,this._radarZoom+1);this.render()})}
  render(){clearTimeout(this._timer);this._timer=setTimeout(()=>this._render(),0);if(this._hass&&!this._forecast.length&&!this._busy)this._loadForecast();if(this._hass&&!this._radarMeta&&!this._radarBusy)this._radar()}
}
if(!customElements.get('weather-command-center'))customElements.define('weather-command-center',WeatherCommandCenter);
