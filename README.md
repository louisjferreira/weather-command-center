# Weather Command Center

A full-screen, responsive weather command center card for Home Assistant.

## Status

**Early development / v0.1.0**

The project is being developed as a standalone Lovelace custom card with HACS distribution in mind.

## Planned features

- Full-screen responsive weather dashboard
- Current conditions
- Weather station data
- Dynamic weather presentation
- Hourly forecast
- Daily forecast
- Temperature and precipitation graphs
- Wind information and wind rose
- Radar integration
- Configurable Home Assistant entities
- Graceful handling of unavailable entities
- HACS installation

## Installation

### HACS

This repository is intended to be installed through HACS as a Lovelace dashboard resource.

Until the project is released through the normal HACS discovery process, add this repository as a **Custom repository** in HACS under **Dashboard**.

### Manual

Copy `dist/weather-command-center.js` into your Home Assistant `www` directory and add it as a Lovelace JavaScript module resource.

## Basic configuration

```yaml
type: custom:weather-command-center
weather_entity: weather.home
name: Home Weather
```

The card is designed so additional entity mappings can be added without changing the card itself.

## Development

Source code lives in `src/` and the distributable browser file lives in `dist/`.

## License

MIT
