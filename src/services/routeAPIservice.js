angular
    .module("TrixRoutes")
    .service("routeAPI",($http, config) => {
        getPath = (origin, destination, waypoints) => {
            return $http.get(config.urlAPI + "/path/get?origin=" + origin +"&destination=" + destination + "&waypoints=" + waypoints);
        }
        getLocation = (location) => {
            return $http.get(config.urlAPI + "/location/get?=" + location)
        }
    })