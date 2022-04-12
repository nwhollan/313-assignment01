

 /*import {Circle, Fill, Stroke, Style} from 'ol/style';

 const fill = new Fill({
   color: 'rgba(255,255,255,0.4)',
 });
 const stroke = new Stroke({
   color: '#3399CC',
   width: 1.25,
 });
 const styles = [
   new Style({
     image: new Circle({
       fill: fill,
       stroke: stroke,
       radius: 5,
     }),
     fill: fill,
     stroke: stroke,
   }),
 ];
 */

 var inStateStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: [64, 200, 200, 0.5],
      width: 1
    }),
    text: new ol.style.Text({
      font: '20px Verdana',
      text: 'o',
      fill: new ol.style.Fill({
        color: [250, 0, 230, 0.75]
      })
    })
  });
  
  var outOfStateStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: [64, 200, 200, 0.5],
      width: 1
    }),
    text: new ol.style.Text({
      font: '20px Verdana',
      text: 'o',
      fill: new ol.style.Fill({
        color: [43, 0, 250, 0.75]
      })
    })
  });
  
  var outOfCountryStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: [64, 200, 200, 0.5],
      width: 1
    }),
    text: new ol.style.Text({
      font: '20px Verdana',
      text: 'o',
      fill: new ol.style.Fill({
        color: [13, 250, 0, 0.75]
      })
    })
  });



var broomfieldLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([-105.052419, 39.944229]))
            })
        ]
    }),
    style: outOfStateStyle
});

var oaklandLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([-122.235277, 37.758797]))
            })
        ]

    }),
    style: inStateStyle
});

var glendaleLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([-118.244927, 34.193008]))
            })
        ]

    }),
    style: inStateStyle
});

var redondoBeachLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([-118.388500, 33.847276]))
            })
        ]

    }),
    style: inStateStyle
});

var ashlandLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([-123.288574, 44.100086]))
            })
        ]

    }),
    style: outOfStateStyle
});

var delhiLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([77.092568, 28.644309]))
            })
        ]

    }),
    style: outOfCountryStyle
});

var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      broomfieldLayer, oaklandLayer, glendaleLayer, redondoBeachLayer, ashlandLayer, delhiLayer
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-120.670375, 35.272496]),
      zoom: 0
    })
});
