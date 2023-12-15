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
var format_Zinc_3 = new ol.format.GeoJSON();
var features_Zinc_3 = format_Zinc_3.readFeatures(json_Zinc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zinc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zinc_3.addFeatures(features_Zinc_3);
var lyr_Zinc_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zinc_3, 
                style: style_Zinc_3,
                interactive: true,
                title: '<img src="styles/legend/Zinc_3.png" /> Zinc'
            });
var format_Zea_4 = new ol.format.GeoJSON();
var features_Zea_4 = format_Zea_4.readFeatures(json_Zea_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zea_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zea_4.addFeatures(features_Zea_4);
var lyr_Zea_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zea_4, 
                style: style_Zea_4,
                interactive: true,
                title: '<img src="styles/legend/Zea_4.png" /> Zea'
            });
var format_Xylene_5 = new ol.format.GeoJSON();
var features_Xylene_5 = format_Xylene_5.readFeatures(json_Xylene_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Xylene_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Xylene_5.addFeatures(features_Xylene_5);
var lyr_Xylene_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Xylene_5, 
                style: style_Xylene_5,
                interactive: true,
                title: '<img src="styles/legend/Xylene_5.png" /> Xylene'
            });
var format_WindSpeed_6 = new ol.format.GeoJSON();
var features_WindSpeed_6 = format_WindSpeed_6.readFeatures(json_WindSpeed_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindSpeed_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindSpeed_6.addFeatures(features_WindSpeed_6);
var lyr_WindSpeed_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WindSpeed_6, 
                style: style_WindSpeed_6,
                interactive: true,
                title: '<img src="styles/legend/WindSpeed_6.png" /> Wind Speed'
            });
var format_WindSpeedmin_7 = new ol.format.GeoJSON();
var features_WindSpeedmin_7 = format_WindSpeedmin_7.readFeatures(json_WindSpeedmin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindSpeedmin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindSpeedmin_7.addFeatures(features_WindSpeedmin_7);
var lyr_WindSpeedmin_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WindSpeedmin_7, 
                style: style_WindSpeedmin_7,
                interactive: true,
                title: '<img src="styles/legend/WindSpeedmin_7.png" /> Wind Speed (min)'
            });
var format_WindSpeedmax_8 = new ol.format.GeoJSON();
var features_WindSpeedmax_8 = format_WindSpeedmax_8.readFeatures(json_WindSpeedmax_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindSpeedmax_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindSpeedmax_8.addFeatures(features_WindSpeedmax_8);
var lyr_WindSpeedmax_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WindSpeedmax_8, 
                style: style_WindSpeedmax_8,
                interactive: true,
                title: '<img src="styles/legend/WindSpeedmax_8.png" /> Wind Speed (max)'
            });
var format_WindDirection_9 = new ol.format.GeoJSON();
var features_WindDirection_9 = format_WindDirection_9.readFeatures(json_WindDirection_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindDirection_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindDirection_9.addFeatures(features_WindDirection_9);
var lyr_WindDirection_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WindDirection_9, 
                style: style_WindDirection_9,
                interactive: true,
                title: '<img src="styles/legend/WindDirection_9.png" /> Wind Direction'
            });
var format_WindDirectionstd_10 = new ol.format.GeoJSON();
var features_WindDirectionstd_10 = format_WindDirectionstd_10.readFeatures(json_WindDirectionstd_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindDirectionstd_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindDirectionstd_10.addFeatures(features_WindDirectionstd_10);
var lyr_WindDirectionstd_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WindDirectionstd_10, 
                style: style_WindDirectionstd_10,
                interactive: true,
                title: '<img src="styles/legend/WindDirectionstd_10.png" /> Wind Direction (std)'
            });
var format_WCUR_11 = new ol.format.GeoJSON();
var features_WCUR_11 = format_WCUR_11.readFeatures(json_WCUR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WCUR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WCUR_11.addFeatures(features_WCUR_11);
var lyr_WCUR_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WCUR_11, 
                style: style_WCUR_11,
                interactive: true,
                title: '<img src="styles/legend/WCUR_11.png" /> WCUR'
            });
var format_WaterSurfaceHeight_12 = new ol.format.GeoJSON();
var features_WaterSurfaceHeight_12 = format_WaterSurfaceHeight_12.readFeatures(json_WaterSurfaceHeight_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterSurfaceHeight_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterSurfaceHeight_12.addFeatures(features_WaterSurfaceHeight_12);
var lyr_WaterSurfaceHeight_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterSurfaceHeight_12, 
                style: style_WaterSurfaceHeight_12,
                interactive: true,
                title: '<img src="styles/legend/WaterSurfaceHeight_12.png" /> Water Surface Height'
            });
var format_Viola_13 = new ol.format.GeoJSON();
var features_Viola_13 = format_Viola_13.readFeatures(json_Viola_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viola_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viola_13.addFeatures(features_Viola_13);
var lyr_Viola_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Viola_13, 
                style: style_Viola_13,
                interactive: true,
                title: '<img src="styles/legend/Viola_13.png" /> Viola'
            });
var format_VCURnorthwardvelocity_14 = new ol.format.GeoJSON();
var features_VCURnorthwardvelocity_14 = format_VCURnorthwardvelocity_14.readFeatures(json_VCURnorthwardvelocity_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VCURnorthwardvelocity_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VCURnorthwardvelocity_14.addFeatures(features_VCURnorthwardvelocity_14);
var lyr_VCURnorthwardvelocity_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VCURnorthwardvelocity_14, 
                style: style_VCURnorthwardvelocity_14,
                interactive: true,
                title: '<img src="styles/legend/VCURnorthwardvelocity_14.png" /> VCUR (northward velocity)'
            });
var format_UCUReastwardvelocity_15 = new ol.format.GeoJSON();
var features_UCUReastwardvelocity_15 = format_UCUReastwardvelocity_15.readFeatures(json_UCUReastwardvelocity_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UCUReastwardvelocity_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UCUReastwardvelocity_15.addFeatures(features_UCUReastwardvelocity_15);
var lyr_UCUReastwardvelocity_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UCUReastwardvelocity_15, 
                style: style_UCUReastwardvelocity_15,
                interactive: true,
                title: '<img src="styles/legend/UCUReastwardvelocity_15.png" /> UCUR (eastward velocity)'
            });
var format_Turbidity_16 = new ol.format.GeoJSON();
var features_Turbidity_16 = format_Turbidity_16.readFeatures(json_Turbidity_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Turbidity_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Turbidity_16.addFeatures(features_Turbidity_16);
var lyr_Turbidity_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Turbidity_16, 
                style: style_Turbidity_16,
                interactive: true,
                title: '<img src="styles/legend/Turbidity_16.png" /> Turbidity'
            });
var format_TSSorganic_17 = new ol.format.GeoJSON();
var features_TSSorganic_17 = format_TSSorganic_17.readFeatures(json_TSSorganic_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TSSorganic_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TSSorganic_17.addFeatures(features_TSSorganic_17);
var lyr_TSSorganic_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TSSorganic_17, 
                style: style_TSSorganic_17,
                interactive: true,
                title: '<img src="styles/legend/TSSorganic_17.png" /> TSSorganic'
            });
var format_TSSinorganic_18 = new ol.format.GeoJSON();
var features_TSSinorganic_18 = format_TSSinorganic_18.readFeatures(json_TSSinorganic_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TSSinorganic_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TSSinorganic_18.addFeatures(features_TSSinorganic_18);
var lyr_TSSinorganic_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TSSinorganic_18, 
                style: style_TSSinorganic_18,
                interactive: true,
                title: '<img src="styles/legend/TSSinorganic_18.png" /> TSSinorganic'
            });
var format_TRHgtC34C40_19 = new ol.format.GeoJSON();
var features_TRHgtC34C40_19 = format_TRHgtC34C40_19.readFeatures(json_TRHgtC34C40_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRHgtC34C40_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRHgtC34C40_19.addFeatures(features_TRHgtC34C40_19);
var lyr_TRHgtC34C40_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRHgtC34C40_19, 
                style: style_TRHgtC34C40_19,
                interactive: true,
                title: '<img src="styles/legend/TRHgtC34C40_19.png" /> TRH gtC34-C40'
            });
var format_TRHgtC16C34_20 = new ol.format.GeoJSON();
var features_TRHgtC16C34_20 = format_TRHgtC16C34_20.readFeatures(json_TRHgtC16C34_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRHgtC16C34_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRHgtC16C34_20.addFeatures(features_TRHgtC16C34_20);
var lyr_TRHgtC16C34_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRHgtC16C34_20, 
                style: style_TRHgtC16C34_20,
                interactive: true,
                title: '<img src="styles/legend/TRHgtC16C34_20.png" /> TRH gtC16-C34'
            });
var format_TRHgtC10C16_21 = new ol.format.GeoJSON();
var features_TRHgtC10C16_21 = format_TRHgtC10C16_21.readFeatures(json_TRHgtC10C16_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRHgtC10C16_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRHgtC10C16_21.addFeatures(features_TRHgtC10C16_21);
var lyr_TRHgtC10C16_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRHgtC10C16_21, 
                style: style_TRHgtC10C16_21,
                interactive: true,
                title: '<img src="styles/legend/TRHgtC10C16_21.png" /> TRH gtC10-C16'
            });
var format_TRHC6C10_22 = new ol.format.GeoJSON();
var features_TRHC6C10_22 = format_TRHC6C10_22.readFeatures(json_TRHC6C10_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRHC6C10_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRHC6C10_22.addFeatures(features_TRHC6C10_22);
var lyr_TRHC6C10_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRHC6C10_22, 
                style: style_TRHC6C10_22,
                interactive: true,
                title: '<img src="styles/legend/TRHC6C10_22.png" /> TRH C6-C10'
            });
var format_TPHC6C9_23 = new ol.format.GeoJSON();
var features_TPHC6C9_23 = format_TPHC6C9_23.readFeatures(json_TPHC6C9_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPHC6C9_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPHC6C9_23.addFeatures(features_TPHC6C9_23);
var lyr_TPHC6C9_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TPHC6C9_23, 
                style: style_TPHC6C9_23,
                interactive: true,
                title: '<img src="styles/legend/TPHC6C9_23.png" /> TPH C6 - C9'
            });
var format_TPHC29C36_24 = new ol.format.GeoJSON();
var features_TPHC29C36_24 = format_TPHC29C36_24.readFeatures(json_TPHC29C36_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPHC29C36_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPHC29C36_24.addFeatures(features_TPHC29C36_24);
var lyr_TPHC29C36_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TPHC29C36_24, 
                style: style_TPHC29C36_24,
                interactive: true,
                title: '<img src="styles/legend/TPHC29C36_24.png" /> TPH C29 - C36'
            });
var format_TPHC15C28_25 = new ol.format.GeoJSON();
var features_TPHC15C28_25 = format_TPHC15C28_25.readFeatures(json_TPHC15C28_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPHC15C28_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPHC15C28_25.addFeatures(features_TPHC15C28_25);
var lyr_TPHC15C28_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TPHC15C28_25, 
                style: style_TPHC15C28_25,
                interactive: true,
                title: '<img src="styles/legend/TPHC15C28_25.png" /> TPH C15 - C28'
            });
var format_TPHC10C14_26 = new ol.format.GeoJSON();
var features_TPHC10C14_26 = format_TPHC10C14_26.readFeatures(json_TPHC10C14_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPHC10C14_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPHC10C14_26.addFeatures(features_TPHC10C14_26);
var lyr_TPHC10C14_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TPHC10C14_26, 
                style: style_TPHC10C14_26,
                interactive: true,
                title: '<img src="styles/legend/TPHC10C14_26.png" /> TPH C10 - C14'
            });
var format_TotalTRHs_27 = new ol.format.GeoJSON();
var features_TotalTRHs_27 = format_TotalTRHs_27.readFeatures(json_TotalTRHs_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalTRHs_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalTRHs_27.addFeatures(features_TotalTRHs_27);
var lyr_TotalTRHs_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalTRHs_27, 
                style: style_TotalTRHs_27,
                interactive: true,
                title: '<img src="styles/legend/TotalTRHs_27.png" /> Total TRHs'
            });
var format_TotalTPH_28 = new ol.format.GeoJSON();
var features_TotalTPH_28 = format_TotalTPH_28.readFeatures(json_TotalTPH_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalTPH_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalTPH_28.addFeatures(features_TotalTPH_28);
var lyr_TotalTPH_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalTPH_28, 
                style: style_TotalTPH_28,
                interactive: true,
                title: '<img src="styles/legend/TotalTPH_28.png" /> Total TPH'
            });
var format_TotalSuspendedSolids_29 = new ol.format.GeoJSON();
var features_TotalSuspendedSolids_29 = format_TotalSuspendedSolids_29.readFeatures(json_TotalSuspendedSolids_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalSuspendedSolids_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalSuspendedSolids_29.addFeatures(features_TotalSuspendedSolids_29);
var lyr_TotalSuspendedSolids_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalSuspendedSolids_29, 
                style: style_TotalSuspendedSolids_29,
                interactive: true,
                title: '<img src="styles/legend/TotalSuspendedSolids_29.png" /> Total Suspended Solids'
            });
var format_TotalPhosphorus_30 = new ol.format.GeoJSON();
var features_TotalPhosphorus_30 = format_TotalPhosphorus_30.readFeatures(json_TotalPhosphorus_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalPhosphorus_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalPhosphorus_30.addFeatures(features_TotalPhosphorus_30);
var lyr_TotalPhosphorus_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalPhosphorus_30, 
                style: style_TotalPhosphorus_30,
                interactive: true,
                title: '<img src="styles/legend/TotalPhosphorus_30.png" /> Total Phosphorus'
            });
var format_TotalNitrogen_31 = new ol.format.GeoJSON();
var features_TotalNitrogen_31 = format_TotalNitrogen_31.readFeatures(json_TotalNitrogen_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalNitrogen_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalNitrogen_31.addFeatures(features_TotalNitrogen_31);
var lyr_TotalNitrogen_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalNitrogen_31, 
                style: style_TotalNitrogen_31,
                interactive: true,
                title: '<img src="styles/legend/TotalNitrogen_31.png" /> Total Nitrogen'
            });
var format_TotalKjeldahlNitrogen_32 = new ol.format.GeoJSON();
var features_TotalKjeldahlNitrogen_32 = format_TotalKjeldahlNitrogen_32.readFeatures(json_TotalKjeldahlNitrogen_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalKjeldahlNitrogen_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalKjeldahlNitrogen_32.addFeatures(features_TotalKjeldahlNitrogen_32);
var lyr_TotalKjeldahlNitrogen_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalKjeldahlNitrogen_32, 
                style: style_TotalKjeldahlNitrogen_32,
                interactive: true,
                title: '<img src="styles/legend/TotalKjeldahlNitrogen_32.png" /> Total Kjeldahl Nitrogen'
            });
var format_TotalBTEX_33 = new ol.format.GeoJSON();
var features_TotalBTEX_33 = format_TotalBTEX_33.readFeatures(json_TotalBTEX_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalBTEX_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalBTEX_33.addFeatures(features_TotalBTEX_33);
var lyr_TotalBTEX_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalBTEX_33, 
                style: style_TotalBTEX_33,
                interactive: true,
                title: '<img src="styles/legend/TotalBTEX_33.png" /> Total BTEX'
            });
var format_TotalAlkalinity_34 = new ol.format.GeoJSON();
var features_TotalAlkalinity_34 = format_TotalAlkalinity_34.readFeatures(json_TotalAlkalinity_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalAlkalinity_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalAlkalinity_34.addFeatures(features_TotalAlkalinity_34);
var lyr_TotalAlkalinity_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalAlkalinity_34, 
                style: style_TotalAlkalinity_34,
                interactive: true,
                title: '<img src="styles/legend/TotalAlkalinity_34.png" /> Total Alkalinity'
            });
var format_Toluene_35 = new ol.format.GeoJSON();
var features_Toluene_35 = format_Toluene_35.readFeatures(json_Toluene_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toluene_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toluene_35.addFeatures(features_Toluene_35);
var lyr_Toluene_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Toluene_35, 
                style: style_Toluene_35,
                interactive: true,
                title: '<img src="styles/legend/Toluene_35.png" /> Toluene'
            });
var format_Tilt_36 = new ol.format.GeoJSON();
var features_Tilt_36 = format_Tilt_36.readFeatures(json_Tilt_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tilt_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tilt_36.addFeatures(features_Tilt_36);
var lyr_Tilt_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tilt_36, 
                style: style_Tilt_36,
                interactive: true,
                title: '<img src="styles/legend/Tilt_36.png" /> Tilt'
            });
var format_Temperature_37 = new ol.format.GeoJSON();
var features_Temperature_37 = format_Temperature_37.readFeatures(json_Temperature_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temperature_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temperature_37.addFeatures(features_Temperature_37);
var lyr_Temperature_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temperature_37, 
                style: style_Temperature_37,
                interactive: true,
                title: '<img src="styles/legend/Temperature_37.png" /> Temperature'
            });
var format_Synechococcus_38 = new ol.format.GeoJSON();
var features_Synechococcus_38 = format_Synechococcus_38.readFeatures(json_Synechococcus_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Synechococcus_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Synechococcus_38.addFeatures(features_Synechococcus_38);
var lyr_Synechococcus_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Synechococcus_38, 
                style: style_Synechococcus_38,
                interactive: true,
                title: '<img src="styles/legend/Synechococcus_38.png" /> Synechococcus'
            });
