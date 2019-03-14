angular
    .module("TrixRoutes")
    .directive("polyline", (mapFactory)=>{
        return {                 
            link: function (scope) {                         
                mapFactory.polyline(scope.path)     
            }
        };
    })