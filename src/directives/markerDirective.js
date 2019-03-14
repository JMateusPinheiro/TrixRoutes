angular
    .module("TrixRoutes")
    .directive("marker", (mapFactory)=>{
        return {
            link: (scope) => {
                mapFactory.marker(scope.origin, scope.destination, scope.waypoints);
            }
        }
    })