angular
    .module("TrixRoutes")
    .constant("config", {

        urlAPI: "http://localhost:8080/TrixRoutesAPI",
        map:{            
            zoom: 10
        },
        tileLayer: {
            id: 'mapbox.streets',
            attr: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            token:'pk.eyJ1Ijoiam1ldGhvcyIsImEiOiJjanQ2cDZ4bzUwanU2NDRvN25lbWVjNmpsIn0.gThk56pXvT2DgOxkBKWTow',
        } 
    });
