
// Maps

function init() {
  var mapFrom = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {
      lat: 39.9431407,
      lng: -2.9947564
    },
    zoom: 6
  });

  var searchBox = new google.maps.places.SearchBox(document.getElementById('pac-input'), {
    types: ['geocode']
  });

  // --------- Map From

  google.maps.event.addListener(searchBox, 'places_changed', function() {
    searchBox.set('map', null);

    var places = searchBox.getPlaces();
    var bounds = new google.maps.LatLngBounds();
    var i, place;
    for (i = 0; place = places[i]; i++) {
      (function(place) {
        var marker = new google.maps.Marker({

          position: place.geometry.location
        });
        marker.bindTo('map', searchBox, 'map');
        google.maps.event.addListener(marker, 'map_changed', function() {
          if (!this.getMap()) {
            this.unbindAll();
          }
        });
        bounds.extend(place.geometry.location);

      }(place));

    }
    mapFrom.fitBounds(bounds);
    searchBox.set('map', mapFrom);
    mapFrom.setZoom(Math.min(mapFrom.getZoom(),12));

  });

  // --------- Map To


  var mapTo = new google.maps.Map(document.getElementById('map-canvas1'), {
    center: {
      lat: 39.9431407,
      lng: -2.9947564
    },
    zoom: 6
  });

  var searchBox1 = new google.maps.places.SearchBox(document.getElementById('pac-input1'), {
    types: ['geocode']
  });

  google.maps.event.addListener(searchBox1, 'places_changed', function() {
    searchBox1.set('map', null);

    var places = searchBox1.getPlaces();
    var bounds = new google.maps.LatLngBounds();
    var i, place;
    for (i = 0; place = places[i]; i++) {
      (function(place) {
        var marker = new google.maps.Marker({

          position: place.geometry.location
        });
        marker.bindTo('map', searchBox1, 'map');
        google.maps.event.addListener(marker, 'map_changed', function() {
          if (!this.getMap()) {
            this.unbindAll();
          }
        });
        bounds.extend(place.geometry.location);

      }(place));

    }
    mapTo.fitBounds(bounds);
    searchBox.set('map', mapTo);
    mapTo.setZoom(Math.min(mapTo.getZoom(),12));

  });
}

google.maps.event.addDomListener(window, 'load', init);