var format_SurfaceSolarIrradiance_39 = new ol.format.GeoJSON();
var features_SurfaceSolarIrradiance_39 = format_SurfaceSolarIrradiance_39.readFeatures(json_SurfaceSolarIrradiance_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurfaceSolarIrradiance_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfaceSolarIrradiance_39.addFeatures(features_SurfaceSolarIrradiance_39);
var lyr_SurfaceSolarIrradiance_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SurfaceSolarIrradiance_39, 
                style: style_SurfaceSolarIrradiance_39,
                interactive: true,
                title: '<img src="styles/legend/SurfaceSolarIrradiance_39.png" /> Surface Solar Irradiance'
            });
var format_SurfaceSolarIrradiancestd_40 = new ol.format.GeoJSON();
var features_SurfaceSolarIrradiancestd_40 = format_SurfaceSolarIrradiancestd_40.readFeatures(json_SurfaceSolarIrradiancestd_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurfaceSolarIrradiancestd_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfaceSolarIrradiancestd_40.addFeatures(features_SurfaceSolarIrradiancestd_40);
var lyr_SurfaceSolarIrradiancestd_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SurfaceSolarIrradiancestd_40, 
                style: style_SurfaceSolarIrradiancestd_40,
                interactive: true,
                title: '<img src="styles/legend/SurfaceSolarIrradiancestd_40.png" /> Surface Solar Irradiance (std)'
            });
var format_SurfaceSolarIrradiancemin_41 = new ol.format.GeoJSON();
var features_SurfaceSolarIrradiancemin_41 = format_SurfaceSolarIrradiancemin_41.readFeatures(json_SurfaceSolarIrradiancemin_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurfaceSolarIrradiancemin_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfaceSolarIrradiancemin_41.addFeatures(features_SurfaceSolarIrradiancemin_41);
var lyr_SurfaceSolarIrradiancemin_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SurfaceSolarIrradiancemin_41, 
                style: style_SurfaceSolarIrradiancemin_41,
                interactive: true,
                title: '<img src="styles/legend/SurfaceSolarIrradiancemin_41.png" /> Surface Solar Irradiance (min)'
            });
var format_SurfaceSolarIrradiancemax_42 = new ol.format.GeoJSON();
var features_SurfaceSolarIrradiancemax_42 = format_SurfaceSolarIrradiancemax_42.readFeatures(json_SurfaceSolarIrradiancemax_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurfaceSolarIrradiancemax_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfaceSolarIrradiancemax_42.addFeatures(features_SurfaceSolarIrradiancemax_42);
var lyr_SurfaceSolarIrradiancemax_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SurfaceSolarIrradiancemax_42, 
                style: style_SurfaceSolarIrradiancemax_42,
                interactive: true,
                title: '<img src="styles/legend/SurfaceSolarIrradiancemax_42.png" /> Surface Solar Irradiance (max)'
            });
var format_SurfacePhotosyntheticallyActivePhotonFlux_43 = new ol.format.GeoJSON();
var features_SurfacePhotosyntheticallyActivePhotonFlux_43 = format_SurfacePhotosyntheticallyActivePhotonFlux_43.readFeatures(json_SurfacePhotosyntheticallyActivePhotonFlux_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurfacePhotosyntheticallyActivePhotonFlux_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfacePhotosyntheticallyActivePhotonFlux_43.addFeatures(features_SurfacePhotosyntheticallyActivePhotonFlux_43);
var lyr_SurfacePhotosyntheticallyActivePhotonFlux_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SurfacePhotosyntheticallyActivePhotonFlux_43, 
                style: style_SurfacePhotosyntheticallyActivePhotonFlux_43,
                interactive: true,
                title: '<img src="styles/legend/SurfacePhotosyntheticallyActivePhotonFlux_43.png" /> Surface Photosynthetically Active Photon Flux'
            });
var format_SurfacePhotosyntheticallyActivePhotonFluxstd_44 = new ol.format.GeoJSON();
var features_SurfacePhotosyntheticallyActivePhotonFluxstd_44 = format_SurfacePhotosyntheticallyActivePhotonFluxstd_44.readFeatures(json_SurfacePhotosyntheticallyActivePhotonFluxstd_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurfacePhotosyntheticallyActivePhotonFluxstd_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfacePhotosyntheticallyActivePhotonFluxstd_44.addFeatures(features_SurfacePhotosyntheticallyActivePhotonFluxstd_44);
var lyr_SurfacePhotosyntheticallyActivePhotonFluxstd_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SurfacePhotosyntheticallyActivePhotonFluxstd_44, 
                style: style_SurfacePhotosyntheticallyActivePhotonFluxstd_44,
                interactive: true,
                title: '<img src="styles/legend/SurfacePhotosyntheticallyActivePhotonFluxstd_44.png" /> Surface Photosynthetically Active Photon Flux (std)'
            });
var format_SurfacePhotosyntheticallyActivePhotonFluxmin_45 = new ol.format.GeoJSON();
var features_SurfacePhotosyntheticallyActivePhotonFluxmin_45 = format_SurfacePhotosyntheticallyActivePhotonFluxmin_45.readFeatures(json_SurfacePhotosyntheticallyActivePhotonFluxmin_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurfacePhotosyntheticallyActivePhotonFluxmin_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfacePhotosyntheticallyActivePhotonFluxmin_45.addFeatures(features_SurfacePhotosyntheticallyActivePhotonFluxmin_45);
var lyr_SurfacePhotosyntheticallyActivePhotonFluxmin_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SurfacePhotosyntheticallyActivePhotonFluxmin_45, 
                style: style_SurfacePhotosyntheticallyActivePhotonFluxmin_45,
                interactive: true,
                title: '<img src="styles/legend/SurfacePhotosyntheticallyActivePhotonFluxmin_45.png" /> Surface Photosynthetically Active Photon Flux (min)'
            });
var format_SurfacePhotosyntheticallyActivePhotonFluxmax_46 = new ol.format.GeoJSON();
var features_SurfacePhotosyntheticallyActivePhotonFluxmax_46 = format_SurfacePhotosyntheticallyActivePhotonFluxmax_46.readFeatures(json_SurfacePhotosyntheticallyActivePhotonFluxmax_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurfacePhotosyntheticallyActivePhotonFluxmax_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfacePhotosyntheticallyActivePhotonFluxmax_46.addFeatures(features_SurfacePhotosyntheticallyActivePhotonFluxmax_46);
var lyr_SurfacePhotosyntheticallyActivePhotonFluxmax_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SurfacePhotosyntheticallyActivePhotonFluxmax_46, 
                style: style_SurfacePhotosyntheticallyActivePhotonFluxmax_46,
                interactive: true,
                title: '<img src="styles/legend/SurfacePhotosyntheticallyActivePhotonFluxmax_46.png" /> Surface Photosynthetically Active Photon Flux (max)'
            });
var format_StationLevelPressure_47 = new ol.format.GeoJSON();
var features_StationLevelPressure_47 = format_StationLevelPressure_47.readFeatures(json_StationLevelPressure_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationLevelPressure_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationLevelPressure_47.addFeatures(features_StationLevelPressure_47);
var lyr_StationLevelPressure_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StationLevelPressure_47, 
                style: style_StationLevelPressure_47,
                interactive: true,
                title: '<img src="styles/legend/StationLevelPressure_47.png" /> Station Level Pressure'
            });
var format_StationLevelPressurestd_48 = new ol.format.GeoJSON();
var features_StationLevelPressurestd_48 = format_StationLevelPressurestd_48.readFeatures(json_StationLevelPressurestd_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationLevelPressurestd_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationLevelPressurestd_48.addFeatures(features_StationLevelPressurestd_48);
var lyr_StationLevelPressurestd_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StationLevelPressurestd_48, 
                style: style_StationLevelPressurestd_48,
                interactive: true,
                title: '<img src="styles/legend/StationLevelPressurestd_48.png" /> Station Level Pressure (std)'
            });
var format_StationLevelPressuremin_49 = new ol.format.GeoJSON();
var features_StationLevelPressuremin_49 = format_StationLevelPressuremin_49.readFeatures(json_StationLevelPressuremin_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationLevelPressuremin_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationLevelPressuremin_49.addFeatures(features_StationLevelPressuremin_49);
var lyr_StationLevelPressuremin_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StationLevelPressuremin_49, 
                style: style_StationLevelPressuremin_49,
                interactive: true,
                title: '<img src="styles/legend/StationLevelPressuremin_49.png" /> Station Level Pressure (min)'
            });
var format_StationLevelPressuremax_50 = new ol.format.GeoJSON();
var features_StationLevelPressuremax_50 = format_StationLevelPressuremax_50.readFeatures(json_StationLevelPressuremax_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationLevelPressuremax_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationLevelPressuremax_50.addFeatures(features_StationLevelPressuremax_50);
var lyr_StationLevelPressuremax_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StationLevelPressuremax_50, 
                style: style_StationLevelPressuremax_50,
                interactive: true,
                title: '<img src="styles/legend/StationLevelPressuremax_50.png" /> Station Level Pressure (max)'
            });
var format_StageHeight_51 = new ol.format.GeoJSON();
var features_StageHeight_51 = format_StageHeight_51.readFeatures(json_StageHeight_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StageHeight_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StageHeight_51.addFeatures(features_StageHeight_51);
var lyr_StageHeight_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StageHeight_51, 
                style: style_StageHeight_51,
                interactive: true,
                title: '<img src="styles/legend/StageHeight_51.png" /> Stage Height'
            });
var format_StageHeightCTF_52 = new ol.format.GeoJSON();
var features_StageHeightCTF_52 = format_StageHeightCTF_52.readFeatures(json_StageHeightCTF_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StageHeightCTF_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StageHeightCTF_52.addFeatures(features_StageHeightCTF_52);
var lyr_StageHeightCTF_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StageHeightCTF_52, 
                style: style_StageHeightCTF_52,
                interactive: true,
                title: '<img src="styles/legend/StageHeightCTF_52.png" /> Stage Height CTF'
            });
var format_StageHeightCTFmin_53 = new ol.format.GeoJSON();
var features_StageHeightCTFmin_53 = format_StageHeightCTFmin_53.readFeatures(json_StageHeightCTFmin_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StageHeightCTFmin_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StageHeightCTFmin_53.addFeatures(features_StageHeightCTFmin_53);
var lyr_StageHeightCTFmin_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StageHeightCTFmin_53, 
                style: style_StageHeightCTFmin_53,
                interactive: true,
                title: '<img src="styles/legend/StageHeightCTFmin_53.png" /> Stage Height CTF (min)'
            });
var format_StageHeightCTFmax_54 = new ol.format.GeoJSON();
var features_StageHeightCTFmax_54 = format_StageHeightCTFmax_54.readFeatures(json_StageHeightCTFmax_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StageHeightCTFmax_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StageHeightCTFmax_54.addFeatures(features_StageHeightCTFmax_54);
var lyr_StageHeightCTFmax_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StageHeightCTFmax_54, 
                style: style_StageHeightCTFmax_54,
                interactive: true,
                title: '<img src="styles/legend/StageHeightCTFmax_54.png" /> Stage Height CTF (max)'
            });
var format_StageHeightmin_55 = new ol.format.GeoJSON();
var features_StageHeightmin_55 = format_StageHeightmin_55.readFeatures(json_StageHeightmin_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StageHeightmin_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StageHeightmin_55.addFeatures(features_StageHeightmin_55);
var lyr_StageHeightmin_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StageHeightmin_55, 
                style: style_StageHeightmin_55,
                interactive: true,
                title: '<img src="styles/legend/StageHeightmin_55.png" /> Stage Height (min)'
            });
var format_StageHeightmax_56 = new ol.format.GeoJSON();
var features_StageHeightmax_56 = format_StageHeightmax_56.readFeatures(json_StageHeightmax_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StageHeightmax_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StageHeightmax_56.addFeatures(features_StageHeightmax_56);
var lyr_StageHeightmax_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StageHeightmax_56, 
                style: style_StageHeightmax_56,
                interactive: true,
                title: '<img src="styles/legend/StageHeightmax_56.png" /> Stage Height (max)'
            });
var format_SPEED_OF_SOUND_57 = new ol.format.GeoJSON();
var features_SPEED_OF_SOUND_57 = format_SPEED_OF_SOUND_57.readFeatures(json_SPEED_OF_SOUND_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPEED_OF_SOUND_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPEED_OF_SOUND_57.addFeatures(features_SPEED_OF_SOUND_57);
var lyr_SPEED_OF_SOUND_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SPEED_OF_SOUND_57, 
                style: style_SPEED_OF_SOUND_57,
                interactive: true,
                title: '<img src="styles/legend/SPEED_OF_SOUND_57.png" /> SPEED_OF_SOUND'
            });
var format_SpectralRadiativeFluxWL700uW_58 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL700uW_58 = format_SpectralRadiativeFluxWL700uW_58.readFeatures(json_SpectralRadiativeFluxWL700uW_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL700uW_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL700uW_58.addFeatures(features_SpectralRadiativeFluxWL700uW_58);
var lyr_SpectralRadiativeFluxWL700uW_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL700uW_58, 
                style: style_SpectralRadiativeFluxWL700uW_58,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL700uW_58.png" /> Spectral Radiative Flux (WL - 700uW)'
            });
var format_SpectralRadiativeFluxWL699uW_59 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL699uW_59 = format_SpectralRadiativeFluxWL699uW_59.readFeatures(json_SpectralRadiativeFluxWL699uW_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL699uW_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL699uW_59.addFeatures(features_SpectralRadiativeFluxWL699uW_59);
var lyr_SpectralRadiativeFluxWL699uW_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL699uW_59, 
                style: style_SpectralRadiativeFluxWL699uW_59,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL699uW_59.png" /> Spectral Radiative Flux (WL - 699uW)'
            });
var format_SpectralRadiativeFluxWL660uW_60 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL660uW_60 = format_SpectralRadiativeFluxWL660uW_60.readFeatures(json_SpectralRadiativeFluxWL660uW_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL660uW_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL660uW_60.addFeatures(features_SpectralRadiativeFluxWL660uW_60);
var lyr_SpectralRadiativeFluxWL660uW_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL660uW_60, 
                style: style_SpectralRadiativeFluxWL660uW_60,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL660uW_60.png" /> Spectral Radiative Flux (WL - 660uW)'
            });
var format_SpectralRadiativeFluxWL656uW_61 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL656uW_61 = format_SpectralRadiativeFluxWL656uW_61.readFeatures(json_SpectralRadiativeFluxWL656uW_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL656uW_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL656uW_61.addFeatures(features_SpectralRadiativeFluxWL656uW_61);
var lyr_SpectralRadiativeFluxWL656uW_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL656uW_61, 
                style: style_SpectralRadiativeFluxWL656uW_61,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL656uW_61.png" /> Spectral Radiative Flux (WL - 656uW)'
            });
var format_SpectralRadiativeFluxWL635uW_62 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL635uW_62 = format_SpectralRadiativeFluxWL635uW_62.readFeatures(json_SpectralRadiativeFluxWL635uW_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL635uW_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL635uW_62.addFeatures(features_SpectralRadiativeFluxWL635uW_62);
var lyr_SpectralRadiativeFluxWL635uW_62 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL635uW_62, 
                style: style_SpectralRadiativeFluxWL635uW_62,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL635uW_62.png" /> Spectral Radiative Flux (WL - 635uW)'
            });
var format_SpectralRadiativeFluxWL628uW_63 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL628uW_63 = format_SpectralRadiativeFluxWL628uW_63.readFeatures(json_SpectralRadiativeFluxWL628uW_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL628uW_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL628uW_63.addFeatures(features_SpectralRadiativeFluxWL628uW_63);
var lyr_SpectralRadiativeFluxWL628uW_63 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL628uW_63, 
                style: style_SpectralRadiativeFluxWL628uW_63,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL628uW_63.png" /> Spectral Radiative Flux (WL - 628uW)'
            });
var format_SpectralRadiativeFluxWL590uW_64 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL590uW_64 = format_SpectralRadiativeFluxWL590uW_64.readFeatures(json_SpectralRadiativeFluxWL590uW_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL590uW_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL590uW_64.addFeatures(features_SpectralRadiativeFluxWL590uW_64);
var lyr_SpectralRadiativeFluxWL590uW_64 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL590uW_64, 
                style: style_SpectralRadiativeFluxWL590uW_64,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL590uW_64.png" /> Spectral Radiative Flux (WL - 590uW)'
            });
var format_SpectralRadiativeFluxWL554uW_65 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL554uW_65 = format_SpectralRadiativeFluxWL554uW_65.readFeatures(json_SpectralRadiativeFluxWL554uW_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL554uW_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL554uW_65.addFeatures(features_SpectralRadiativeFluxWL554uW_65);
var lyr_SpectralRadiativeFluxWL554uW_65 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL554uW_65, 
                style: style_SpectralRadiativeFluxWL554uW_65,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL554uW_65.png" /> Spectral Radiative Flux (WL - 554uW)'
            });
var format_SpectralRadiativeFluxWL550uW_66 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL550uW_66 = format_SpectralRadiativeFluxWL550uW_66.readFeatures(json_SpectralRadiativeFluxWL550uW_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL550uW_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL550uW_66.addFeatures(features_SpectralRadiativeFluxWL550uW_66);
var lyr_SpectralRadiativeFluxWL550uW_66 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL550uW_66, 
                style: style_SpectralRadiativeFluxWL550uW_66,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL550uW_66.png" /> Spectral Radiative Flux (WL - 550uW)'
            });
