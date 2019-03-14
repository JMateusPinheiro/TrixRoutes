angular
    .module("TrixRoutes")
    .factory("mapFactory", (config) => {
    
    var _map = (element,center) => {
        map = L.map(element, {center: center,zoom: config.map.zoom});

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                id: config.tileLayer.id,
                attribution: config.tileLayer.attr,
                accessToken: config.tileLayer.token
        }).addTo(map);
    }
    var _marker = (origin, destination, waypoints) =>{
        //Marker for origin
        L.marker([origin.coords.lat, origin.coords.lng]).addTo(map)
                .bindPopup(origin.name)
                .togglePopup();

        //Marker for destination
        L.marker([destination.coords.lat, destination.coords.lng]).addTo(map)
                .bindPopup(destination.name)
                .togglePopup();

        //Marker for waypoints
        for (var i = 0; i < waypoints.length; i++) {
            L.marker([waypoints[i].coords.lat, waypoints[i].coords.lng]).addTo(map)
                .bindPopup(waypoints[i].name)
                .togglePopup();
        }
    }

    var _polyline = (path) => {            
            new L.Polyline(path, {color:'red'}).addTo(map);
    }

    return{
        map: _map,
        marker: _marker,
        polyline: _polyline
    }

    })