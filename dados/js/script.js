var lat;

var lon;

 

if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(

    	  function(posicao){

 

	    	console.log(posicao);

 

	   		lat = posicao.coords.latitude;

	   		lon = posicao.coords.longitude;

 

      		console.log(lat, lon);

      		geraMapa();

    	  } 

    );

}

 

 

function geraMapa(){

	var map = new ol.Map({

	    target: 'map',

	    layers: [

	      new ol.layer.Tile({

	        source: new ol.source.OSM()

	      })

	    ],

	    view: new ol.View({

	      center: ol.proj.fromLonLat([lon, lat]),

	      zoom: 10

	    })

	});

}