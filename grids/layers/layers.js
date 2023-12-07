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
var format_csiem_mesh_A001_lo_1 = new ol.format.GeoJSON();
var features_csiem_mesh_A001_lo_1 = format_csiem_mesh_A001_lo_1.readFeatures(json_csiem_mesh_A001_lo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csiem_mesh_A001_lo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csiem_mesh_A001_lo_1.addFeatures(features_csiem_mesh_A001_lo_1);
var lyr_csiem_mesh_A001_lo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_csiem_mesh_A001_lo_1, 
                style: style_csiem_mesh_A001_lo_1,
                interactive: true,
    title: 'csiem_mesh_A001_lo<br />\
    <img src="styles/legend/csiem_mesh_A001_lo_1_0.png" /> -108 - -97<br />\
    <img src="styles/legend/csiem_mesh_A001_lo_1_1.png" /> -97 - -86<br />\
    <img src="styles/legend/csiem_mesh_A001_lo_1_2.png" /> -86 - -74<br />\
    <img src="styles/legend/csiem_mesh_A001_lo_1_3.png" /> -74 - -63<br />\
    <img src="styles/legend/csiem_mesh_A001_lo_1_4.png" /> -63 - -52<br />\
    <img src="styles/legend/csiem_mesh_A001_lo_1_5.png" /> -52 - -41<br />\
    <img src="styles/legend/csiem_mesh_A001_lo_1_6.png" /> -41 - -30<br />\
    <img src="styles/legend/csiem_mesh_A001_lo_1_7.png" /> -30 - -18<br />\
    <img src="styles/legend/csiem_mesh_A001_lo_1_8.png" /> -18 - -7<br />\
    <img src="styles/legend/csiem_mesh_A001_lo_1_9.png" /> -7 - 4<br />'
        });
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_ESRIGraylight_0,],
                                title: "Basemaps"});

lyr_ESRIGraylight_0.setVisible(true);lyr_csiem_mesh_A001_lo_1.setVisible(true);
var layersList = [group_Basemaps,lyr_csiem_mesh_A001_lo_1];
lyr_csiem_mesh_A001_lo_1.set('fieldAliases', {'Z': 'Z', 'Mat_Zone': 'Mat_Zone', });
lyr_csiem_mesh_A001_lo_1.set('fieldImages', {'Z': 'TextEdit', 'Mat_Zone': 'Range', });
lyr_csiem_mesh_A001_lo_1.set('fieldLabels', {'Z': 'no label', 'Mat_Zone': 'no label', });
lyr_csiem_mesh_A001_lo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});