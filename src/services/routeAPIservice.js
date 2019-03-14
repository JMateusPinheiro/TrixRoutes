angular
    .module("TrixRoutes")
    .service("routeAPI", function ($http, config) {
        this.getPath = (origin, destination, waypoints) => {
            return $http.get(config.urlAPI + "/path/get?origin=" + origin +"&destination=" + destination + "&waypoints=" + waypoints);
        }
        this.getLocation = (location) => {
            return $http.get(config.urlAPI + "/location/get?location=" + location)
        }
    })