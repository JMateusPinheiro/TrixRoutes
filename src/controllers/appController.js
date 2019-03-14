angular
    .module("TrixRoutes")
    .controller("appController", function ($scope, routeAPI, mapFactory) {
        $scope.path = []
        $scope.origin = null
        $scope.destination = null
        $scope.waypoints = [];
        $scope.inputOrigin = "";
        $scope.inputDestination = "";
        $scope.listWaypoints = "";
        
        $scope.addWaypoint = (waypoint) => {
            $scope.listWaypoints.push(waypoint);
            delete $scope.waypoint
        }

        var getPath = (origin, detination, waypoints) => {
            routeAPI.getPath(origin,detination, waypoints)
                .then((data) => {                    
                    console.log(data.data[0]);
                    return data.data[0]
                })
                .catch(() => {
                    console.log("err getting a path")
                });
        }

        $scope.searchRoute = () => {
            $scope.path = []
            $scope.origin = null
            $scope.destination = null
            $scope.waypoints = [];

            //Searching origin
            console.log("Searching Route");
            routeAPI.getLocation($scope.inputOrigin)
            .then((data)=>{
                console.log(data.data)
                $scope.origin = data.data;
            })
            .catch((err) =>{
                console.log(err)
            })

            //Searching destination
            routeAPI.getLocation($scope.inputDestination)
            .then((data)=>{
                console.log(data.data)
                $scope.destination =  data.data;
            })
            .catch((err) =>{
                console.log(err)
            })

            //Cauculating Polyline
            routeAPI.getPath($scope.inputOrigin, $scope.inputDestination, $scope.listWaypoints)
            .then((data)=>{
                console.log(data);
                $scope.path = data.data
            })
            .catch((err) =>{
                console.log(err)
            })
        }
    })