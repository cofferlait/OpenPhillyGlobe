var viewer = new Cesium.Viewer('cesiumContainer');
    
//Adds default balloon and tracking support (left click/right click)
viewer.extend(Cesium.viewerDynamicObjectMixin);
    
//Load a data source GeoJsonDataSource, KmlDataSource, CzmlDataSource
var geoJsonDataSource = new Cesium.GeoJsonDataSource();
    
//If you want to style the GeoJsonDataSource, you can do it before loading a file
var billboard = new Cesium.DynamicBillboard();
    
//Use a billboard instead of a point
geoJsonDataSource.defaultPoint.point = undefined;    
geoJsonDataSource.defaultPoint.billboard = billboard;
billboard.show = new Cesium.ConstantProperty(true);
billboard.image = new Cesium.ConstantProperty('http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png');
billboard.width = new Cesium.ConstantProperty(32);
billboard.height = new Cesium.ConstantProperty(32);
billboard.verticalOrigin = new Cesium.ConstantProperty(Cesium.VerticalOrigin.BOTTOM);
    
//Make polygon solid plue
geoJsonDataSource.defaultPolygon.polygon.material.color = new Cesium.ConstantProperty(Cesium.Color.clone(Cesium.Color.BLUE));
//Make polyline solid plue
geoJsonDataSource.defaultLine.polyline.color = new Cesium.ConstantProperty(Cesium.Color.clone(Cesium.Color.RED));

//Actually load the data source
geoJsonDataSource.loadUrl('Assets/example.geojson');
    
//Add it to viewer.
viewer.dataSources.add(geoJsonDataSource);
    
//If using the data source layer, you can programmatically bring up the balloon browser by assigning a dynamic object to
//viewer.balloonedObject = dynamicObject