var format_SpectralRadiativeFluxWL524uW_67 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL524uW_67 = format_SpectralRadiativeFluxWL524uW_67.readFeatures(json_SpectralRadiativeFluxWL524uW_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL524uW_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL524uW_67.addFeatures(features_SpectralRadiativeFluxWL524uW_67);
var lyr_SpectralRadiativeFluxWL524uW_67 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL524uW_67, 
                style: style_SpectralRadiativeFluxWL524uW_67,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL524uW_67.png" /> Spectral Radiative Flux (WL - 524uW)'
            });
var format_SpectralRadiativeFluxWL510uW_68 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL510uW_68 = format_SpectralRadiativeFluxWL510uW_68.readFeatures(json_SpectralRadiativeFluxWL510uW_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL510uW_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL510uW_68.addFeatures(features_SpectralRadiativeFluxWL510uW_68);
var lyr_SpectralRadiativeFluxWL510uW_68 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL510uW_68, 
                style: style_SpectralRadiativeFluxWL510uW_68,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL510uW_68.png" /> Spectral Radiative Flux (WL - 510uW)'
            });
var format_SpectralRadiativeFluxWL490uW_69 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL490uW_69 = format_SpectralRadiativeFluxWL490uW_69.readFeatures(json_SpectralRadiativeFluxWL490uW_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL490uW_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL490uW_69.addFeatures(features_SpectralRadiativeFluxWL490uW_69);
var lyr_SpectralRadiativeFluxWL490uW_69 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL490uW_69, 
                style: style_SpectralRadiativeFluxWL490uW_69,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL490uW_69.png" /> Spectral Radiative Flux (WL - 490uW)'
            });
var format_SpectralRadiativeFluxWL470uW_70 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL470uW_70 = format_SpectralRadiativeFluxWL470uW_70.readFeatures(json_SpectralRadiativeFluxWL470uW_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL470uW_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL470uW_70.addFeatures(features_SpectralRadiativeFluxWL470uW_70);
var lyr_SpectralRadiativeFluxWL470uW_70 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL470uW_70, 
                style: style_SpectralRadiativeFluxWL470uW_70,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL470uW_70.png" /> Spectral Radiative Flux (WL - 470uW)'
            });
var format_SpectralRadiativeFluxWL448uW_71 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL448uW_71 = format_SpectralRadiativeFluxWL448uW_71.readFeatures(json_SpectralRadiativeFluxWL448uW_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL448uW_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL448uW_71.addFeatures(features_SpectralRadiativeFluxWL448uW_71);
var lyr_SpectralRadiativeFluxWL448uW_71 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL448uW_71, 
                style: style_SpectralRadiativeFluxWL448uW_71,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL448uW_71.png" /> Spectral Radiative Flux (WL - 448uW)'
            });
var format_SpectralRadiativeFluxWL440uW_72 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL440uW_72 = format_SpectralRadiativeFluxWL440uW_72.readFeatures(json_SpectralRadiativeFluxWL440uW_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL440uW_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL440uW_72.addFeatures(features_SpectralRadiativeFluxWL440uW_72);
var lyr_SpectralRadiativeFluxWL440uW_72 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL440uW_72, 
                style: style_SpectralRadiativeFluxWL440uW_72,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL440uW_72.png" /> Spectral Radiative Flux (WL - 440uW)'
            });
var format_SpectralRadiativeFluxWL410uW_73 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL410uW_73 = format_SpectralRadiativeFluxWL410uW_73.readFeatures(json_SpectralRadiativeFluxWL410uW_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL410uW_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL410uW_73.addFeatures(features_SpectralRadiativeFluxWL410uW_73);
var lyr_SpectralRadiativeFluxWL410uW_73 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL410uW_73, 
                style: style_SpectralRadiativeFluxWL410uW_73,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL410uW_73.png" /> Spectral Radiative Flux (WL - 410uW)'
            });
var format_SpectralRadiativeFluxWL398uW_74 = new ol.format.GeoJSON();
var features_SpectralRadiativeFluxWL398uW_74 = format_SpectralRadiativeFluxWL398uW_74.readFeatures(json_SpectralRadiativeFluxWL398uW_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralRadiativeFluxWL398uW_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralRadiativeFluxWL398uW_74.addFeatures(features_SpectralRadiativeFluxWL398uW_74);
var lyr_SpectralRadiativeFluxWL398uW_74 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralRadiativeFluxWL398uW_74, 
                style: style_SpectralRadiativeFluxWL398uW_74,
                interactive: true,
                title: '<img src="styles/legend/SpectralRadiativeFluxWL398uW_74.png" /> Spectral Radiative Flux (WL - 398uW)'
            });
var format_SpectralPhotonFluxWL699umol_75 = new ol.format.GeoJSON();
var features_SpectralPhotonFluxWL699umol_75 = format_SpectralPhotonFluxWL699umol_75.readFeatures(json_SpectralPhotonFluxWL699umol_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralPhotonFluxWL699umol_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralPhotonFluxWL699umol_75.addFeatures(features_SpectralPhotonFluxWL699umol_75);
var lyr_SpectralPhotonFluxWL699umol_75 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralPhotonFluxWL699umol_75, 
                style: style_SpectralPhotonFluxWL699umol_75,
                interactive: true,
                title: '<img src="styles/legend/SpectralPhotonFluxWL699umol_75.png" /> Spectral Photon Flux (WL - 699umol)'
            });
var format_SpectralPhotonFluxWL656umol_76 = new ol.format.GeoJSON();
var features_SpectralPhotonFluxWL656umol_76 = format_SpectralPhotonFluxWL656umol_76.readFeatures(json_SpectralPhotonFluxWL656umol_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralPhotonFluxWL656umol_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralPhotonFluxWL656umol_76.addFeatures(features_SpectralPhotonFluxWL656umol_76);
var lyr_SpectralPhotonFluxWL656umol_76 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralPhotonFluxWL656umol_76, 
                style: style_SpectralPhotonFluxWL656umol_76,
                interactive: true,
                title: '<img src="styles/legend/SpectralPhotonFluxWL656umol_76.png" /> Spectral Photon Flux (WL - 656umol)'
            });
var format_SpectralPhotonFluxWL628umol_77 = new ol.format.GeoJSON();
var features_SpectralPhotonFluxWL628umol_77 = format_SpectralPhotonFluxWL628umol_77.readFeatures(json_SpectralPhotonFluxWL628umol_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralPhotonFluxWL628umol_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralPhotonFluxWL628umol_77.addFeatures(features_SpectralPhotonFluxWL628umol_77);
var lyr_SpectralPhotonFluxWL628umol_77 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralPhotonFluxWL628umol_77, 
                style: style_SpectralPhotonFluxWL628umol_77,
                interactive: true,
                title: '<img src="styles/legend/SpectralPhotonFluxWL628umol_77.png" /> Spectral Photon Flux (WL - 628umol)'
            });
var format_SpectralPhotonFluxWL590umol_78 = new ol.format.GeoJSON();
var features_SpectralPhotonFluxWL590umol_78 = format_SpectralPhotonFluxWL590umol_78.readFeatures(json_SpectralPhotonFluxWL590umol_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralPhotonFluxWL590umol_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralPhotonFluxWL590umol_78.addFeatures(features_SpectralPhotonFluxWL590umol_78);
var lyr_SpectralPhotonFluxWL590umol_78 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralPhotonFluxWL590umol_78, 
                style: style_SpectralPhotonFluxWL590umol_78,
                interactive: true,
                title: '<img src="styles/legend/SpectralPhotonFluxWL590umol_78.png" /> Spectral Photon Flux (WL - 590umol)'
            });
var format_SpectralPhotonFluxWL554umol_79 = new ol.format.GeoJSON();
var features_SpectralPhotonFluxWL554umol_79 = format_SpectralPhotonFluxWL554umol_79.readFeatures(json_SpectralPhotonFluxWL554umol_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralPhotonFluxWL554umol_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralPhotonFluxWL554umol_79.addFeatures(features_SpectralPhotonFluxWL554umol_79);
var lyr_SpectralPhotonFluxWL554umol_79 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralPhotonFluxWL554umol_79, 
                style: style_SpectralPhotonFluxWL554umol_79,
                interactive: true,
                title: '<img src="styles/legend/SpectralPhotonFluxWL554umol_79.png" /> Spectral Photon Flux (WL - 554umol)'
            });
var format_SpectralPhotonFluxWL524umol_80 = new ol.format.GeoJSON();
var features_SpectralPhotonFluxWL524umol_80 = format_SpectralPhotonFluxWL524umol_80.readFeatures(json_SpectralPhotonFluxWL524umol_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralPhotonFluxWL524umol_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralPhotonFluxWL524umol_80.addFeatures(features_SpectralPhotonFluxWL524umol_80);
var lyr_SpectralPhotonFluxWL524umol_80 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralPhotonFluxWL524umol_80, 
                style: style_SpectralPhotonFluxWL524umol_80,
                interactive: true,
                title: '<img src="styles/legend/SpectralPhotonFluxWL524umol_80.png" /> Spectral Photon Flux (WL - 524umol)'
            });
var format_SpectralPhotonFluxWL470umol_81 = new ol.format.GeoJSON();
var features_SpectralPhotonFluxWL470umol_81 = format_SpectralPhotonFluxWL470umol_81.readFeatures(json_SpectralPhotonFluxWL470umol_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralPhotonFluxWL470umol_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralPhotonFluxWL470umol_81.addFeatures(features_SpectralPhotonFluxWL470umol_81);
var lyr_SpectralPhotonFluxWL470umol_81 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralPhotonFluxWL470umol_81, 
                style: style_SpectralPhotonFluxWL470umol_81,
                interactive: true,
                title: '<img src="styles/legend/SpectralPhotonFluxWL470umol_81.png" /> Spectral Photon Flux (WL - 470umol)'
            });
var format_SpectralPhotonFluxWL448umol_82 = new ol.format.GeoJSON();
var features_SpectralPhotonFluxWL448umol_82 = format_SpectralPhotonFluxWL448umol_82.readFeatures(json_SpectralPhotonFluxWL448umol_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralPhotonFluxWL448umol_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralPhotonFluxWL448umol_82.addFeatures(features_SpectralPhotonFluxWL448umol_82);
var lyr_SpectralPhotonFluxWL448umol_82 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralPhotonFluxWL448umol_82, 
                style: style_SpectralPhotonFluxWL448umol_82,
                interactive: true,
                title: '<img src="styles/legend/SpectralPhotonFluxWL448umol_82.png" /> Spectral Photon Flux (WL - 448umol)'
            });
var format_SpectralPhotonFluxWL398umol_83 = new ol.format.GeoJSON();
var features_SpectralPhotonFluxWL398umol_83 = format_SpectralPhotonFluxWL398umol_83.readFeatures(json_SpectralPhotonFluxWL398umol_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpectralPhotonFluxWL398umol_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpectralPhotonFluxWL398umol_83.addFeatures(features_SpectralPhotonFluxWL398umol_83);
var lyr_SpectralPhotonFluxWL398umol_83 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpectralPhotonFluxWL398umol_83, 
                style: style_SpectralPhotonFluxWL398umol_83,
                interactive: true,
                title: '<img src="styles/legend/SpectralPhotonFluxWL398umol_83.png" /> Spectral Photon Flux (WL - 398umol)'
            });
var format_SpecificConductivity_84 = new ol.format.GeoJSON();
var features_SpecificConductivity_84 = format_SpecificConductivity_84.readFeatures(json_SpecificConductivity_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpecificConductivity_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpecificConductivity_84.addFeatures(features_SpecificConductivity_84);
var lyr_SpecificConductivity_84 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpecificConductivity_84, 
                style: style_SpecificConductivity_84,
                interactive: true,
                title: '<img src="styles/legend/SpecificConductivity_84.png" /> Specific Conductivity'
            });
var format_Silver_85 = new ol.format.GeoJSON();
var features_Silver_85 = format_Silver_85.readFeatures(json_Silver_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Silver_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Silver_85.addFeatures(features_Silver_85);
var lyr_Silver_85 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Silver_85, 
                style: style_Silver_85,
                interactive: true,
                title: '<img src="styles/legend/Silver_85.png" /> Silver'
            });
var format_SecchiDepth_86 = new ol.format.GeoJSON();
var features_SecchiDepth_86 = format_SecchiDepth_86.readFeatures(json_SecchiDepth_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SecchiDepth_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecchiDepth_86.addFeatures(features_SecchiDepth_86);
var lyr_SecchiDepth_86 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SecchiDepth_86, 
                style: style_SecchiDepth_86,
                interactive: true,
                title: '<img src="styles/legend/SecchiDepth_86.png" /> Secchi Depth'
            });
var format_Salinity_87 = new ol.format.GeoJSON();
var features_Salinity_87 = format_Salinity_87.readFeatures(json_Salinity_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salinity_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salinity_87.addFeatures(features_Salinity_87);
var lyr_Salinity_87 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Salinity_87, 
                style: style_Salinity_87,
                interactive: true,
                title: '<img src="styles/legend/Salinity_87.png" /> Salinity'
            });
var format_ROLL_88 = new ol.format.GeoJSON();
var features_ROLL_88 = format_ROLL_88.readFeatures(json_ROLL_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROLL_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROLL_88.addFeatures(features_ROLL_88);
var lyr_ROLL_88 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROLL_88, 
                style: style_ROLL_88,
                interactive: true,
                title: '<img src="styles/legend/ROLL_88.png" /> ROLL'
            });
var format_ReactiveSilica_89 = new ol.format.GeoJSON();
var features_ReactiveSilica_89 = format_ReactiveSilica_89.readFeatures(json_ReactiveSilica_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReactiveSilica_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReactiveSilica_89.addFeatures(features_ReactiveSilica_89);
var lyr_ReactiveSilica_89 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReactiveSilica_89, 
                style: style_ReactiveSilica_89,
                interactive: true,
                title: '<img src="styles/legend/ReactiveSilica_89.png" /> Reactive Silica'
            });
var format_PyrophytinA_90 = new ol.format.GeoJSON();
var features_PyrophytinA_90 = format_PyrophytinA_90.readFeatures(json_PyrophytinA_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PyrophytinA_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PyrophytinA_90.addFeatures(features_PyrophytinA_90);
var lyr_PyrophytinA_90 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PyrophytinA_90, 
                style: style_PyrophytinA_90,
                interactive: true,
                title: '<img src="styles/legend/PyrophytinA_90.png" /> PyrophytinA'
            });
var format_PyrophideA_91 = new ol.format.GeoJSON();
var features_PyrophideA_91 = format_PyrophideA_91.readFeatures(json_PyrophideA_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PyrophideA_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PyrophideA_91.addFeatures(features_PyrophideA_91);
var lyr_PyrophideA_91 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PyrophideA_91, 
                style: style_PyrophideA_91,
                interactive: true,
                title: '<img src="styles/legend/PyrophideA_91.png" /> PyrophideA'
            });
var format_Prochlorococcus_92 = new ol.format.GeoJSON();
var features_Prochlorococcus_92 = format_Prochlorococcus_92.readFeatures(json_Prochlorococcus_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prochlorococcus_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prochlorococcus_92.addFeatures(features_Prochlorococcus_92);
var lyr_Prochlorococcus_92 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prochlorococcus_92, 
                style: style_Prochlorococcus_92,
                interactive: true,
                title: '<img src="styles/legend/Prochlorococcus_92.png" /> Prochlorococcus'
            });
var format_PRESSURE_SENSOR_DEPTH_93 = new ol.format.GeoJSON();
var features_PRESSURE_SENSOR_DEPTH_93 = format_PRESSURE_SENSOR_DEPTH_93.readFeatures(json_PRESSURE_SENSOR_DEPTH_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRESSURE_SENSOR_DEPTH_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRESSURE_SENSOR_DEPTH_93.addFeatures(features_PRESSURE_SENSOR_DEPTH_93);
var lyr_PRESSURE_SENSOR_DEPTH_93 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PRESSURE_SENSOR_DEPTH_93, 
                style: style_PRESSURE_SENSOR_DEPTH_93,
                interactive: true,
                title: '<img src="styles/legend/PRESSURE_SENSOR_DEPTH_93.png" /> PRESSURE_SENSOR_DEPTH'
            });
var format_PRESSURE_94 = new ol.format.GeoJSON();
var features_PRESSURE_94 = format_PRESSURE_94.readFeatures(json_PRESSURE_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRESSURE_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRESSURE_94.addFeatures(features_PRESSURE_94);
var lyr_PRESSURE_94 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PRESSURE_94, 
                style: style_PRESSURE_94,
                interactive: true,
                title: '<img src="styles/legend/PRESSURE_94.png" /> PRESSURE'
            });
var format_PresentWeatherinCode_95 = new ol.format.GeoJSON();
var features_PresentWeatherinCode_95 = format_PresentWeatherinCode_95.readFeatures(json_PresentWeatherinCode_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PresentWeatherinCode_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PresentWeatherinCode_95.addFeatures(features_PresentWeatherinCode_95);
var lyr_PresentWeatherinCode_95 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PresentWeatherinCode_95, 
                style: style_PresentWeatherinCode_95,
                interactive: true,
                title: '<img src="styles/legend/PresentWeatherinCode_95.png" /> Present Weather in Code'
            });
