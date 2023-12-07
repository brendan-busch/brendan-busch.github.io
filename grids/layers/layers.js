var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_B009_1 = new ol.format.GeoJSON();
var features_B009_1 = format_B009_1.readFeatures(json_B009_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B009_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B009_1.addFeatures(features_B009_1);
var lyr_B009_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_B009_1, 
                style: style_B009_1,
                interactive: true,
                title: '<img src="styles/legend/B009_1.png" /> B009'
            });
var format_A001_2 = new ol.format.GeoJSON();
var features_A001_2 = format_A001_2.readFeatures(json_A001_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A001_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A001_2.addFeatures(features_A001_2);
var lyr_A001_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A001_2, 
                style: style_A001_2,
                interactive: true,
                title: '<img src="styles/legend/A001_2.png" /> A001'
            });
var format_C001_3 = new ol.format.GeoJSON();
var features_C001_3 = format_C001_3.readFeatures(json_C001_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C001_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C001_3.addFeatures(features_C001_3);
var lyr_C001_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_C001_3, 
                style: style_C001_3,
                interactive: true,
                title: '<img src="styles/legend/C001_3.png" /> C001'
            });
var group_Domains = new ol.layer.Group({
                                layers: [lyr_B009_1,lyr_A001_2,lyr_C001_3,],
                                title: "Domains"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_ESRIGraylight_0,],
                                title: "Basemaps"});

lyr_ESRIGraylight_0.setVisible(true);lyr_B009_1.setVisible(true);lyr_A001_2.setVisible(true);lyr_C001_3.setVisible(true);
var layersList = [group_Basemaps,group_Domains];
lyr_B009_1.set('fieldAliases', {'FID': 'FID', });
lyr_A001_2.set('fieldAliases', {'FID': 'FID', });
lyr_C001_3.set('fieldAliases', {'FID': 'FID', });
lyr_B009_1.set('fieldImages', {'FID': 'TextEdit', });
lyr_A001_2.set('fieldImages', {'FID': 'TextEdit', });
lyr_C001_3.set('fieldImages', {'FID': 'TextEdit', });
lyr_B009_1.set('fieldLabels', {});
lyr_A001_2.set('fieldLabels', {});
lyr_C001_3.set('fieldLabels', {});
lyr_C001_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});