# Weather Command Center

A full-screen, responsive weather command center card for Home Assistant.

[![HACS](https://img.shields.io/badge/HACS-Dashboard-41BDF5.svg)](https://www.hacs.xyz/)

## Status

**Early development — v0.2.0**

The project is being developed as a standalone Lovelace custom card with HACS distribution in mind.

## Current features

- Responsive weather command-center layout
- Current conditions and feels-like temperature
- Configurable local weather-station observations
- Wind compass / directional visualization
- Regional radar integration with RainViewer where coverage exists
- Graceful radar fallback where coverage is unavailable
- Radar timeline controls and zoom
- Home Assistant weather forecast API integration
- Up to 7 daily forecast tiles
- Dynamic weather-themed backgrounds
- Optional photographic background URLs
- Mobile/tablet responsive layout
- Configurable Home Assistant entity mapping
- Optional Weather Underground station identifier for display/identity
- HACS-compatible distribution

## Roadmap

- Full satellite/weather-map provider abstraction
- Rich Wind Rose with historical distribution
- Hourly forecast and trend graphs
- Rain and temperature graphs
- Better automatic weather-station discovery
- Weather Underground data integration through a safe Home Assistant-side mechanism
- Animated weather backgrounds
- Visual configuration editor
- Versioned HACS releases and default-store submission

## Installation

### HACS — Custom Repository

1. Open **HACS**.
2. Open **Dashboard**.
3. Open the three-dot menu and select **Custom repositories**.
4. Add `louisjferreira/weather-command-center`.
5. Select **Dashboard** as the repository type.
6. Install **Weather Command Center**.

The normal HACS discovery/listing process is a separate step and will be pursued once the card reaches a suitable public release.

### Manual

Copy `dist/weather-command-center.js` into the Home Assistant `www` directory and register it as a Lovelace JavaScript module resource.

## Basic configuration

```yaml
type: custom:weather-command-center
weather_entity: weather.forecast_home
name: Home Weather
location: Marondera
```

## Wittboy / Ecowitt configuration

The card does not require a Wittboy. Any Home Assistant sensor entities can be mapped into the local observation panel.

For a Wittboy installation, use the `wittboy:` mapping so the configuration remains readable:

```yaml
type: custom:weather-command-center
weather_entity: weather.forecast_home
name: Home Weather
location: Marondera

wittboy:
  temperature: sensor.ecowitt_outdoor_temp_80bf
  humidity: sensor.ecowitt_outdoor_humidity_80bf
  pressure: sensor.ecowitt_pressure_relative
  wind_speed: sensor.ecowitt_wind_speed_80bf
  wind_direction: sensor.ecowitt_wind_direction_80bf
  wind_gust: sensor.ecowitt_wind_gust_80bf
  uv: sensor.ecowitt_uv_index_80bf
  dew_point: sensor.ecowitt_dewpoint_80bf
  rain_rate: sensor.ecowitt_rain_rate_80bf
  rain_24h: sensor.ecowitt_0x7c_80bf
  solar: sensor.ecowitt_solar_radiation_80bf

station_name: Wittboy
weather_underground:
  station_id: IMASHO29
```

The entity IDs above are an example based on one Ecowitt installation. Other users can substitute their own entities.

The card will use attributes from `weather_entity` for the main current conditions when dedicated entities are not supplied.

## Radar

Radar is enabled by default and uses RainViewer's public weather-map endpoint where regional radar coverage exists. The card automatically uses the Home Assistant latitude and longitude to centre the map.

Ground-radar coverage is not available everywhere. In locations such as Zimbabwe where RainViewer does not provide useful radar coverage, the card intentionally displays a clear fallback rather than showing misleading empty radar imagery.

```yaml
radar: false
```

can be used to disable the panel if desired.

## Dynamic backgrounds

Optional background images can be supplied without changing the card source:

```yaml
background_urls:
  sunny: /local/weather/sunny.jpg
  partlycloudy: /local/weather/partly-cloudy.jpg
  cloudy: /local/weather/cloudy.jpg
  rainy: /local/weather/rain.jpg
  storm: /local/weather/storm.jpg
  clear-night: /local/weather/night.jpg
```

The card falls back to built-in gradients when no image is supplied.

## Development

```text
src/     Source implementation
dist/    HACS/browser distribution
scripts/ Build helpers
```

The GitHub Actions build workflow regenerates `dist/weather-command-center.js` whenever the source changes.

## License

MIT
