(function() {
  var artmap, createMap, latlng, map, mapxs, marker, tileOptions, tiles;

  tiles = '/assets/tiles/{z}/{x}/{y}.jpg';

  tileOptions = {
    minZoom: 12,
    maxZoom: 12,
    noWrap: true
  };

  createMap = function(elementId, center) {
    var mapElement, mapInstance;

    mapElement = document.getElementById(elementId);
    if (!mapElement) {
      return null;
    }

    mapInstance = L.map(mapElement, {
      scrollWheelZoom: false
    }).setView(center, 12);
    L.tileLayer(tiles, tileOptions).addTo(mapInstance);
    return mapInstance;
  };

  latlng = [-34.59359, -58.38327];

  map = createMap('map', latlng);
  mapxs = createMap('map-xs', latlng);

  if (map) {
    marker = L.marker(latlng).addTo(map);
    marker.bindPopup(window.venueAddress).openPopup();
  }

  if (mapxs) {
    marker = L.marker(latlng).addTo(mapxs);
    marker.bindPopup(window.venueAddress).openPopup();
  }

  artmap = createMap('artmap', [-34.57158, -58.43926]);

}).call(this);