var format_Pras_96 = new ol.format.GeoJSON();
var features_Pras_96 = format_Pras_96.readFeatures(json_Pras_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pras_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pras_96.addFeatures(features_Pras_96);
var lyr_Pras_96 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pras_96, 
                style: style_Pras_96,
                interactive: true,
                title: '<img src="styles/legend/Pras_96.png" /> Pras'
            });
var format_PosidoniaSinuosaTotalBiomass_97 = new ol.format.GeoJSON();
var features_PosidoniaSinuosaTotalBiomass_97 = format_PosidoniaSinuosaTotalBiomass_97.readFeatures(json_PosidoniaSinuosaTotalBiomass_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosidoniaSinuosaTotalBiomass_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PosidoniaSinuosaTotalBiomass_97.addFeatures(features_PosidoniaSinuosaTotalBiomass_97);
var lyr_PosidoniaSinuosaTotalBiomass_97 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PosidoniaSinuosaTotalBiomass_97, 
                style: style_PosidoniaSinuosaTotalBiomass_97,
                interactive: true,
                title: '<img src="styles/legend/PosidoniaSinuosaTotalBiomass_97.png" /> Posidonia Sinuosa Total Biomass'
            });
var format_PosidoniaSinuosaDryWeight_98 = new ol.format.GeoJSON();
var features_PosidoniaSinuosaDryWeight_98 = format_PosidoniaSinuosaDryWeight_98.readFeatures(json_PosidoniaSinuosaDryWeight_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosidoniaSinuosaDryWeight_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PosidoniaSinuosaDryWeight_98.addFeatures(features_PosidoniaSinuosaDryWeight_98);
var lyr_PosidoniaSinuosaDryWeight_98 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PosidoniaSinuosaDryWeight_98, 
                style: style_PosidoniaSinuosaDryWeight_98,
                interactive: true,
                title: '<img src="styles/legend/PosidoniaSinuosaDryWeight_98.png" /> Posidonia Sinuosa Dry Weight'
            });
var format_PosidoniaSinuosaCount_99 = new ol.format.GeoJSON();
var features_PosidoniaSinuosaCount_99 = format_PosidoniaSinuosaCount_99.readFeatures(json_PosidoniaSinuosaCount_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosidoniaSinuosaCount_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PosidoniaSinuosaCount_99.addFeatures(features_PosidoniaSinuosaCount_99);
var lyr_PosidoniaSinuosaCount_99 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PosidoniaSinuosaCount_99, 
                style: style_PosidoniaSinuosaCount_99,
                interactive: true,
                title: '<img src="styles/legend/PosidoniaSinuosaCount_99.png" /> Posidonia Sinuosa Count'
            });
var format_PosidoniaSinuosaBelowGroundBiomass_100 = new ol.format.GeoJSON();
var features_PosidoniaSinuosaBelowGroundBiomass_100 = format_PosidoniaSinuosaBelowGroundBiomass_100.readFeatures(json_PosidoniaSinuosaBelowGroundBiomass_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosidoniaSinuosaBelowGroundBiomass_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PosidoniaSinuosaBelowGroundBiomass_100.addFeatures(features_PosidoniaSinuosaBelowGroundBiomass_100);
var lyr_PosidoniaSinuosaBelowGroundBiomass_100 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PosidoniaSinuosaBelowGroundBiomass_100, 
                style: style_PosidoniaSinuosaBelowGroundBiomass_100,
                interactive: true,
                title: '<img src="styles/legend/PosidoniaSinuosaBelowGroundBiomass_100.png" /> Posidonia Sinuosa Below Ground Biomass'
            });
var format_PosidoniaSinuosaAboveGroundBiomass_101 = new ol.format.GeoJSON();
var features_PosidoniaSinuosaAboveGroundBiomass_101 = format_PosidoniaSinuosaAboveGroundBiomass_101.readFeatures(json_PosidoniaSinuosaAboveGroundBiomass_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosidoniaSinuosaAboveGroundBiomass_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PosidoniaSinuosaAboveGroundBiomass_101.addFeatures(features_PosidoniaSinuosaAboveGroundBiomass_101);
var lyr_PosidoniaSinuosaAboveGroundBiomass_101 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PosidoniaSinuosaAboveGroundBiomass_101, 
                style: style_PosidoniaSinuosaAboveGroundBiomass_101,
                interactive: true,
                title: '<img src="styles/legend/PosidoniaSinuosaAboveGroundBiomass_101.png" /> Posidonia Sinuosa Above Ground Biomass'
            });
var format_Pitch_102 = new ol.format.GeoJSON();
var features_Pitch_102 = format_Pitch_102.readFeatures(json_Pitch_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pitch_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pitch_102.addFeatures(features_Pitch_102);
var lyr_Pitch_102 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pitch_102, 
                style: style_Pitch_102,
                interactive: true,
                title: '<img src="styles/legend/Pitch_102.png" /> Pitch'
            });
var format_PicoplanktonFraction_103 = new ol.format.GeoJSON();
var features_PicoplanktonFraction_103 = format_PicoplanktonFraction_103.readFeatures(json_PicoplanktonFraction_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PicoplanktonFraction_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PicoplanktonFraction_103.addFeatures(features_PicoplanktonFraction_103);
var lyr_PicoplanktonFraction_103 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PicoplanktonFraction_103, 
                style: style_PicoplanktonFraction_103,
                interactive: true,
                title: '<img src="styles/legend/PicoplanktonFraction_103.png" /> Picoplankton Fraction'
            });
var format_Picoeukaryotes_104 = new ol.format.GeoJSON();
var features_Picoeukaryotes_104 = format_Picoeukaryotes_104.readFeatures(json_Picoeukaryotes_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Picoeukaryotes_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Picoeukaryotes_104.addFeatures(features_Picoeukaryotes_104);
var lyr_Picoeukaryotes_104 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Picoeukaryotes_104, 
                style: style_Picoeukaryotes_104,
                interactive: true,
                title: '<img src="styles/legend/Picoeukaryotes_104.png" /> Picoeukaryotes'
            });
var format_PhytinB_105 = new ol.format.GeoJSON();
var features_PhytinB_105 = format_PhytinB_105.readFeatures(json_PhytinB_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhytinB_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhytinB_105.addFeatures(features_PhytinB_105);
var lyr_PhytinB_105 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PhytinB_105, 
                style: style_PhytinB_105,
                interactive: true,
                title: '<img src="styles/legend/PhytinB_105.png" /> PhytinB'
            });
var format_PhytinA_106 = new ol.format.GeoJSON();
var features_PhytinA_106 = format_PhytinA_106.readFeatures(json_PhytinA_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhytinA_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhytinA_106.addFeatures(features_PhytinA_106);
var lyr_PhytinA_106 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PhytinA_106, 
                style: style_PhytinA_106,
                interactive: true,
                title: '<img src="styles/legend/PhytinA_106.png" /> PhytinA'
            });
var format_PhideA_107 = new ol.format.GeoJSON();
var features_PhideA_107 = format_PhideA_107.readFeatures(json_PhideA_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhideA_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhideA_107.addFeatures(features_PhideA_107);
var lyr_PhideA_107 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PhideA_107, 
                style: style_PhideA_107,
                interactive: true,
                title: '<img src="styles/legend/PhideA_107.png" /> PhideA'
            });
var format_Phaeophytina_108 = new ol.format.GeoJSON();
var features_Phaeophytina_108 = format_Phaeophytina_108.readFeatures(json_Phaeophytina_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Phaeophytina_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Phaeophytina_108.addFeatures(features_Phaeophytina_108);
var lyr_Phaeophytina_108 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Phaeophytina_108, 
                style: style_Phaeophytina_108,
                interactive: true,
                title: '<img src="styles/legend/Phaeophytina_108.png" /> Phaeophytin-a'
            });
var format_pH_109 = new ol.format.GeoJSON();
var features_pH_109 = format_pH_109.readFeatures(json_pH_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pH_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pH_109.addFeatures(features_pH_109);
var lyr_pH_109 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pH_109, 
                style: style_pH_109,
                interactive: true,
                title: '<img src="styles/legend/pH_109.png" /> pH'
            });
var format_Perid_110 = new ol.format.GeoJSON();
var features_Perid_110 = format_Perid_110.readFeatures(json_Perid_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perid_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perid_110.addFeatures(features_Perid_110);
var lyr_Perid_110 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perid_110, 
                style: style_Perid_110,
                interactive: true,
                title: '<img src="styles/legend/Perid_110.png" /> Perid'
            });
var format_ParticulateOrganicCarbon_111 = new ol.format.GeoJSON();
var features_ParticulateOrganicCarbon_111 = format_ParticulateOrganicCarbon_111.readFeatures(json_ParticulateOrganicCarbon_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParticulateOrganicCarbon_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParticulateOrganicCarbon_111.addFeatures(features_ParticulateOrganicCarbon_111);
var lyr_ParticulateOrganicCarbon_111 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParticulateOrganicCarbon_111, 
                style: style_ParticulateOrganicCarbon_111,
                interactive: true,
                title: '<img src="styles/legend/ParticulateOrganicCarbon_111.png" /> Particulate Organic Carbon'
            });
var format_OrganicPhosphorus_112 = new ol.format.GeoJSON();
var features_OrganicPhosphorus_112 = format_OrganicPhosphorus_112.readFeatures(json_OrganicPhosphorus_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OrganicPhosphorus_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OrganicPhosphorus_112.addFeatures(features_OrganicPhosphorus_112);
var lyr_OrganicPhosphorus_112 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OrganicPhosphorus_112, 
                style: style_OrganicPhosphorus_112,
                interactive: true,
                title: '<img src="styles/legend/OrganicPhosphorus_112.png" /> Organic Phosphorus'
            });
var format_OrganicNitrogen_113 = new ol.format.GeoJSON();
var features_OrganicNitrogen_113 = format_OrganicNitrogen_113.readFeatures(json_OrganicNitrogen_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OrganicNitrogen_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OrganicNitrogen_113.addFeatures(features_OrganicNitrogen_113);
var lyr_OrganicNitrogen_113 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OrganicNitrogen_113, 
                style: style_OrganicNitrogen_113,
                interactive: true,
                title: '<img src="styles/legend/OrganicNitrogen_113.png" /> Organic Nitrogen'
            });
var format_O2Saturation_114 = new ol.format.GeoJSON();
var features_O2Saturation_114 = format_O2Saturation_114.readFeatures(json_O2Saturation_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_O2Saturation_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_O2Saturation_114.addFeatures(features_O2Saturation_114);
var lyr_O2Saturation_114 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_O2Saturation_114, 
                style: style_O2Saturation_114,
                interactive: true,
                title: '<img src="styles/legend/O2Saturation_114.png" /> O2 Saturation'
            });
var format_Nitrite_115 = new ol.format.GeoJSON();
var features_Nitrite_115 = format_Nitrite_115.readFeatures(json_Nitrite_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nitrite_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nitrite_115.addFeatures(features_Nitrite_115);
var lyr_Nitrite_115 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nitrite_115, 
                style: style_Nitrite_115,
                interactive: true,
                title: '<img src="styles/legend/Nitrite_115.png" /> Nitrite'
            });
var format_Nitrate_116 = new ol.format.GeoJSON();
var features_Nitrate_116 = format_Nitrate_116.readFeatures(json_Nitrate_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nitrate_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nitrate_116.addFeatures(features_Nitrate_116);
var lyr_Nitrate_116 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nitrate_116, 
                style: style_Nitrate_116,
                interactive: true,
                title: '<img src="styles/legend/Nitrate_116.png" /> Nitrate'
            });
var format_Nickel_117 = new ol.format.GeoJSON();
var features_Nickel_117 = format_Nickel_117.readFeatures(json_Nickel_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nickel_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nickel_117.addFeatures(features_Nickel_117);
var lyr_Nickel_117 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nickel_117, 
                style: style_Nickel_117,
                interactive: true,
                title: '<img src="styles/legend/Nickel_117.png" /> Nickel'
            });
var format_Neo_118 = new ol.format.GeoJSON();
var features_Neo_118 = format_Neo_118.readFeatures(json_Neo_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neo_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neo_118.addFeatures(features_Neo_118);
var lyr_Neo_118 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Neo_118, 
                style: style_Neo_118,
                interactive: true,
                title: '<img src="styles/legend/Neo_118.png" /> Neo'
            });
var format_MgDvp_119 = new ol.format.GeoJSON();
var features_MgDvp_119 = format_MgDvp_119.readFeatures(json_MgDvp_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MgDvp_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MgDvp_119.addFeatures(features_MgDvp_119);
var lyr_MgDvp_119 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MgDvp_119, 
                style: style_MgDvp_119,
                interactive: true,
                title: '<img src="styles/legend/MgDvp_119.png" /> MgDvp'
            });
var format_mpXylene_120 = new ol.format.GeoJSON();
var features_mpXylene_120 = format_mpXylene_120.readFeatures(json_mpXylene_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mpXylene_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mpXylene_120.addFeatures(features_mpXylene_120);
var lyr_mpXylene_120 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mpXylene_120, 
                style: style_mpXylene_120,
                interactive: true,
                title: '<img src="styles/legend/mpXylene_120.png" /> m,p-Xylene'
            });
var format_Lyco_121 = new ol.format.GeoJSON();
var features_Lyco_121 = format_Lyco_121.readFeatures(json_Lyco_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lyco_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lyco_121.addFeatures(features_Lyco_121);
var lyr_Lyco_121 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lyco_121, 
                style: style_Lyco_121,
                interactive: true,
                title: '<img src="styles/legend/Lyco_121.png" /> Lyco'
            });
var format_Lut_122 = new ol.format.GeoJSON();
var features_Lut_122 = format_Lut_122.readFeatures(json_Lut_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lut_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lut_122.addFeatures(features_Lut_122);
var lyr_Lut_122 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lut_122, 
                style: style_Lut_122,
                interactive: true,
                title: '<img src="styles/legend/Lut_122.png" /> Lut'
            });
var format_LoggerTemperature_123 = new ol.format.GeoJSON();
var features_LoggerTemperature_123 = format_LoggerTemperature_123.readFeatures(json_LoggerTemperature_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoggerTemperature_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoggerTemperature_123.addFeatures(features_LoggerTemperature_123);
var lyr_LoggerTemperature_123 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LoggerTemperature_123, 
                style: style_LoggerTemperature_123,
                interactive: true,
                title: '<img src="styles/legend/LoggerTemperature_123.png" /> Logger Temperature'
            });
var format_LightAttenuationCoefficient_124 = new ol.format.GeoJSON();
var features_LightAttenuationCoefficient_124 = format_LightAttenuationCoefficient_124.readFeatures(json_LightAttenuationCoefficient_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LightAttenuationCoefficient_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LightAttenuationCoefficient_124.addFeatures(features_LightAttenuationCoefficient_124);
var lyr_LightAttenuationCoefficient_124 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LightAttenuationCoefficient_124, 
                style: style_LightAttenuationCoefficient_124,
                interactive: true,
                title: '<img src="styles/legend/LightAttenuationCoefficient_124.png" /> Light Attenuation Coefficient'
            });
var format_Lead_125 = new ol.format.GeoJSON();
var features_Lead_125 = format_Lead_125.readFeatures(json_Lead_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lead_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lead_125.addFeatures(features_Lead_125);
var lyr_Lead_125 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lead_125, 
                style: style_Lead_125,
                interactive: true,
                title: '<img src="styles/legend/Lead_125.png" /> Lead'
            });
var format_Ketohexfuco_126 = new ol.format.GeoJSON();
var features_Ketohexfuco_126 = format_Ketohexfuco_126.readFeatures(json_Ketohexfuco_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ketohexfuco_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ketohexfuco_126.addFeatures(features_Ketohexfuco_126);
var lyr_Ketohexfuco_126 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ketohexfuco_126, 
                style: style_Ketohexfuco_126,
                interactive: true,
                title: '<img src="styles/legend/Ketohexfuco_126.png" /> Ketohexfuco'
            });
var format_Hexfuco_127 = new ol.format.GeoJSON();
var features_Hexfuco_127 = format_Hexfuco_127.readFeatures(json_Hexfuco_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hexfuco_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hexfuco_127.addFeatures(features_Hexfuco_127);
var lyr_Hexfuco_127 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hexfuco_127, 
                style: style_Hexfuco_127,
                interactive: true,
                title: '<img src="styles/legend/Hexfuco_127.png" /> Hexfuco'
            });
var format_HEADING_128 = new ol.format.GeoJSON();
var features_HEADING_128 = format_HEADING_128.readFeatures(json_HEADING_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HEADING_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HEADING_128.addFeatures(features_HEADING_128);
var lyr_HEADING_128 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HEADING_128, 
                style: style_HEADING_128,
                interactive: true,
                title: '<img src="styles/legend/HEADING_128.png" /> HEADING'
            });
var format_Gyro_129 = new ol.format.GeoJSON();
var features_Gyro_129 = format_Gyro_129.readFeatures(json_Gyro_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gyro_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gyro_129.addFeatures(features_Gyro_129);
var lyr_Gyro_129 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gyro_129, 
                style: style_Gyro_129,
                interactive: true,
                title: '<img src="styles/legend/Gyro_129.png" /> Gyro'
            });
var format_Fuco_130 = new ol.format.GeoJSON();
var features_Fuco_130 = format_Fuco_130.readFeatures(json_Fuco_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fuco_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fuco_130.addFeatures(features_Fuco_130);
var lyr_Fuco_130 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fuco_130, 
                style: style_Fuco_130,
                interactive: true,
                title: '<img src="styles/legend/Fuco_130.png" /> Fuco'
            });
