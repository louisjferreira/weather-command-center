# Weather Command Center

A full-screen, responsive weather command center card for Home Assistant.

[![HACS](https://img.shields.io/badge/HACS-Dashboard-41BDF5.svg)](https://www.hacs.xyz/)

## Status

**Early development — v0.1.0**

The repository is public and structured as a Home Assistant HACS Dashboard element. The current milestone includes Home Assistant weather data, daily forecasts, a live wind display, and native RainViewer radar.

## Current features

- Responsive weather command-center layout
- Current weather condition and temperature
- Feels-like temperature
- Humidity, pressure, wind, direction and UV values
- Home Assistant `weather.get_forecasts` integration
- Up to 7 daily forecast tiles
- Native RainViewer radar
- Automatic radar centering from Home Assistant latitude/longitude
- Radar history playback controls
- Radar zoom controls
- RainViewer attribution
- Dynamic weather-themed backgrounds
- Optional configurable photographic background URLs
- Mobile/tablet responsive layout
- Configurable Home Assistant entity mapping
- Home Assistant card-picker suggestion for weather entities
- HACS-compatible `dist/` distribution

## Radar

The card can use RainViewer directly; no additional Home Assistant radar integration is required.

```yaml
radar: true
radar_zoom: 6
```

The radar uses the public RainViewer Weather Maps API. The current public API provides past radar frames at roughly 10-minute intervals for the previous two hours. The card caches the radar metadata for ten minutes and does not request future nowcast frames. RainViewer's current free API requires visible attribution, which is included in the radar panel.

Radar availability depends on RainViewer's coverage and source-radar availability for the configured Home Assistant location.

## Roadmap

The larger command center will add:

- Proper map/base-map rendering around the radar overlay
- Richer radar timeline and animation
- Ecowitt/Wittboy weather-station profile
- Wind rose using historical wind observations
- Hourly forecast
- Temperature and precipitation graphs
- Rainfall history and statistics
- Rich weather-condition backgrounds/animations
- More detailed observation panels
- Better visual configuration/editor support
- Release builds and versioned HACS releases

## Installation

### HACS — Custom Repository

The repository can be installed immediately through HACS as a custom Dashboard repository:

1. Open **HACS**.
2. Open **Dashboard**.
3. Open the three-dot menu and select **Custom repositories**.
4. Add `louisjferreira/weather-command-center`.
5. Select **Dashboard** as the repository type.
6. Install **Weather Command Center**.

The normal HACS discovery/listing process is a separate step and will be pursued once the card reaches a suitable public release.

### Manual

Copy `dist/weather-command-center.js` into the Home Assistant `www` directory and register it as a Lovelace JavaScript module resource.

## Configuration

Minimal configuration:

```yaml
type: custom:weather-command-center
weather_entity: weather.forecast_home
name: Home Weather
```

For a weather station, dedicated entities can be mapped while the weather entity supplies condition/forecast data:

```yaml
type: custom:weather-command-center
weather_entity: weather.micro_weather_station
name: Home Weather
location: Marondera

temperature_entity: sensor.ecowitt_outdoor_temp_80bf
humidity_entity: sensor.ecowitt_outdoor_humidity_80bf
pressure_entity: sensor.ecowitt_pressure_relative
wind_speed_entity: sensor.ecowitt_wind_speed_80bf
wind_direction_entity: sensor.ecowitt_wind_direction_80bf
uv_entity: sensor.ecowitt_uv_index_80bf

radar: true
radar_zoom: 6
forecast_days: 7
```

The card uses attributes from the configured `weather_entity` where dedicated sensor entities are not supplied.

Optional photographic backgrounds:

```yaml
background_urls:
  sunny: /local/weather/sunny.jpg
  partlycloudy: /local/weather/partly-cloudy.jpg
  cloudy: /local/weather/cloudy.jpg
  rainy: /local/weather/rainy.jpg
  storm: /local/weather/storm.jpg
  snow: /local/weather/snow.jpg
  clear-night: /local/weather/night.jpg
```

Set `radar: false` to disable the radar panel.

## Development

```text
src/     Source implementation
dist/    HACS/browser distribution
scripts/ Build helpers
```

The project is intentionally dependency-light so the card can run directly in the Home Assistant frontend without requiring a separate JavaScript runtime or frontend framework.

## Data sources

Weather and forecast data come from Home Assistant entities configured by the user. Radar imagery is supplied by RainViewer's public Weather Maps API. See the RainViewer API documentation for current coverage, terms and API limitations.

## Home Assistant compatibility

The card uses Home Assistant's frontend `hass` object and the `weather.get_forecasts` action with response data rather than relying on deprecated forecast state attributes.

## License

MIT
