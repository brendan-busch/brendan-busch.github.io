var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIGraylight_1 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_MLAUZones_2 = new ol.format.GeoJSON();
var features_MLAUZones_2 = format_MLAUZones_2.readFeatures(json_MLAUZones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MLAUZones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MLAUZones_2.addFeatures(features_MLAUZones_2);
var lyr_MLAUZones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MLAUZones_2, 
                style: style_MLAUZones_2,
                interactive: true,
                title: '<img src="styles/legend/MLAUZones_2.png" /> MLAU Zones'
            });
var format_WaterQualityPhysChm_3 = new ol.format.GeoJSON();
var features_WaterQualityPhysChm_3 = format_WaterQualityPhysChm_3.readFeatures(json_WaterQualityPhysChm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterQualityPhysChm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterQualityPhysChm_3.addFeatures(features_WaterQualityPhysChm_3);
var lyr_WaterQualityPhysChm_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterQualityPhysChm_3, 
                style: style_WaterQualityPhysChm_3,
                interactive: true,
                title: '<img src="styles/legend/WaterQualityPhysChm_3.png" /> Water Quality (PhysChm)'
            });
var format_WaterQualityNutrient_4 = new ol.format.GeoJSON();
var features_WaterQualityNutrient_4 = format_WaterQualityNutrient_4.readFeatures(json_WaterQualityNutrient_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterQualityNutrient_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterQualityNutrient_4.addFeatures(features_WaterQualityNutrient_4);
var lyr_WaterQualityNutrient_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterQualityNutrient_4, 
                style: style_WaterQualityNutrient_4,
                interactive: true,
                title: '<img src="styles/legend/WaterQualityNutrient_4.png" /> Water Quality (Nutrient)'
            });
var format_WaterQualityLight_5 = new ol.format.GeoJSON();
var features_WaterQualityLight_5 = format_WaterQualityLight_5.readFeatures(json_WaterQualityLight_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterQualityLight_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterQualityLight_5.addFeatures(features_WaterQualityLight_5);
var lyr_WaterQualityLight_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterQualityLight_5, 
                style: style_WaterQualityLight_5,
                interactive: true,
                title: '<img src="styles/legend/WaterQualityLight_5.png" /> Water Quality (Light)'
            });
var format_WaterQualityContaminants_6 = new ol.format.GeoJSON();
var features_WaterQualityContaminants_6 = format_WaterQualityContaminants_6.readFeatures(json_WaterQualityContaminants_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterQualityContaminants_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterQualityContaminants_6.addFeatures(features_WaterQualityContaminants_6);
var lyr_WaterQualityContaminants_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterQualityContaminants_6, 
                style: style_WaterQualityContaminants_6,
                interactive: true,
                title: '<img src="styles/legend/WaterQualityContaminants_6.png" /> Water Quality (Contaminants)'
            });
var format_Misc_7 = new ol.format.GeoJSON();
var features_Misc_7 = format_Misc_7.readFeatures(json_Misc_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Misc_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Misc_7.addFeatures(features_Misc_7);
var lyr_Misc_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Misc_7, 
                style: style_Misc_7,
                interactive: true,
                title: '<img src="styles/legend/Misc_7.png" /> Misc'
            });
var format_Meteorology_8 = new ol.format.GeoJSON();
var features_Meteorology_8 = format_Meteorology_8.readFeatures(json_Meteorology_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meteorology_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meteorology_8.addFeatures(features_Meteorology_8);
var lyr_Meteorology_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Meteorology_8, 
                style: style_Meteorology_8,
                interactive: true,
                title: '<img src="styles/legend/Meteorology_8.png" /> Meteorology'
            });
var format_Light_9 = new ol.format.GeoJSON();
var features_Light_9 = format_Light_9.readFeatures(json_Light_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Light_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Light_9.addFeatures(features_Light_9);
var lyr_Light_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Light_9, 
                style: style_Light_9,
                interactive: true,
                title: '<img src="styles/legend/Light_9.png" /> Light'
            });
var format_Hydrology_10 = new ol.format.GeoJSON();
var features_Hydrology_10 = format_Hydrology_10.readFeatures(json_Hydrology_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hydrology_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydrology_10.addFeatures(features_Hydrology_10);
var lyr_Hydrology_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hydrology_10, 
                style: style_Hydrology_10,
                interactive: true,
                title: '<img src="styles/legend/Hydrology_10.png" /> Hydrology'
            });
var format_Hydrodynamics_11 = new ol.format.GeoJSON();
var features_Hydrodynamics_11 = format_Hydrodynamics_11.readFeatures(json_Hydrodynamics_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hydrodynamics_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydrodynamics_11.addFeatures(features_Hydrodynamics_11);
var lyr_Hydrodynamics_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hydrodynamics_11, 
                style: style_Hydrodynamics_11,
                interactive: true,
                title: '<img src="styles/legend/Hydrodynamics_11.png" /> Hydrodynamics'
            });