var format_Fluorescence_131 = new ol.format.GeoJSON();
var features_Fluorescence_131 = format_Fluorescence_131.readFeatures(json_Fluorescence_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fluorescence_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fluorescence_131.addFeatures(features_Fluorescence_131);
var lyr_Fluorescence_131 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fluorescence_131, 
                style: style_Fluorescence_131,
                interactive: true,
                title: '<img src="styles/legend/Fluorescence_131.png" /> Fluorescence'
            });
var format_FilteredCopper_132 = new ol.format.GeoJSON();
var features_FilteredCopper_132 = format_FilteredCopper_132.readFeatures(json_FilteredCopper_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FilteredCopper_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FilteredCopper_132.addFeatures(features_FilteredCopper_132);
var lyr_FilteredCopper_132 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FilteredCopper_132, 
                style: style_FilteredCopper_132,
                interactive: true,
                title: '<img src="styles/legend/FilteredCopper_132.png" /> Filtered Copper'
            });
var format_FilterableReactivePhosphate_133 = new ol.format.GeoJSON();
var features_FilterableReactivePhosphate_133 = format_FilterableReactivePhosphate_133.readFeatures(json_FilterableReactivePhosphate_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FilterableReactivePhosphate_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FilterableReactivePhosphate_133.addFeatures(features_FilterableReactivePhosphate_133);
var lyr_FilterableReactivePhosphate_133 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FilterableReactivePhosphate_133, 
                style: style_FilterableReactivePhosphate_133,
                interactive: true,
                title: '<img src="styles/legend/FilterableReactivePhosphate_133.png" /> Filterable Reactive Phosphate'
            });
var format_Ethylbenzene_134 = new ol.format.GeoJSON();
var features_Ethylbenzene_134 = format_Ethylbenzene_134.readFeatures(json_Ethylbenzene_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ethylbenzene_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ethylbenzene_134.addFeatures(features_Ethylbenzene_134);
var lyr_Ethylbenzene_134 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ethylbenzene_134, 
                style: style_Ethylbenzene_134,
                interactive: true,
                title: '<img src="styles/legend/Ethylbenzene_134.png" /> Ethylbenzene'
            });
var format_Echin_135 = new ol.format.GeoJSON();
var features_Echin_135 = format_Echin_135.readFeatures(json_Echin_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Echin_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Echin_135.addFeatures(features_Echin_135);
var lyr_Echin_135 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Echin_135, 
                style: style_Echin_135,
                interactive: true,
                title: '<img src="styles/legend/Echin_135.png" /> Echin'
            });
var format_DvCphlB_136 = new ol.format.GeoJSON();
var features_DvCphlB_136 = format_DvCphlB_136.readFeatures(json_DvCphlB_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DvCphlB_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DvCphlB_136.addFeatures(features_DvCphlB_136);
var lyr_DvCphlB_136 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DvCphlB_136, 
                style: style_DvCphlB_136,
                interactive: true,
                title: '<img src="styles/legend/DvCphlB_136.png" /> DvCphlB'
            });
var format_DvCphlBCphlB_137 = new ol.format.GeoJSON();
var features_DvCphlBCphlB_137 = format_DvCphlBCphlB_137.readFeatures(json_DvCphlBCphlB_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DvCphlBCphlB_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DvCphlBCphlB_137.addFeatures(features_DvCphlBCphlB_137);
var lyr_DvCphlBCphlB_137 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DvCphlBCphlB_137, 
                style: style_DvCphlBCphlB_137,
                interactive: true,
                title: '<img src="styles/legend/DvCphlBCphlB_137.png" /> DvCphlB+CphlB'
            });
var format_DvCphlA_138 = new ol.format.GeoJSON();
var features_DvCphlA_138 = format_DvCphlA_138.readFeatures(json_DvCphlA_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DvCphlA_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DvCphlA_138.addFeatures(features_DvCphlA_138);
var lyr_DvCphlA_138 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DvCphlA_138, 
                style: style_DvCphlA_138,
                interactive: true,
                title: '<img src="styles/legend/DvCphlA_138.png" /> DvCphlA'
            });
var format_DvCphlACphlA_139 = new ol.format.GeoJSON();
var features_DvCphlACphlA_139 = format_DvCphlACphlA_139.readFeatures(json_DvCphlACphlA_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DvCphlACphlA_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DvCphlACphlA_139.addFeatures(features_DvCphlACphlA_139);
var lyr_DvCphlACphlA_139 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DvCphlACphlA_139, 
                style: style_DvCphlACphlA_139,
                interactive: true,
                title: '<img src="styles/legend/DvCphlACphlA_139.png" /> DvCphlA+CphlA'
            });
var format_DissolvedOxygen_140 = new ol.format.GeoJSON();
var features_DissolvedOxygen_140 = format_DissolvedOxygen_140.readFeatures(json_DissolvedOxygen_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DissolvedOxygen_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DissolvedOxygen_140.addFeatures(features_DissolvedOxygen_140);
var lyr_DissolvedOxygen_140 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DissolvedOxygen_140, 
                style: style_DissolvedOxygen_140,
                interactive: true,
                title: '<img src="styles/legend/DissolvedOxygen_140.png" /> Dissolved Oxygen'
            });
var format_DissolvedOrganicNitrogen_141 = new ol.format.GeoJSON();
var features_DissolvedOrganicNitrogen_141 = format_DissolvedOrganicNitrogen_141.readFeatures(json_DissolvedOrganicNitrogen_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DissolvedOrganicNitrogen_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DissolvedOrganicNitrogen_141.addFeatures(features_DissolvedOrganicNitrogen_141);
var lyr_DissolvedOrganicNitrogen_141 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DissolvedOrganicNitrogen_141, 
                style: style_DissolvedOrganicNitrogen_141,
                interactive: true,
                title: '<img src="styles/legend/DissolvedOrganicNitrogen_141.png" /> Dissolved Organic Nitrogen'
            });
var format_DissolvedOrganicCarbon_142 = new ol.format.GeoJSON();
var features_DissolvedOrganicCarbon_142 = format_DissolvedOrganicCarbon_142.readFeatures(json_DissolvedOrganicCarbon_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DissolvedOrganicCarbon_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DissolvedOrganicCarbon_142.addFeatures(features_DissolvedOrganicCarbon_142);
var lyr_DissolvedOrganicCarbon_142 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DissolvedOrganicCarbon_142, 
                style: style_DissolvedOrganicCarbon_142,
                interactive: true,
                title: '<img src="styles/legend/DissolvedOrganicCarbon_142.png" /> Dissolved Organic Carbon'
            });
var format_DissolvedInorganicCarbon_143 = new ol.format.GeoJSON();
var features_DissolvedInorganicCarbon_143 = format_DissolvedInorganicCarbon_143.readFeatures(json_DissolvedInorganicCarbon_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DissolvedInorganicCarbon_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DissolvedInorganicCarbon_143.addFeatures(features_DissolvedInorganicCarbon_143);
var lyr_DissolvedInorganicCarbon_143 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DissolvedInorganicCarbon_143, 
                style: style_DissolvedInorganicCarbon_143,
                interactive: true,
                title: '<img src="styles/legend/DissolvedInorganicCarbon_143.png" /> Dissolved Inorganic Carbon'
            });
var format_Discharge_144 = new ol.format.GeoJSON();
var features_Discharge_144 = format_Discharge_144.readFeatures(json_Discharge_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Discharge_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Discharge_144.addFeatures(features_Discharge_144);
var lyr_Discharge_144 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Discharge_144, 
                style: style_Discharge_144,
                interactive: true,
                title: '<img src="styles/legend/Discharge_144.png" /> Discharge'
            });
var format_Dischargemin_145 = new ol.format.GeoJSON();
var features_Dischargemin_145 = format_Dischargemin_145.readFeatures(json_Dischargemin_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dischargemin_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dischargemin_145.addFeatures(features_Dischargemin_145);
var lyr_Dischargemin_145 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dischargemin_145, 
                style: style_Dischargemin_145,
                interactive: true,
                title: '<img src="styles/legend/Dischargemin_145.png" /> Discharge (min)'
            });
var format_Dischargemax_146 = new ol.format.GeoJSON();
var features_Dischargemax_146 = format_Dischargemax_146.readFeatures(json_Dischargemax_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dischargemax_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dischargemax_146.addFeatures(features_Dischargemax_146);
var lyr_Dischargemax_146 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dischargemax_146, 
                style: style_Dischargemax_146,
                interactive: true,
                title: '<img src="styles/legend/Dischargemax_146.png" /> Discharge (max)'
            });
var format_Dino_147 = new ol.format.GeoJSON();
var features_Dino_147 = format_Dino_147.readFeatures(json_Dino_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dino_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dino_147.addFeatures(features_Dino_147);
var lyr_Dino_147 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dino_147, 
                style: style_Dino_147,
                interactive: true,
                title: '<img src="styles/legend/Dino_147.png" /> Dino'
            });
var format_Diato_148 = new ol.format.GeoJSON();
var features_Diato_148 = format_Diato_148.readFeatures(json_Diato_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diato_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diato_148.addFeatures(features_Diato_148);
var lyr_Diato_148 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diato_148, 
                style: style_Diato_148,
                interactive: true,
                title: '<img src="styles/legend/Diato_148.png" /> Diato'
            });
var format_Diadino_149 = new ol.format.GeoJSON();
var features_Diadino_149 = format_Diadino_149.readFeatures(json_Diadino_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diadino_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diadino_149.addFeatures(features_Diadino_149);
var lyr_Diadino_149 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diadino_149, 
                style: style_Diadino_149,
                interactive: true,
                title: '<img src="styles/legend/Diadino_149.png" /> Diadino'
            });
var format_Diadchr_150 = new ol.format.GeoJSON();
var features_Diadchr_150 = format_Diadchr_150.readFeatures(json_Diadchr_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diadchr_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diadchr_150.addFeatures(features_Diadchr_150);
var lyr_Diadchr_150 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diadchr_150, 
                style: style_Diadchr_150,
                interactive: true,
                title: '<img src="styles/legend/Diadchr_150.png" /> Diadchr'
            });
var format_Depth_151 = new ol.format.GeoJSON();
var features_Depth_151 = format_Depth_151.readFeatures(json_Depth_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Depth_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Depth_151.addFeatures(features_Depth_151);
var lyr_Depth_151 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Depth_151, 
                style: style_Depth_151,
                interactive: true,
                title: '<img src="styles/legend/Depth_151.png" /> Depth'
            });
var format_Density_152 = new ol.format.GeoJSON();
var features_Density_152 = format_Density_152.readFeatures(json_Density_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Density_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Density_152.addFeatures(features_Density_152);
var lyr_Density_152 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Density_152, 
                style: style_Density_152,
                interactive: true,
                title: '<img src="styles/legend/Density_152.png" /> Density'
            });
var format_DENSITYANOMALY_153 = new ol.format.GeoJSON();
var features_DENSITYANOMALY_153 = format_DENSITYANOMALY_153.readFeatures(json_DENSITYANOMALY_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DENSITYANOMALY_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DENSITYANOMALY_153.addFeatures(features_DENSITYANOMALY_153);
var lyr_DENSITYANOMALY_153 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DENSITYANOMALY_153, 
                style: style_DENSITYANOMALY_153,
                interactive: true,
                title: '<img src="styles/legend/DENSITYANOMALY_153.png" /> DENSITY ANOMALY'
            });
var format_DailySurfacePhotosyntheticallyActivePhotonFlux_154 = new ol.format.GeoJSON();
var features_DailySurfacePhotosyntheticallyActivePhotonFlux_154 = format_DailySurfacePhotosyntheticallyActivePhotonFlux_154.readFeatures(json_DailySurfacePhotosyntheticallyActivePhotonFlux_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DailySurfacePhotosyntheticallyActivePhotonFlux_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DailySurfacePhotosyntheticallyActivePhotonFlux_154.addFeatures(features_DailySurfacePhotosyntheticallyActivePhotonFlux_154);
var lyr_DailySurfacePhotosyntheticallyActivePhotonFlux_154 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DailySurfacePhotosyntheticallyActivePhotonFlux_154, 
                style: style_DailySurfacePhotosyntheticallyActivePhotonFlux_154,
                interactive: true,
                title: '<img src="styles/legend/DailySurfacePhotosyntheticallyActivePhotonFlux_154.png" /> Daily Surface Photosynthetically Active Photon Flux'
            });
var format_DailySolarIrradiance_155 = new ol.format.GeoJSON();
var features_DailySolarIrradiance_155 = format_DailySolarIrradiance_155.readFeatures(json_DailySolarIrradiance_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DailySolarIrradiance_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DailySolarIrradiance_155.addFeatures(features_DailySolarIrradiance_155);
var lyr_DailySolarIrradiance_155 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DailySolarIrradiance_155, 
                style: style_DailySolarIrradiance_155,
                interactive: true,
                title: '<img src="styles/legend/DailySolarIrradiance_155.png" /> Daily Solar Irradiance'
            });
var format_DailyPhotosyntheticallyActivePhotonFlux_156 = new ol.format.GeoJSON();
var features_DailyPhotosyntheticallyActivePhotonFlux_156 = format_DailyPhotosyntheticallyActivePhotonFlux_156.readFeatures(json_DailyPhotosyntheticallyActivePhotonFlux_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DailyPhotosyntheticallyActivePhotonFlux_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DailyPhotosyntheticallyActivePhotonFlux_156.addFeatures(features_DailyPhotosyntheticallyActivePhotonFlux_156);
var lyr_DailyPhotosyntheticallyActivePhotonFlux_156 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DailyPhotosyntheticallyActivePhotonFlux_156, 
                style: style_DailyPhotosyntheticallyActivePhotonFlux_156,
                interactive: true,
                title: '<img src="styles/legend/DailyPhotosyntheticallyActivePhotonFlux_156.png" /> Daily Photosynthetically Active Photon Flux'
            });
var format_DailyDischarge_157 = new ol.format.GeoJSON();
var features_DailyDischarge_157 = format_DailyDischarge_157.readFeatures(json_DailyDischarge_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DailyDischarge_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DailyDischarge_157.addFeatures(features_DailyDischarge_157);
var lyr_DailyDischarge_157 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DailyDischarge_157, 
                style: style_DailyDischarge_157,
                interactive: true,
                title: '<img src="styles/legend/DailyDischarge_157.png" /> Daily Discharge'
            });
var format_CphlideA_158 = new ol.format.GeoJSON();
var features_CphlideA_158 = format_CphlideA_158.readFeatures(json_CphlideA_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CphlideA_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CphlideA_158.addFeatures(features_CphlideA_158);
var lyr_CphlideA_158 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CphlideA_158, 
                style: style_CphlideA_158,
                interactive: true,
                title: '<img src="styles/legend/CphlideA_158.png" /> CphlideA'
            });
var format_CphlC3_159 = new ol.format.GeoJSON();
var features_CphlC3_159 = format_CphlC3_159.readFeatures(json_CphlC3_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CphlC3_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CphlC3_159.addFeatures(features_CphlC3_159);
var lyr_CphlC3_159 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CphlC3_159, 
                style: style_CphlC3_159,
                interactive: true,
                title: '<img src="styles/legend/CphlC3_159.png" /> CphlC3'
            });
var format_CphlC2_160 = new ol.format.GeoJSON();
var features_CphlC2_160 = format_CphlC2_160.readFeatures(json_CphlC2_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CphlC2_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CphlC2_160.addFeatures(features_CphlC2_160);
var lyr_CphlC2_160 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CphlC2_160, 
                style: style_CphlC2_160,
                interactive: true,
                title: '<img src="styles/legend/CphlC2_160.png" /> CphlC2'
            });
var format_CphlC1_161 = new ol.format.GeoJSON();
var features_CphlC1_161 = format_CphlC1_161.readFeatures(json_CphlC1_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CphlC1_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CphlC1_161.addFeatures(features_CphlC1_161);
var lyr_CphlC1_161 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CphlC1_161, 
                style: style_CphlC1_161,
                interactive: true,
                title: '<img src="styles/legend/CphlC1_161.png" /> CphlC1'
            });
var format_CphlB_162 = new ol.format.GeoJSON();
var features_CphlB_162 = format_CphlB_162.readFeatures(json_CphlB_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CphlB_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CphlB_162.addFeatures(features_CphlB_162);
var lyr_CphlB_162 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CphlB_162, 
                style: style_CphlB_162,
                interactive: true,
                title: '<img src="styles/legend/CphlB_162.png" /> CphlB'
            });
var format_CphlA_163 = new ol.format.GeoJSON();
var features_CphlA_163 = format_CphlA_163.readFeatures(json_CphlA_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CphlA_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CphlA_163.addFeatures(features_CphlA_163);
var lyr_CphlA_163 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CphlA_163, 
                style: style_CphlA_163,
                interactive: true,
                title: '<img src="styles/legend/CphlA_163.png" /> CphlA'
            });
var format_Copper_164 = new ol.format.GeoJSON();
var features_Copper_164 = format_Copper_164.readFeatures(json_Copper_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Copper_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Copper_164.addFeatures(features_Copper_164);
var lyr_Copper_164 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Copper_164, 
                style: style_Copper_164,
                interactive: true,
                title: '<img src="styles/legend/Copper_164.png" /> Copper'
            });
