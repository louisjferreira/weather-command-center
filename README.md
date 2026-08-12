# Weather Command Center

A full-screen, responsive weather command center card for Home Assistant.

[![HACS](https://img.shields.io/badge/HACS-Dashboard-41BDF5.svg)](https://www.hacs.xyz/)

## Status

**Early development — v0.1.0**

The repository is public and structured as a Home Assistant HACS Dashboard element. The first milestone establishes the card architecture, responsive presentation, Home Assistant weather data integration and HACS-ready distribution.

## Current features

- Responsive weather command-center layout
- Current weather condition and temperature
- Feels-like temperature
- Humidity, pressure, wind, direction and UV values
- Home Assistant weather forecast API integration
- Up to 7 daily forecast tiles
- Dynamic weather-themed backgrounds
- Mobile/tablet responsive layout
- Configurable Home Assistant entity mapping
- Home Assistant card-picker suggestion for weather entities
- HACS-compatible `dist/` distribution

## Roadmap

The larger command center will add:

- Weather-station-specific panels
- Hourly forecast
- Temperature and precipitation graphs
- Wind rose
- Radar map and radar playback
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
weather_entity: weather.home
name: Home Weather
```

Optional entity mappings:

```yaml
type: custom:weather-command-center
weather_entity: weather.forecast_home
name: Home Weather
location: Marondera
temperature_entity: sensor.outside_temperature
humidity_entity: sensor.outside_humidity
pressure_entity: sensor.outside_pressure
wind_speed_entity: sensor.outside_wind_speed
wind_direction_entity: sensor.outside_wind_direction
uv_entity: sensor.uv_index
forecast_days: 7
```

The card will use attributes from the configured `weather_entity` where dedicated sensor entities are not supplied.

## Development

```text
src/     Source implementation
dist/    HACS/browser distribution
scripts/ Build helpers
```

The current build helper copies the source into the distributable file. As the project grows, this will be replaced with a proper production build/minification pipeline.

## Home Assistant compatibility

The card uses the Home Assistant frontend `hass` object and the `weather.get_forecasts` service rather than relying on the deprecated weather forecast state attribute. Home Assistant's current weather architecture exposes forecasts through the separate forecast API.

## License

MIT