var format_EcologyPlanktonic_12 = new ol.format.GeoJSON();
var features_EcologyPlanktonic_12 = format_EcologyPlanktonic_12.readFeatures(json_EcologyPlanktonic_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EcologyPlanktonic_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EcologyPlanktonic_12.addFeatures(features_EcologyPlanktonic_12);
var lyr_EcologyPlanktonic_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EcologyPlanktonic_12, 
                style: style_EcologyPlanktonic_12,
                interactive: true,
                title: '<img src="styles/legend/EcologyPlanktonic_12.png" /> Ecology (Planktonic)'
            });
var format_EcologyBenthic_13 = new ol.format.GeoJSON();
var features_EcologyBenthic_13 = format_EcologyBenthic_13.readFeatures(json_EcologyBenthic_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EcologyBenthic_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EcologyBenthic_13.addFeatures(features_EcologyBenthic_13);
var lyr_EcologyBenthic_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EcologyBenthic_13, 
                style: style_EcologyBenthic_13,
                interactive: true,
                title: '<img src="styles/legend/EcologyBenthic_13.png" /> Ecology (Benthic)'
            });
var group_DataCategories = new ol.layer.Group({
                                layers: [lyr_WaterQualityPhysChm_3,lyr_WaterQualityNutrient_4,lyr_WaterQualityLight_5,lyr_WaterQualityContaminants_6,lyr_Misc_7,lyr_Meteorology_8,lyr_Light_9,lyr_Hydrology_10,lyr_Hydrodynamics_11,lyr_EcologyPlanktonic_12,lyr_EcologyBenthic_13,],
                                title: "Data Categories"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_ESRIGraylight_1,lyr_MLAUZones_2,],
                                title: "Basemaps"});

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRIGraylight_1.setVisible(true);lyr_MLAUZones_2.setVisible(true);lyr_WaterQualityPhysChm_3.setVisible(true);lyr_WaterQualityNutrient_4.setVisible(true);lyr_WaterQualityLight_5.setVisible(true);lyr_WaterQualityContaminants_6.setVisible(true);lyr_Misc_7.setVisible(true);lyr_Meteorology_8.setVisible(true);lyr_Light_9.setVisible(true);lyr_Hydrology_10.setVisible(true);lyr_Hydrodynamics_11.setVisible(true);lyr_EcologyPlanktonic_12.setVisible(true);lyr_EcologyBenthic_13.setVisible(true);
var layersList = [group_Basemaps,group_DataCategories];
lyr_MLAUZones_2.set('fieldAliases', {'Unit_Name': 'Unit_Name', 'Name': 'Name', 'Plot_Order': 'Plot_Order', 'BP_Region': 'BP_Region', 'BP_Order': 'BP_Order', });
lyr_WaterQualityPhysChm_3.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WaterQualityNutrient_4.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WaterQualityLight_5.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WaterQualityContaminants_6.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Misc_7.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Meteorology_8.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Light_9.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Hydrology_10.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Hydrodynamics_11.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_EcologyPlanktonic_12.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_EcologyBenthic_13.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_MLAUZones_2.set('fieldImages', {'Unit_Name': 'TextEdit', 'Name': 'TextEdit', 'Plot_Order': 'Range', 'BP_Region': 'TextEdit', 'BP_Order': 'Range', });
lyr_WaterQualityPhysChm_3.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WaterQualityNutrient_4.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WaterQualityLight_5.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WaterQualityContaminants_6.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Misc_7.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Meteorology_8.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Light_9.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Hydrology_10.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Hydrodynamics_11.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_EcologyPlanktonic_12.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_EcologyBenthic_13.set('fieldImages', {'Agency_Name': 'TextEdit', 'Program_Name': 'TextEdit', 'Station_ID': 'TextEdit', 'Site_Description': 'TextEdit', 'Tag': 'TextEdit', 'mAHD': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Label': 'TextEdit', });
lyr_MLAUZones_2.set('fieldLabels', {});
lyr_WaterQualityPhysChm_3.set('fieldLabels', {});
lyr_WaterQualityNutrient_4.set('fieldLabels', {});
lyr_WaterQualityLight_5.set('fieldLabels', {});
lyr_WaterQualityContaminants_6.set('fieldLabels', {});
lyr_Misc_7.set('fieldLabels', {});
lyr_Meteorology_8.set('fieldLabels', {});
lyr_Light_9.set('fieldLabels', {});
lyr_Hydrology_10.set('fieldLabels', {});
lyr_Hydrodynamics_11.set('fieldLabels', {});
lyr_EcologyPlanktonic_12.set('fieldLabels', {});
lyr_EcologyBenthic_13.set('fieldLabels', {});
lyr_EcologyBenthic_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});