var format_CloudCover_165 = new ol.format.GeoJSON();
var features_CloudCover_165 = format_CloudCover_165.readFeatures(json_CloudCover_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CloudCover_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CloudCover_165.addFeatures(features_CloudCover_165);
var lyr_CloudCover_165 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CloudCover_165, 
                style: style_CloudCover_165,
                interactive: true,
                title: '<img src="styles/legend/CloudCover_165.png" /> Cloud Cover'
            });
var format_Chlorophyllc_166 = new ol.format.GeoJSON();
var features_Chlorophyllc_166 = format_Chlorophyllc_166.readFeatures(json_Chlorophyllc_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chlorophyllc_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chlorophyllc_166.addFeatures(features_Chlorophyllc_166);
var lyr_Chlorophyllc_166 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chlorophyllc_166, 
                style: style_Chlorophyllc_166,
                interactive: true,
                title: '<img src="styles/legend/Chlorophyllc_166.png" /> Chlorophyll-c'
            });
var format_Chlorophyllb_167 = new ol.format.GeoJSON();
var features_Chlorophyllb_167 = format_Chlorophyllb_167.readFeatures(json_Chlorophyllb_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chlorophyllb_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chlorophyllb_167.addFeatures(features_Chlorophyllb_167);
var lyr_Chlorophyllb_167 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chlorophyllb_167, 
                style: style_Chlorophyllb_167,
                interactive: true,
                title: '<img src="styles/legend/Chlorophyllb_167.png" /> Chlorophyll-b'
            });
var format_Chlorophylla_168 = new ol.format.GeoJSON();
var features_Chlorophylla_168 = format_Chlorophylla_168.readFeatures(json_Chlorophylla_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chlorophylla_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chlorophylla_168.addFeatures(features_Chlorophylla_168);
var lyr_Chlorophylla_168 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chlorophylla_168, 
                style: style_Chlorophylla_168,
                interactive: true,
                title: '<img src="styles/legend/Chlorophylla_168.png" /> Chlorophyll-a'
            });
var format_ChlorophyllSampleVolume_169 = new ol.format.GeoJSON();
var features_ChlorophyllSampleVolume_169 = format_ChlorophyllSampleVolume_169.readFeatures(json_ChlorophyllSampleVolume_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChlorophyllSampleVolume_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChlorophyllSampleVolume_169.addFeatures(features_ChlorophyllSampleVolume_169);
var lyr_ChlorophyllSampleVolume_169 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChlorophyllSampleVolume_169, 
                style: style_ChlorophyllSampleVolume_169,
                interactive: true,
                title: '<img src="styles/legend/ChlorophyllSampleVolume_169.png" /> Chlorophyll Sample Volume'
            });
var format_CeilometerSkyClearFlag_170 = new ol.format.GeoJSON();
var features_CeilometerSkyClearFlag_170 = format_CeilometerSkyClearFlag_170.readFeatures(json_CeilometerSkyClearFlag_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CeilometerSkyClearFlag_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CeilometerSkyClearFlag_170.addFeatures(features_CeilometerSkyClearFlag_170);
var lyr_CeilometerSkyClearFlag_170 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CeilometerSkyClearFlag_170, 
                style: style_CeilometerSkyClearFlag_170,
                interactive: true,
                title: '<img src="styles/legend/CeilometerSkyClearFlag_170.png" /> Ceilometer Sky Clear Flag'
            });
var format_Cantha_171 = new ol.format.GeoJSON();
var features_Cantha_171 = format_Cantha_171.readFeatures(json_Cantha_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cantha_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantha_171.addFeatures(features_Cantha_171);
var lyr_Cantha_171 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cantha_171, 
                style: style_Cantha_171,
                interactive: true,
                title: '<img src="styles/legend/Cantha_171.png" /> Cantha'
            });
var format_Butfuco_172 = new ol.format.GeoJSON();
var features_Butfuco_172 = format_Butfuco_172.readFeatures(json_Butfuco_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Butfuco_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Butfuco_172.addFeatures(features_Butfuco_172);
var lyr_Butfuco_172 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Butfuco_172, 
                style: style_Butfuco_172,
                interactive: true,
                title: '<img src="styles/legend/Butfuco_172.png" /> Butfuco'
            });
var format_BottomDepth_173 = new ol.format.GeoJSON();
var features_BottomDepth_173 = format_BottomDepth_173.readFeatures(json_BottomDepth_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BottomDepth_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BottomDepth_173.addFeatures(features_BottomDepth_173);
var lyr_BottomDepth_173 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BottomDepth_173, 
                style: style_BottomDepth_173,
                interactive: true,
                title: '<img src="styles/legend/BottomDepth_173.png" /> Bottom Depth'
            });
var format_Benzene_174 = new ol.format.GeoJSON();
var features_Benzene_174 = format_Benzene_174.readFeatures(json_Benzene_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Benzene_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Benzene_174.addFeatures(features_Benzene_174);
var lyr_Benzene_174 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Benzene_174, 
                style: style_Benzene_174,
                interactive: true,
                title: '<img src="styles/legend/Benzene_174.png" /> Benzene'
            });
var format_Asta_175 = new ol.format.GeoJSON();
var features_Asta_175 = format_Asta_175.readFeatures(json_Asta_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asta_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asta_175.addFeatures(features_Asta_175);
var lyr_Asta_175 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Asta_175, 
                style: style_Asta_175,
                interactive: true,
                title: '<img src="styles/legend/Asta_175.png" /> Asta'
            });
var format_Anth_176 = new ol.format.GeoJSON();
var features_Anth_176 = format_Anth_176.readFeatures(json_Anth_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anth_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anth_176.addFeatures(features_Anth_176);
var lyr_Anth_176 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Anth_176, 
                style: style_Anth_176,
                interactive: true,
                title: '<img src="styles/legend/Anth_176.png" /> Anth'
            });
var format_AMPLITUDE3_177 = new ol.format.GeoJSON();
var features_AMPLITUDE3_177 = format_AMPLITUDE3_177.readFeatures(json_AMPLITUDE3_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMPLITUDE3_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMPLITUDE3_177.addFeatures(features_AMPLITUDE3_177);
var lyr_AMPLITUDE3_177 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AMPLITUDE3_177, 
                style: style_AMPLITUDE3_177,
                interactive: true,
                title: '<img src="styles/legend/AMPLITUDE3_177.png" /> AMPLITUDE3'
            });
var format_AMPLITUDE2_178 = new ol.format.GeoJSON();
var features_AMPLITUDE2_178 = format_AMPLITUDE2_178.readFeatures(json_AMPLITUDE2_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMPLITUDE2_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMPLITUDE2_178.addFeatures(features_AMPLITUDE2_178);
var lyr_AMPLITUDE2_178 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AMPLITUDE2_178, 
                style: style_AMPLITUDE2_178,
                interactive: true,
                title: '<img src="styles/legend/AMPLITUDE2_178.png" /> AMPLITUDE2'
            });
var format_AMPLITUDE1_179 = new ol.format.GeoJSON();
var features_AMPLITUDE1_179 = format_AMPLITUDE1_179.readFeatures(json_AMPLITUDE1_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMPLITUDE1_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMPLITUDE1_179.addFeatures(features_AMPLITUDE1_179);
var lyr_AMPLITUDE1_179 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AMPLITUDE1_179, 
                style: style_AMPLITUDE1_179,
                interactive: true,
                title: '<img src="styles/legend/AMPLITUDE1_179.png" /> AMPLITUDE1'
            });
var format_Ammonium_180 = new ol.format.GeoJSON();
var features_Ammonium_180 = format_Ammonium_180.readFeatures(json_Ammonium_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ammonium_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ammonium_180.addFeatures(features_Ammonium_180);
var lyr_Ammonium_180 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ammonium_180, 
                style: style_Ammonium_180,
                interactive: true,
                title: '<img src="styles/legend/Ammonium_180.png" /> Ammonium'
            });
var format_AlphaBetaCar_181 = new ol.format.GeoJSON();
var features_AlphaBetaCar_181 = format_AlphaBetaCar_181.readFeatures(json_AlphaBetaCar_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlphaBetaCar_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlphaBetaCar_181.addFeatures(features_AlphaBetaCar_181);
var lyr_AlphaBetaCar_181 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlphaBetaCar_181, 
                style: style_AlphaBetaCar_181,
                interactive: true,
                title: '<img src="styles/legend/AlphaBetaCar_181.png" /> AlphaBetaCar'
            });
var format_Allo_182 = new ol.format.GeoJSON();
var features_Allo_182 = format_Allo_182.readFeatures(json_Allo_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Allo_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Allo_182.addFeatures(features_Allo_182);
var lyr_Allo_182 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Allo_182, 
                style: style_Allo_182,
                interactive: true,
                title: '<img src="styles/legend/Allo_182.png" /> Allo'
            });
var format_AirTemperature_183 = new ol.format.GeoJSON();
var features_AirTemperature_183 = format_AirTemperature_183.readFeatures(json_AirTemperature_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirTemperature_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirTemperature_183.addFeatures(features_AirTemperature_183);
var lyr_AirTemperature_183 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirTemperature_183, 
                style: style_AirTemperature_183,
                interactive: true,
                title: '<img src="styles/legend/AirTemperature_183.png" /> Air Temperature'
            });
var format_ACCELERATIONZ_184 = new ol.format.GeoJSON();
var features_ACCELERATIONZ_184 = format_ACCELERATIONZ_184.readFeatures(json_ACCELERATIONZ_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACCELERATIONZ_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACCELERATIONZ_184.addFeatures(features_ACCELERATIONZ_184);
var lyr_ACCELERATIONZ_184 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACCELERATIONZ_184, 
                style: style_ACCELERATIONZ_184,
                interactive: true,
                title: '<img src="styles/legend/ACCELERATIONZ_184.png" /> ACCELERATIONZ'
            });
var format_ACCELERATIONY_185 = new ol.format.GeoJSON();
var features_ACCELERATIONY_185 = format_ACCELERATIONY_185.readFeatures(json_ACCELERATIONY_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACCELERATIONY_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACCELERATIONY_185.addFeatures(features_ACCELERATIONY_185);
var lyr_ACCELERATIONY_185 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACCELERATIONY_185, 
                style: style_ACCELERATIONY_185,
                interactive: true,
                title: '<img src="styles/legend/ACCELERATIONY_185.png" /> ACCELERATIONY'
            });
var format_ACCELERATIONX_186 = new ol.format.GeoJSON();
var features_ACCELERATIONX_186 = format_ACCELERATIONX_186.readFeatures(json_ACCELERATIONX_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACCELERATIONX_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACCELERATIONX_186.addFeatures(features_ACCELERATIONX_186);
var lyr_ACCELERATIONX_186 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACCELERATIONX_186, 
                style: style_ACCELERATIONX_186,
                interactive: true,
                title: '<img src="styles/legend/ACCELERATIONX_186.png" /> ACCELERATIONX'
            });
