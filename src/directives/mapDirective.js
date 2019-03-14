angular
    .module("TrixRoutes")
    .directive("map", (mapFactory) => {
        return {   
            link: (scope, element) => {
                var center = [scope.origin.coords.lat, scope.origin.coords.lng]
                mapFactory.map(element[0],center);      
            }
        };
    })