# State of the Map 2014

Standalone archival website for State of the Map 2014. It is based on the final
Rails application at
[https://github.com/osm-ar/libreconf/tree/early-bird](https://github.com/osm-ar/libreconf/tree/early-bird)
and material recovered from the Internet Archive.

## Local preview

```sh
docker compose up --build
```

Open <http://localhost:8080>. The Spanish home page is `/`; the English home
page is `/en.html`.

## Archived content

- Spanish and English home, accommodation, transportation, and program routes
	are plain HTML.
- All 40 sessions linked from the program have local pages. Seven use exact
	Wayback captures; the other 33 use the same OpenStreetMap wiki source as the
	original Rails mirror.
- Mapbox tiles recovered from the Internet Archive are served locally from
	`assets/tiles/`; the site does not contact a live tile service.
- Google Analytics, Rails CSRF metadata, and asset-pipeline `?body=1` suffixes
	have been removed.

## AI assistance

Model used: GPT-5.6 Sol.

GitHub Copilot was used to help compare the original Rails application with
archived material, reconstruct the static pages and assets, and validate the
resulting website.