var group_Variables = new ol.layer.Group({
                                layers: [lyr_Zinc_3,lyr_Zea_4,lyr_Xylene_5,lyr_WindSpeed_6,lyr_WindSpeedmin_7,lyr_WindSpeedmax_8,lyr_WindDirection_9,lyr_WindDirectionstd_10,lyr_WCUR_11,lyr_WaterSurfaceHeight_12,lyr_Viola_13,lyr_VCURnorthwardvelocity_14,lyr_UCUReastwardvelocity_15,lyr_Turbidity_16,lyr_TSSorganic_17,lyr_TSSinorganic_18,lyr_TRHgtC34C40_19,lyr_TRHgtC16C34_20,lyr_TRHgtC10C16_21,lyr_TRHC6C10_22,lyr_TPHC6C9_23,lyr_TPHC29C36_24,lyr_TPHC15C28_25,lyr_TPHC10C14_26,lyr_TotalTRHs_27,lyr_TotalTPH_28,lyr_TotalSuspendedSolids_29,lyr_TotalPhosphorus_30,lyr_TotalNitrogen_31,lyr_TotalKjeldahlNitrogen_32,lyr_TotalBTEX_33,lyr_TotalAlkalinity_34,lyr_Toluene_35,lyr_Tilt_36,lyr_Temperature_37,lyr_Synechococcus_38,lyr_SurfaceSolarIrradiance_39,lyr_SurfaceSolarIrradiancestd_40,lyr_SurfaceSolarIrradiancemin_41,lyr_SurfaceSolarIrradiancemax_42,lyr_SurfacePhotosyntheticallyActivePhotonFlux_43,lyr_SurfacePhotosyntheticallyActivePhotonFluxstd_44,lyr_SurfacePhotosyntheticallyActivePhotonFluxmin_45,lyr_SurfacePhotosyntheticallyActivePhotonFluxmax_46,lyr_StationLevelPressure_47,lyr_StationLevelPressurestd_48,lyr_StationLevelPressuremin_49,lyr_StationLevelPressuremax_50,lyr_StageHeight_51,lyr_StageHeightCTF_52,lyr_StageHeightCTFmin_53,lyr_StageHeightCTFmax_54,lyr_StageHeightmin_55,lyr_StageHeightmax_56,lyr_SPEED_OF_SOUND_57,lyr_SpectralRadiativeFluxWL700uW_58,lyr_SpectralRadiativeFluxWL699uW_59,lyr_SpectralRadiativeFluxWL660uW_60,lyr_SpectralRadiativeFluxWL656uW_61,lyr_SpectralRadiativeFluxWL635uW_62,lyr_SpectralRadiativeFluxWL628uW_63,lyr_SpectralRadiativeFluxWL590uW_64,lyr_SpectralRadiativeFluxWL554uW_65,lyr_SpectralRadiativeFluxWL550uW_66,lyr_SpectralRadiativeFluxWL524uW_67,lyr_SpectralRadiativeFluxWL510uW_68,lyr_SpectralRadiativeFluxWL490uW_69,lyr_SpectralRadiativeFluxWL470uW_70,lyr_SpectralRadiativeFluxWL448uW_71,lyr_SpectralRadiativeFluxWL440uW_72,lyr_SpectralRadiativeFluxWL410uW_73,lyr_SpectralRadiativeFluxWL398uW_74,lyr_SpectralPhotonFluxWL699umol_75,lyr_SpectralPhotonFluxWL656umol_76,lyr_SpectralPhotonFluxWL628umol_77,lyr_SpectralPhotonFluxWL590umol_78,lyr_SpectralPhotonFluxWL554umol_79,lyr_SpectralPhotonFluxWL524umol_80,lyr_SpectralPhotonFluxWL470umol_81,lyr_SpectralPhotonFluxWL448umol_82,lyr_SpectralPhotonFluxWL398umol_83,lyr_SpecificConductivity_84,lyr_Silver_85,lyr_SecchiDepth_86,lyr_Salinity_87,lyr_ROLL_88,lyr_ReactiveSilica_89,lyr_PyrophytinA_90,lyr_PyrophideA_91,lyr_Prochlorococcus_92,lyr_PRESSURE_SENSOR_DEPTH_93,lyr_PRESSURE_94,lyr_PresentWeatherinCode_95,lyr_Pras_96,lyr_PosidoniaSinuosaTotalBiomass_97,lyr_PosidoniaSinuosaDryWeight_98,lyr_PosidoniaSinuosaCount_99,lyr_PosidoniaSinuosaBelowGroundBiomass_100,lyr_PosidoniaSinuosaAboveGroundBiomass_101,lyr_Pitch_102,lyr_PicoplanktonFraction_103,lyr_Picoeukaryotes_104,lyr_PhytinB_105,lyr_PhytinA_106,lyr_PhideA_107,lyr_Phaeophytina_108,lyr_pH_109,lyr_Perid_110,lyr_ParticulateOrganicCarbon_111,lyr_OrganicPhosphorus_112,lyr_OrganicNitrogen_113,lyr_O2Saturation_114,lyr_Nitrite_115,lyr_Nitrate_116,lyr_Nickel_117,lyr_Neo_118,lyr_MgDvp_119,lyr_mpXylene_120,lyr_Lyco_121,lyr_Lut_122,lyr_LoggerTemperature_123,lyr_LightAttenuationCoefficient_124,lyr_Lead_125,lyr_Ketohexfuco_126,lyr_Hexfuco_127,lyr_HEADING_128,lyr_Gyro_129,lyr_Fuco_130,lyr_Fluorescence_131,lyr_FilteredCopper_132,lyr_FilterableReactivePhosphate_133,lyr_Ethylbenzene_134,lyr_Echin_135,lyr_DvCphlB_136,lyr_DvCphlBCphlB_137,lyr_DvCphlA_138,lyr_DvCphlACphlA_139,lyr_DissolvedOxygen_140,lyr_DissolvedOrganicNitrogen_141,lyr_DissolvedOrganicCarbon_142,lyr_DissolvedInorganicCarbon_143,lyr_Discharge_144,lyr_Dischargemin_145,lyr_Dischargemax_146,lyr_Dino_147,lyr_Diato_148,lyr_Diadino_149,lyr_Diadchr_150,lyr_Depth_151,lyr_Density_152,lyr_DENSITYANOMALY_153,lyr_DailySurfacePhotosyntheticallyActivePhotonFlux_154,lyr_DailySolarIrradiance_155,lyr_DailyPhotosyntheticallyActivePhotonFlux_156,lyr_DailyDischarge_157,lyr_CphlideA_158,lyr_CphlC3_159,lyr_CphlC2_160,lyr_CphlC1_161,lyr_CphlB_162,lyr_CphlA_163,lyr_Copper_164,lyr_CloudCover_165,lyr_Chlorophyllc_166,lyr_Chlorophyllb_167,lyr_Chlorophylla_168,lyr_ChlorophyllSampleVolume_169,lyr_CeilometerSkyClearFlag_170,lyr_Cantha_171,lyr_Butfuco_172,lyr_BottomDepth_173,lyr_Benzene_174,lyr_Asta_175,lyr_Anth_176,lyr_AMPLITUDE3_177,lyr_AMPLITUDE2_178,lyr_AMPLITUDE1_179,lyr_Ammonium_180,lyr_AlphaBetaCar_181,lyr_Allo_182,lyr_AirTemperature_183,lyr_ACCELERATIONZ_184,lyr_ACCELERATIONY_185,lyr_ACCELERATIONX_186,],
                                title: "Variables"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_ESRIGraylight_1,lyr_MLAUZones_2,],
                                title: "Basemaps"});

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRIGraylight_1.setVisible(true);lyr_MLAUZones_2.setVisible(true);lyr_Zinc_3.setVisible(true);lyr_Zea_4.setVisible(true);lyr_Xylene_5.setVisible(true);lyr_WindSpeed_6.setVisible(true);lyr_WindSpeedmin_7.setVisible(true);lyr_WindSpeedmax_8.setVisible(true);lyr_WindDirection_9.setVisible(true);lyr_WindDirectionstd_10.setVisible(true);lyr_WCUR_11.setVisible(true);lyr_WaterSurfaceHeight_12.setVisible(true);lyr_Viola_13.setVisible(true);lyr_VCURnorthwardvelocity_14.setVisible(true);lyr_UCUReastwardvelocity_15.setVisible(true);lyr_Turbidity_16.setVisible(true);lyr_TSSorganic_17.setVisible(true);lyr_TSSinorganic_18.setVisible(true);lyr_TRHgtC34C40_19.setVisible(true);lyr_TRHgtC16C34_20.setVisible(true);lyr_TRHgtC10C16_21.setVisible(true);lyr_TRHC6C10_22.setVisible(true);lyr_TPHC6C9_23.setVisible(true);lyr_TPHC29C36_24.setVisible(true);lyr_TPHC15C28_25.setVisible(true);lyr_TPHC10C14_26.setVisible(true);lyr_TotalTRHs_27.setVisible(true);lyr_TotalTPH_28.setVisible(true);lyr_TotalSuspendedSolids_29.setVisible(true);lyr_TotalPhosphorus_30.setVisible(true);lyr_TotalNitrogen_31.setVisible(true);lyr_TotalKjeldahlNitrogen_32.setVisible(true);lyr_TotalBTEX_33.setVisible(true);lyr_TotalAlkalinity_34.setVisible(true);lyr_Toluene_35.setVisible(true);lyr_Tilt_36.setVisible(true);lyr_Temperature_37.setVisible(true);lyr_Synechococcus_38.setVisible(true);lyr_SurfaceSolarIrradiance_39.setVisible(true);lyr_SurfaceSolarIrradiancestd_40.setVisible(true);lyr_SurfaceSolarIrradiancemin_41.setVisible(true);lyr_SurfaceSolarIrradiancemax_42.setVisible(true);lyr_SurfacePhotosyntheticallyActivePhotonFlux_43.setVisible(true);lyr_SurfacePhotosyntheticallyActivePhotonFluxstd_44.setVisible(true);lyr_SurfacePhotosyntheticallyActivePhotonFluxmin_45.setVisible(true);lyr_SurfacePhotosyntheticallyActivePhotonFluxmax_46.setVisible(true);lyr_StationLevelPressure_47.setVisible(true);lyr_StationLevelPressurestd_48.setVisible(true);lyr_StationLevelPressuremin_49.setVisible(true);lyr_StationLevelPressuremax_50.setVisible(true);lyr_StageHeight_51.setVisible(true);lyr_StageHeightCTF_52.setVisible(true);lyr_StageHeightCTFmin_53.setVisible(true);lyr_StageHeightCTFmax_54.setVisible(true);lyr_StageHeightmin_55.setVisible(true);lyr_StageHeightmax_56.setVisible(true);lyr_SPEED_OF_SOUND_57.setVisible(true);lyr_SpectralRadiativeFluxWL700uW_58.setVisible(true);lyr_SpectralRadiativeFluxWL699uW_59.setVisible(true);lyr_SpectralRadiativeFluxWL660uW_60.setVisible(true);lyr_SpectralRadiativeFluxWL656uW_61.setVisible(true);lyr_SpectralRadiativeFluxWL635uW_62.setVisible(true);lyr_SpectralRadiativeFluxWL628uW_63.setVisible(true);lyr_SpectralRadiativeFluxWL590uW_64.setVisible(true);lyr_SpectralRadiativeFluxWL554uW_65.setVisible(true);lyr_SpectralRadiativeFluxWL550uW_66.setVisible(true);lyr_SpectralRadiativeFluxWL524uW_67.setVisible(true);lyr_SpectralRadiativeFluxWL510uW_68.setVisible(true);lyr_SpectralRadiativeFluxWL490uW_69.setVisible(true);lyr_SpectralRadiativeFluxWL470uW_70.setVisible(true);lyr_SpectralRadiativeFluxWL448uW_71.setVisible(true);lyr_SpectralRadiativeFluxWL440uW_72.setVisible(true);lyr_SpectralRadiativeFluxWL410uW_73.setVisible(true);lyr_SpectralRadiativeFluxWL398uW_74.setVisible(true);lyr_SpectralPhotonFluxWL699umol_75.setVisible(true);lyr_SpectralPhotonFluxWL656umol_76.setVisible(true);lyr_SpectralPhotonFluxWL628umol_77.setVisible(true);lyr_SpectralPhotonFluxWL590umol_78.setVisible(true);lyr_SpectralPhotonFluxWL554umol_79.setVisible(true);lyr_SpectralPhotonFluxWL524umol_80.setVisible(true);lyr_SpectralPhotonFluxWL470umol_81.setVisible(true);lyr_SpectralPhotonFluxWL448umol_82.setVisible(true);lyr_SpectralPhotonFluxWL398umol_83.setVisible(true);lyr_SpecificConductivity_84.setVisible(true);lyr_Silver_85.setVisible(true);lyr_SecchiDepth_86.setVisible(true);lyr_Salinity_87.setVisible(true);lyr_ROLL_88.setVisible(true);lyr_ReactiveSilica_89.setVisible(true);lyr_PyrophytinA_90.setVisible(true);lyr_PyrophideA_91.setVisible(true);lyr_Prochlorococcus_92.setVisible(true);lyr_PRESSURE_SENSOR_DEPTH_93.setVisible(true);lyr_PRESSURE_94.setVisible(true);lyr_PresentWeatherinCode_95.setVisible(true);lyr_Pras_96.setVisible(true);lyr_PosidoniaSinuosaTotalBiomass_97.setVisible(true);lyr_PosidoniaSinuosaDryWeight_98.setVisible(true);lyr_PosidoniaSinuosaCount_99.setVisible(true);lyr_PosidoniaSinuosaBelowGroundBiomass_100.setVisible(true);lyr_PosidoniaSinuosaAboveGroundBiomass_101.setVisible(true);lyr_Pitch_102.setVisible(true);lyr_PicoplanktonFraction_103.setVisible(true);lyr_Picoeukaryotes_104.setVisible(true);lyr_PhytinB_105.setVisible(true);lyr_PhytinA_106.setVisible(true);lyr_PhideA_107.setVisible(true);lyr_Phaeophytina_108.setVisible(true);lyr_pH_109.setVisible(true);lyr_Perid_110.setVisible(true);lyr_ParticulateOrganicCarbon_111.setVisible(true);lyr_OrganicPhosphorus_112.setVisible(true);lyr_OrganicNitrogen_113.setVisible(true);lyr_O2Saturation_114.setVisible(true);lyr_Nitrite_115.setVisible(true);lyr_Nitrate_116.setVisible(true);lyr_Nickel_117.setVisible(true);lyr_Neo_118.setVisible(true);lyr_MgDvp_119.setVisible(true);lyr_mpXylene_120.setVisible(true);lyr_Lyco_121.setVisible(true);lyr_Lut_122.setVisible(true);lyr_LoggerTemperature_123.setVisible(true);lyr_LightAttenuationCoefficient_124.setVisible(true);lyr_Lead_125.setVisible(true);lyr_Ketohexfuco_126.setVisible(true);lyr_Hexfuco_127.setVisible(true);lyr_HEADING_128.setVisible(true);lyr_Gyro_129.setVisible(true);lyr_Fuco_130.setVisible(true);lyr_Fluorescence_131.setVisible(true);lyr_FilteredCopper_132.setVisible(true);lyr_FilterableReactivePhosphate_133.setVisible(true);lyr_Ethylbenzene_134.setVisible(true);lyr_Echin_135.setVisible(true);lyr_DvCphlB_136.setVisible(true);lyr_DvCphlBCphlB_137.setVisible(true);lyr_DvCphlA_138.setVisible(true);lyr_DvCphlACphlA_139.setVisible(true);lyr_DissolvedOxygen_140.setVisible(true);lyr_DissolvedOrganicNitrogen_141.setVisible(true);lyr_DissolvedOrganicCarbon_142.setVisible(true);lyr_DissolvedInorganicCarbon_143.setVisible(true);lyr_Discharge_144.setVisible(true);lyr_Dischargemin_145.setVisible(true);lyr_Dischargemax_146.setVisible(true);lyr_Dino_147.setVisible(true);lyr_Diato_148.setVisible(true);lyr_Diadino_149.setVisible(true);lyr_Diadchr_150.setVisible(true);lyr_Depth_151.setVisible(true);lyr_Density_152.setVisible(true);lyr_DENSITYANOMALY_153.setVisible(true);lyr_DailySurfacePhotosyntheticallyActivePhotonFlux_154.setVisible(true);lyr_DailySolarIrradiance_155.setVisible(true);lyr_DailyPhotosyntheticallyActivePhotonFlux_156.setVisible(true);lyr_DailyDischarge_157.setVisible(true);lyr_CphlideA_158.setVisible(true);lyr_CphlC3_159.setVisible(true);lyr_CphlC2_160.setVisible(true);lyr_CphlC1_161.setVisible(true);lyr_CphlB_162.setVisible(true);lyr_CphlA_163.setVisible(true);lyr_Copper_164.setVisible(true);lyr_CloudCover_165.setVisible(true);lyr_Chlorophyllc_166.setVisible(true);lyr_Chlorophyllb_167.setVisible(true);lyr_Chlorophylla_168.setVisible(true);lyr_ChlorophyllSampleVolume_169.setVisible(true);lyr_CeilometerSkyClearFlag_170.setVisible(true);lyr_Cantha_171.setVisible(true);lyr_Butfuco_172.setVisible(true);lyr_BottomDepth_173.setVisible(true);lyr_Benzene_174.setVisible(true);lyr_Asta_175.setVisible(true);lyr_Anth_176.setVisible(true);lyr_AMPLITUDE3_177.setVisible(true);lyr_AMPLITUDE2_178.setVisible(true);lyr_AMPLITUDE1_179.setVisible(true);lyr_Ammonium_180.setVisible(true);lyr_AlphaBetaCar_181.setVisible(true);lyr_Allo_182.setVisible(true);lyr_AirTemperature_183.setVisible(true);lyr_ACCELERATIONZ_184.setVisible(true);lyr_ACCELERATIONY_185.setVisible(true);lyr_ACCELERATIONX_186.setVisible(true);
var layersList = [group_Basemaps,group_Variables];
lyr_MLAUZones_2.set('fieldAliases', {'Unit_Name': 'Unit_Name', 'Name': 'Name', 'Plot_Order': 'Plot_Order', 'BP_Region': 'BP_Region', 'BP_Order': 'BP_Order', });
lyr_Zinc_3.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Zea_4.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Xylene_5.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WindSpeed_6.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WindSpeedmin_7.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WindSpeedmax_8.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WindDirection_9.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WindDirectionstd_10.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WCUR_11.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WaterSurfaceHeight_12.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Viola_13.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_VCURnorthwardvelocity_14.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_UCUReastwardvelocity_15.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Turbidity_16.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TSSorganic_17.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TSSinorganic_18.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TRHgtC34C40_19.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TRHgtC16C34_20.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TRHgtC10C16_21.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TRHC6C10_22.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TPHC6C9_23.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TPHC29C36_24.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TPHC15C28_25.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TPHC10C14_26.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TotalTRHs_27.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TotalTPH_28.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TotalSuspendedSolids_29.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TotalPhosphorus_30.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TotalNitrogen_31.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TotalKjeldahlNitrogen_32.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TotalBTEX_33.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_TotalAlkalinity_34.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Toluene_35.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Tilt_36.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Temperature_37.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Synechococcus_38.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SurfaceSolarIrradiance_39.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SurfaceSolarIrradiancestd_40.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SurfaceSolarIrradiancemin_41.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SurfaceSolarIrradiancemax_42.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SurfacePhotosyntheticallyActivePhotonFlux_43.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SurfacePhotosyntheticallyActivePhotonFluxstd_44.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SurfacePhotosyntheticallyActivePhotonFluxmin_45.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SurfacePhotosyntheticallyActivePhotonFluxmax_46.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_StationLevelPressure_47.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_StationLevelPressurestd_48.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_StationLevelPressuremin_49.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_StationLevelPressuremax_50.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_StageHeight_51.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_StageHeightCTF_52.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_StageHeightCTFmin_53.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_StageHeightCTFmax_54.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_StageHeightmin_55.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_StageHeightmax_56.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SPEED_OF_SOUND_57.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL700uW_58.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL699uW_59.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL660uW_60.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL656uW_61.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL635uW_62.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL628uW_63.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL590uW_64.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL554uW_65.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL550uW_66.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL524uW_67.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL510uW_68.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL490uW_69.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL470uW_70.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL448uW_71.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL440uW_72.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL410uW_73.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralRadiativeFluxWL398uW_74.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralPhotonFluxWL699umol_75.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralPhotonFluxWL656umol_76.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralPhotonFluxWL628umol_77.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralPhotonFluxWL590umol_78.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralPhotonFluxWL554umol_79.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralPhotonFluxWL524umol_80.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralPhotonFluxWL470umol_81.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralPhotonFluxWL448umol_82.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpectralPhotonFluxWL398umol_83.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SpecificConductivity_84.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Silver_85.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_SecchiDepth_86.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Salinity_87.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_ROLL_88.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_ReactiveSilica_89.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PyrophytinA_90.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PyrophideA_91.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Prochlorococcus_92.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PRESSURE_SENSOR_DEPTH_93.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PRESSURE_94.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PresentWeatherinCode_95.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Pras_96.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PosidoniaSinuosaTotalBiomass_97.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PosidoniaSinuosaDryWeight_98.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PosidoniaSinuosaCount_99.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PosidoniaSinuosaBelowGroundBiomass_100.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PosidoniaSinuosaAboveGroundBiomass_101.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Pitch_102.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PicoplanktonFraction_103.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Picoeukaryotes_104.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PhytinB_105.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PhytinA_106.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_PhideA_107.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Phaeophytina_108.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_pH_109.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Perid_110.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_ParticulateOrganicCarbon_111.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_OrganicPhosphorus_112.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_OrganicNitrogen_113.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_O2Saturation_114.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Nitrite_115.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Nitrate_116.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Nickel_117.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Neo_118.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_MgDvp_119.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_mpXylene_120.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Lyco_121.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Lut_122.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_LoggerTemperature_123.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_LightAttenuationCoefficient_124.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Lead_125.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Ketohexfuco_126.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Hexfuco_127.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_HEADING_128.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Gyro_129.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Fuco_130.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Fluorescence_131.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_FilteredCopper_132.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_FilterableReactivePhosphate_133.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Ethylbenzene_134.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Echin_135.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DvCphlB_136.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DvCphlBCphlB_137.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DvCphlA_138.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DvCphlACphlA_139.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DissolvedOxygen_140.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DissolvedOrganicNitrogen_141.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DissolvedOrganicCarbon_142.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DissolvedInorganicCarbon_143.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Discharge_144.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Dischargemin_145.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Dischargemax_146.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Dino_147.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Diato_148.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Diadino_149.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Diadchr_150.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Depth_151.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Density_152.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DENSITYANOMALY_153.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DailySurfacePhotosyntheticallyActivePhotonFlux_154.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DailySolarIrradiance_155.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DailyPhotosyntheticallyActivePhotonFlux_156.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DailyDischarge_157.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_CphlideA_158.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_CphlC3_159.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_CphlC2_160.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_CphlC1_161.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_CphlB_162.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_CphlA_163.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Copper_164.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_CloudCover_165.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Chlorophyllc_166.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Chlorophyllb_167.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Chlorophylla_168.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_ChlorophyllSampleVolume_169.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_CeilometerSkyClearFlag_170.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Cantha_171.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Butfuco_172.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_BottomDepth_173.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Benzene_174.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Asta_175.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Anth_176.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_AMPLITUDE3_177.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_AMPLITUDE2_178.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_AMPLITUDE1_179.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Ammonium_180.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_AlphaBetaCar_181.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_Allo_182.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_AirTemperature_183.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_ACCELERATIONZ_184.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_ACCELERATIONY_185.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_ACCELERATIONX_186.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_MLAUZones_2.set('fieldImages', {'Unit_Name': 'TextEdit', 'Name': 'TextEdit', 'Plot_Order': 'Range', 'BP_Region': 'TextEdit', 'BP_Order': 'Range', });
lyr_Zinc_3.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Zea_4.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Xylene_5.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WindSpeed_6.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WindSpeedmin_7.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WindSpeedmax_8.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WindDirection_9.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WindDirectionstd_10.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WCUR_11.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WaterSurfaceHeight_12.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Viola_13.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_VCURnorthwardvelocity_14.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_UCUReastwardvelocity_15.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Turbidity_16.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TSSorganic_17.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TSSinorganic_18.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TRHgtC34C40_19.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TRHgtC16C34_20.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TRHgtC10C16_21.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TRHC6C10_22.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TPHC6C9_23.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TPHC29C36_24.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TPHC15C28_25.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TPHC10C14_26.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TotalTRHs_27.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TotalTPH_28.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TotalSuspendedSolids_29.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TotalPhosphorus_30.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TotalNitrogen_31.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TotalKjeldahlNitrogen_32.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TotalBTEX_33.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_TotalAlkalinity_34.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Toluene_35.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Tilt_36.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Temperature_37.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Synechococcus_38.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SurfaceSolarIrradiance_39.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SurfaceSolarIrradiancestd_40.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SurfaceSolarIrradiancemin_41.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SurfaceSolarIrradiancemax_42.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SurfacePhotosyntheticallyActivePhotonFlux_43.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SurfacePhotosyntheticallyActivePhotonFluxstd_44.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SurfacePhotosyntheticallyActivePhotonFluxmin_45.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SurfacePhotosyntheticallyActivePhotonFluxmax_46.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_StationLevelPressure_47.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_StationLevelPressurestd_48.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_StationLevelPressuremin_49.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_StationLevelPressuremax_50.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_StageHeight_51.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_StageHeightCTF_52.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_StageHeightCTFmin_53.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_StageHeightCTFmax_54.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_StageHeightmin_55.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_StageHeightmax_56.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SPEED_OF_SOUND_57.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL700uW_58.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL699uW_59.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL660uW_60.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL656uW_61.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL635uW_62.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL628uW_63.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL590uW_64.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL554uW_65.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL550uW_66.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL524uW_67.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL510uW_68.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL490uW_69.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL470uW_70.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL448uW_71.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL440uW_72.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL410uW_73.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralRadiativeFluxWL398uW_74.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralPhotonFluxWL699umol_75.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralPhotonFluxWL656umol_76.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralPhotonFluxWL628umol_77.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralPhotonFluxWL590umol_78.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralPhotonFluxWL554umol_79.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralPhotonFluxWL524umol_80.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralPhotonFluxWL470umol_81.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralPhotonFluxWL448umol_82.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpectralPhotonFluxWL398umol_83.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SpecificConductivity_84.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Silver_85.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_SecchiDepth_86.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Salinity_87.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_ROLL_88.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_ReactiveSilica_89.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PyrophytinA_90.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PyrophideA_91.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Prochlorococcus_92.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PRESSURE_SENSOR_DEPTH_93.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PRESSURE_94.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PresentWeatherinCode_95.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Pras_96.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PosidoniaSinuosaTotalBiomass_97.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PosidoniaSinuosaDryWeight_98.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PosidoniaSinuosaCount_99.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PosidoniaSinuosaBelowGroundBiomass_100.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PosidoniaSinuosaAboveGroundBiomass_101.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Pitch_102.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PicoplanktonFraction_103.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Picoeukaryotes_104.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PhytinB_105.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PhytinA_106.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_PhideA_107.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Phaeophytina_108.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_pH_109.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Perid_110.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_ParticulateOrganicCarbon_111.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_OrganicPhosphorus_112.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_OrganicNitrogen_113.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_O2Saturation_114.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Nitrite_115.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Nitrate_116.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Nickel_117.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Neo_118.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_MgDvp_119.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_mpXylene_120.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Lyco_121.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Lut_122.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_LoggerTemperature_123.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_LightAttenuationCoefficient_124.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Lead_125.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Ketohexfuco_126.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Hexfuco_127.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_HEADING_128.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Gyro_129.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Fuco_130.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Fluorescence_131.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_FilteredCopper_132.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_FilterableReactivePhosphate_133.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Ethylbenzene_134.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Echin_135.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DvCphlB_136.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DvCphlBCphlB_137.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DvCphlA_138.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DvCphlACphlA_139.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DissolvedOxygen_140.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DissolvedOrganicNitrogen_141.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DissolvedOrganicCarbon_142.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DissolvedInorganicCarbon_143.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Discharge_144.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Dischargemin_145.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Dischargemax_146.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Dino_147.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Diato_148.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Diadino_149.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Diadchr_150.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Depth_151.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Density_152.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DENSITYANOMALY_153.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DailySurfacePhotosyntheticallyActivePhotonFlux_154.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DailySolarIrradiance_155.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DailyPhotosyntheticallyActivePhotonFlux_156.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DailyDischarge_157.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_CphlideA_158.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_CphlC3_159.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_CphlC2_160.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_CphlC1_161.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_CphlB_162.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_CphlA_163.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Copper_164.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_CloudCover_165.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Chlorophyllc_166.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Chlorophyllb_167.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Chlorophylla_168.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_ChlorophyllSampleVolume_169.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_CeilometerSkyClearFlag_170.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Cantha_171.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Butfuco_172.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_BottomDepth_173.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Benzene_174.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Asta_175.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Anth_176.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_AMPLITUDE3_177.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_AMPLITUDE2_178.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_AMPLITUDE1_179.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Ammonium_180.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_AlphaBetaCar_181.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_Allo_182.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_AirTemperature_183.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_ACCELERATIONZ_184.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_ACCELERATIONY_185.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_ACCELERATIONX_186.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_MLAUZones_2.set('fieldLabels', {});
lyr_Zinc_3.set('fieldLabels', {});
lyr_Zea_4.set('fieldLabels', {});
lyr_Xylene_5.set('fieldLabels', {});
lyr_WindSpeed_6.set('fieldLabels', {});
lyr_WindSpeedmin_7.set('fieldLabels', {});
lyr_WindSpeedmax_8.set('fieldLabels', {});
lyr_WindDirection_9.set('fieldLabels', {});
lyr_WindDirectionstd_10.set('fieldLabels', {});
lyr_WCUR_11.set('fieldLabels', {});
lyr_WaterSurfaceHeight_12.set('fieldLabels', {});
lyr_Viola_13.set('fieldLabels', {});
lyr_VCURnorthwardvelocity_14.set('fieldLabels', {});
lyr_UCUReastwardvelocity_15.set('fieldLabels', {});
lyr_Turbidity_16.set('fieldLabels', {});
lyr_TSSorganic_17.set('fieldLabels', {});
lyr_TSSinorganic_18.set('fieldLabels', {});
lyr_TRHgtC34C40_19.set('fieldLabels', {});
lyr_TRHgtC16C34_20.set('fieldLabels', {});
lyr_TRHgtC10C16_21.set('fieldLabels', {});
lyr_TRHC6C10_22.set('fieldLabels', {});
lyr_TPHC6C9_23.set('fieldLabels', {});
lyr_TPHC29C36_24.set('fieldLabels', {});
lyr_TPHC15C28_25.set('fieldLabels', {});
lyr_TPHC10C14_26.set('fieldLabels', {});
lyr_TotalTRHs_27.set('fieldLabels', {});
lyr_TotalTPH_28.set('fieldLabels', {});
lyr_TotalSuspendedSolids_29.set('fieldLabels', {});
lyr_TotalPhosphorus_30.set('fieldLabels', {});
lyr_TotalNitrogen_31.set('fieldLabels', {});
lyr_TotalKjeldahlNitrogen_32.set('fieldLabels', {});
lyr_TotalBTEX_33.set('fieldLabels', {});
lyr_TotalAlkalinity_34.set('fieldLabels', {});
lyr_Toluene_35.set('fieldLabels', {});
lyr_Tilt_36.set('fieldLabels', {});
lyr_Temperature_37.set('fieldLabels', {});
lyr_Synechococcus_38.set('fieldLabels', {});
lyr_SurfaceSolarIrradiance_39.set('fieldLabels', {});
lyr_SurfaceSolarIrradiancestd_40.set('fieldLabels', {});
lyr_SurfaceSolarIrradiancemin_41.set('fieldLabels', {});
lyr_SurfaceSolarIrradiancemax_42.set('fieldLabels', {});
lyr_SurfacePhotosyntheticallyActivePhotonFlux_43.set('fieldLabels', {});
lyr_SurfacePhotosyntheticallyActivePhotonFluxstd_44.set('fieldLabels', {});
lyr_SurfacePhotosyntheticallyActivePhotonFluxmin_45.set('fieldLabels', {});
lyr_SurfacePhotosyntheticallyActivePhotonFluxmax_46.set('fieldLabels', {});
lyr_StationLevelPressure_47.set('fieldLabels', {});
lyr_StationLevelPressurestd_48.set('fieldLabels', {});
lyr_StationLevelPressuremin_49.set('fieldLabels', {});
lyr_StationLevelPressuremax_50.set('fieldLabels', {});
lyr_StageHeight_51.set('fieldLabels', {});
lyr_StageHeightCTF_52.set('fieldLabels', {});
lyr_StageHeightCTFmin_53.set('fieldLabels', {});
lyr_StageHeightCTFmax_54.set('fieldLabels', {});
lyr_StageHeightmin_55.set('fieldLabels', {});
lyr_StageHeightmax_56.set('fieldLabels', {});
lyr_SPEED_OF_SOUND_57.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL700uW_58.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL699uW_59.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL660uW_60.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL656uW_61.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL635uW_62.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL628uW_63.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL590uW_64.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL554uW_65.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL550uW_66.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL524uW_67.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL510uW_68.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL490uW_69.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL470uW_70.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL448uW_71.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL440uW_72.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL410uW_73.set('fieldLabels', {});
lyr_SpectralRadiativeFluxWL398uW_74.set('fieldLabels', {});
lyr_SpectralPhotonFluxWL699umol_75.set('fieldLabels', {});
lyr_SpectralPhotonFluxWL656umol_76.set('fieldLabels', {});
lyr_SpectralPhotonFluxWL628umol_77.set('fieldLabels', {});
lyr_SpectralPhotonFluxWL590umol_78.set('fieldLabels', {});
lyr_SpectralPhotonFluxWL554umol_79.set('fieldLabels', {});
lyr_SpectralPhotonFluxWL524umol_80.set('fieldLabels', {});
lyr_SpectralPhotonFluxWL470umol_81.set('fieldLabels', {});
lyr_SpectralPhotonFluxWL448umol_82.set('fieldLabels', {});
lyr_SpectralPhotonFluxWL398umol_83.set('fieldLabels', {});
lyr_SpecificConductivity_84.set('fieldLabels', {});
lyr_Silver_85.set('fieldLabels', {});
lyr_SecchiDepth_86.set('fieldLabels', {});
lyr_Salinity_87.set('fieldLabels', {});
lyr_ROLL_88.set('fieldLabels', {});
lyr_ReactiveSilica_89.set('fieldLabels', {});
lyr_PyrophytinA_90.set('fieldLabels', {});
lyr_PyrophideA_91.set('fieldLabels', {});
lyr_Prochlorococcus_92.set('fieldLabels', {});
lyr_PRESSURE_SENSOR_DEPTH_93.set('fieldLabels', {});
lyr_PRESSURE_94.set('fieldLabels', {});
lyr_PresentWeatherinCode_95.set('fieldLabels', {});
lyr_Pras_96.set('fieldLabels', {});
lyr_PosidoniaSinuosaTotalBiomass_97.set('fieldLabels', {});
lyr_PosidoniaSinuosaDryWeight_98.set('fieldLabels', {});
lyr_PosidoniaSinuosaCount_99.set('fieldLabels', {});
lyr_PosidoniaSinuosaBelowGroundBiomass_100.set('fieldLabels', {});
lyr_PosidoniaSinuosaAboveGroundBiomass_101.set('fieldLabels', {});
lyr_Pitch_102.set('fieldLabels', {});
lyr_PicoplanktonFraction_103.set('fieldLabels', {});
lyr_Picoeukaryotes_104.set('fieldLabels', {});
lyr_PhytinB_105.set('fieldLabels', {});
lyr_PhytinA_106.set('fieldLabels', {});
lyr_PhideA_107.set('fieldLabels', {});
lyr_Phaeophytina_108.set('fieldLabels', {});
lyr_pH_109.set('fieldLabels', {});
lyr_Perid_110.set('fieldLabels', {});
lyr_ParticulateOrganicCarbon_111.set('fieldLabels', {});
lyr_OrganicPhosphorus_112.set('fieldLabels', {});
lyr_OrganicNitrogen_113.set('fieldLabels', {});
lyr_O2Saturation_114.set('fieldLabels', {});
lyr_Nitrite_115.set('fieldLabels', {});
lyr_Nitrate_116.set('fieldLabels', {});
lyr_Nickel_117.set('fieldLabels', {});
lyr_Neo_118.set('fieldLabels', {});
lyr_MgDvp_119.set('fieldLabels', {});
lyr_mpXylene_120.set('fieldLabels', {});
lyr_Lyco_121.set('fieldLabels', {});
lyr_Lut_122.set('fieldLabels', {});
lyr_LoggerTemperature_123.set('fieldLabels', {});
lyr_LightAttenuationCoefficient_124.set('fieldLabels', {});
lyr_Lead_125.set('fieldLabels', {});
lyr_Ketohexfuco_126.set('fieldLabels', {});
lyr_Hexfuco_127.set('fieldLabels', {});
lyr_HEADING_128.set('fieldLabels', {});
lyr_Gyro_129.set('fieldLabels', {});
lyr_Fuco_130.set('fieldLabels', {});
lyr_Fluorescence_131.set('fieldLabels', {});
lyr_FilteredCopper_132.set('fieldLabels', {});
lyr_FilterableReactivePhosphate_133.set('fieldLabels', {});
lyr_Ethylbenzene_134.set('fieldLabels', {});
lyr_Echin_135.set('fieldLabels', {});
lyr_DvCphlB_136.set('fieldLabels', {});
lyr_DvCphlBCphlB_137.set('fieldLabels', {});
lyr_DvCphlA_138.set('fieldLabels', {});
lyr_DvCphlACphlA_139.set('fieldLabels', {});
lyr_DissolvedOxygen_140.set('fieldLabels', {});
lyr_DissolvedOrganicNitrogen_141.set('fieldLabels', {});
lyr_DissolvedOrganicCarbon_142.set('fieldLabels', {});
lyr_DissolvedInorganicCarbon_143.set('fieldLabels', {});
lyr_Discharge_144.set('fieldLabels', {});
lyr_Dischargemin_145.set('fieldLabels', {});
lyr_Dischargemax_146.set('fieldLabels', {});
lyr_Dino_147.set('fieldLabels', {});
lyr_Diato_148.set('fieldLabels', {});
lyr_Diadino_149.set('fieldLabels', {});
lyr_Diadchr_150.set('fieldLabels', {});
lyr_Depth_151.set('fieldLabels', {});
lyr_Density_152.set('fieldLabels', {});
lyr_DENSITYANOMALY_153.set('fieldLabels', {});
lyr_DailySurfacePhotosyntheticallyActivePhotonFlux_154.set('fieldLabels', {});
lyr_DailySolarIrradiance_155.set('fieldLabels', {});
lyr_DailyPhotosyntheticallyActivePhotonFlux_156.set('fieldLabels', {});
lyr_DailyDischarge_157.set('fieldLabels', {});
lyr_CphlideA_158.set('fieldLabels', {});
lyr_CphlC3_159.set('fieldLabels', {});
lyr_CphlC2_160.set('fieldLabels', {});
lyr_CphlC1_161.set('fieldLabels', {});
lyr_CphlB_162.set('fieldLabels', {});
lyr_CphlA_163.set('fieldLabels', {});
lyr_Copper_164.set('fieldLabels', {});
lyr_CloudCover_165.set('fieldLabels', {});
lyr_Chlorophyllc_166.set('fieldLabels', {});
lyr_Chlorophyllb_167.set('fieldLabels', {});
lyr_Chlorophylla_168.set('fieldLabels', {});
lyr_ChlorophyllSampleVolume_169.set('fieldLabels', {});
lyr_CeilometerSkyClearFlag_170.set('fieldLabels', {});
lyr_Cantha_171.set('fieldLabels', {});
lyr_Butfuco_172.set('fieldLabels', {});
lyr_BottomDepth_173.set('fieldLabels', {});
lyr_Benzene_174.set('fieldLabels', {});
lyr_Asta_175.set('fieldLabels', {});
lyr_Anth_176.set('fieldLabels', {});
lyr_AMPLITUDE3_177.set('fieldLabels', {});
lyr_AMPLITUDE2_178.set('fieldLabels', {});
lyr_AMPLITUDE1_179.set('fieldLabels', {});
lyr_Ammonium_180.set('fieldLabels', {});
lyr_AlphaBetaCar_181.set('fieldLabels', {});
lyr_Allo_182.set('fieldLabels', {});
lyr_AirTemperature_183.set('fieldLabels', {});
lyr_ACCELERATIONZ_184.set('fieldLabels', {});
lyr_ACCELERATIONY_185.set('fieldLabels', {});
lyr_ACCELERATIONX_186.set('fieldLabels', {});
lyr_ACCELERATIONX_186.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});