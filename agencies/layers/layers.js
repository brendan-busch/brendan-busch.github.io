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
var format_WWMSP51WQ_3 = new ol.format.GeoJSON();
var features_WWMSP51WQ_3 = format_WWMSP51WQ_3.readFeatures(json_WWMSP51WQ_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWMSP51WQ_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWMSP51WQ_3.addFeatures(features_WWMSP51WQ_3);
var lyr_WWMSP51WQ_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWMSP51WQ_3, 
                style: style_WWMSP51WQ_3,
                interactive: true,
                title: '<img src="styles/legend/WWMSP51WQ_3.png" /> WWMSP5.1-WQ'
            });
var format_WWMSP51MET_4 = new ol.format.GeoJSON();
var features_WWMSP51MET_4 = format_WWMSP51MET_4.readFeatures(json_WWMSP51MET_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWMSP51MET_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWMSP51MET_4.addFeatures(features_WWMSP51MET_4);
var lyr_WWMSP51MET_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWMSP51MET_4, 
                style: style_WWMSP51MET_4,
                interactive: true,
                title: '<img src="styles/legend/WWMSP51MET_4.png" /> WWMSP5.1-MET'
            });
var format_WWMSP51AWAC_5 = new ol.format.GeoJSON();
var features_WWMSP51AWAC_5 = format_WWMSP51AWAC_5.readFeatures(json_WWMSP51AWAC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWMSP51AWAC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWMSP51AWAC_5.addFeatures(features_WWMSP51AWAC_5);
var lyr_WWMSP51AWAC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWMSP51AWAC_5, 
                style: style_WWMSP51AWAC_5,
                interactive: true,
                title: '<img src="styles/legend/WWMSP51AWAC_5.png" /> WWMSP5.1-AWAC'
            });
var format_WWMSP22Seagrass_6 = new ol.format.GeoJSON();
var features_WWMSP22Seagrass_6 = format_WWMSP22Seagrass_6.readFeatures(json_WWMSP22Seagrass_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWMSP22Seagrass_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWMSP22Seagrass_6.addFeatures(features_WWMSP22Seagrass_6);
var lyr_WWMSP22Seagrass_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWMSP22Seagrass_6, 
                style: style_WWMSP22Seagrass_6,
                interactive: true,
                title: '<img src="styles/legend/WWMSP22Seagrass_6.png" /> WWMSP2.2-Seagrass'
            });
var format_WWMSP22Light_7 = new ol.format.GeoJSON();
var features_WWMSP22Light_7 = format_WWMSP22Light_7.readFeatures(json_WWMSP22Light_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWMSP22Light_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWMSP22Light_7.addFeatures(features_WWMSP22Light_7);
var lyr_WWMSP22Light_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWMSP22Light_7, 
                style: style_WWMSP22Light_7,
                interactive: true,
                title: '<img src="styles/legend/WWMSP22Light_7.png" /> WWMSP2.2-Light'
            });
var format_WCWAPSDPBMT349_8 = new ol.format.GeoJSON();
var features_WCWAPSDPBMT349_8 = format_WCWAPSDPBMT349_8.readFeatures(json_WCWAPSDPBMT349_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WCWAPSDPBMT349_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WCWAPSDPBMT349_8.addFeatures(features_WCWAPSDPBMT349_8);
var lyr_WCWAPSDPBMT349_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WCWAPSDPBMT349_8, 
                style: style_WCWAPSDPBMT349_8,
                interactive: true,
                title: '<img src="styles/legend/WCWAPSDPBMT349_8.png" /> WCWA-PSDP-BMT349'
            });
var format_WCWAPSDP12_9 = new ol.format.GeoJSON();
var features_WCWAPSDP12_9 = format_WCWAPSDP12_9.readFeatures(json_WCWAPSDP12_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WCWAPSDP12_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WCWAPSDP12_9.addFeatures(features_WCWAPSDP12_9);
var lyr_WCWAPSDP12_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WCWAPSDP12_9, 
                style: style_WCWAPSDP12_9,
                interactive: true,
                title: '<img src="styles/legend/WCWAPSDP12_9.png" /> WCWA-PSDP-1.2'
            });
var format_WCBMT_10 = new ol.format.GeoJSON();
var features_WCBMT_10 = format_WCBMT_10.readFeatures(json_WCBMT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WCBMT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WCBMT_10.addFeatures(features_WCBMT_10);
var lyr_WCBMT_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WCBMT_10, 
                style: style_WCBMT_10,
                interactive: true,
                title: '<img src="styles/legend/WCBMT_10.png" /> WC-BMT'
            });
var format_IMOSBGC_11 = new ol.format.GeoJSON();
var features_IMOSBGC_11 = format_IMOSBGC_11.readFeatures(json_IMOSBGC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMOSBGC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOSBGC_11.addFeatures(features_IMOSBGC_11);
var lyr_IMOSBGC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IMOSBGC_11, 
                style: style_IMOSBGC_11,
                interactive: true,
                title: '<img src="styles/legend/IMOSBGC_11.png" /> IMOS-BGC'
            });
var format_IMOSANMNCTD_12 = new ol.format.GeoJSON();
var features_IMOSANMNCTD_12 = format_IMOSANMNCTD_12.readFeatures(json_IMOSANMNCTD_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMOSANMNCTD_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOSANMNCTD_12.addFeatures(features_IMOSANMNCTD_12);
var lyr_IMOSANMNCTD_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IMOSANMNCTD_12, 
                style: style_IMOSANMNCTD_12,
                interactive: true,
                title: '<img src="styles/legend/IMOSANMNCTD_12.png" /> IMOS-ANMN-CTD'
            });
var format_IMOSANMNADCP_13 = new ol.format.GeoJSON();
var features_IMOSANMNADCP_13 = format_IMOSANMNADCP_13.readFeatures(json_IMOSANMNADCP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMOSANMNADCP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOSANMNADCP_13.addFeatures(features_IMOSANMNADCP_13);
var lyr_IMOSANMNADCP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IMOSANMNADCP_13, 
                style: style_IMOSANMNADCP_13,
                interactive: true,
                title: '<img src="styles/legend/IMOSANMNADCP_13.png" /> IMOS-ANMN-ADCP'
            });
var format_FPAMQMP_14 = new ol.format.GeoJSON();
var features_FPAMQMP_14 = format_FPAMQMP_14.readFeatures(json_FPAMQMP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPAMQMP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPAMQMP_14.addFeatures(features_FPAMQMP_14);
var lyr_FPAMQMP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPAMQMP_14, 
                style: style_FPAMQMP_14,
                interactive: true,
                title: '<img src="styles/legend/FPAMQMP_14.png" /> FPA-MQMP'
            });
var format_DWERSWANEST_15 = new ol.format.GeoJSON();
var features_DWERSWANEST_15 = format_DWERSWANEST_15.readFeatures(json_DWERSWANEST_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERSWANEST_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERSWANEST_15.addFeatures(features_DWERSWANEST_15);
var lyr_DWERSWANEST_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERSWANEST_15, 
                style: style_DWERSWANEST_15,
                interactive: true,
                title: '<img src="styles/legend/DWERSWANEST_15.png" /> DWER-SWANEST'
            });
var format_DWERSWANCATCH_16 = new ol.format.GeoJSON();
var features_DWERSWANCATCH_16 = format_DWERSWANCATCH_16.readFeatures(json_DWERSWANCATCH_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERSWANCATCH_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERSWANCATCH_16.addFeatures(features_DWERSWANCATCH_16);
var lyr_DWERSWANCATCH_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERSWANCATCH_16, 
                style: style_DWERSWANCATCH_16,
                interactive: true,
                title: '<img src="styles/legend/DWERSWANCATCH_16.png" /> DWER-SWANCATCH'
            });
var format_DWERPHESTREACH_17 = new ol.format.GeoJSON();
var features_DWERPHESTREACH_17 = format_DWERPHESTREACH_17.readFeatures(json_DWERPHESTREACH_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERPHESTREACH_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERPHESTREACH_17.addFeatures(features_DWERPHESTREACH_17);
var lyr_DWERPHESTREACH_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERPHESTREACH_17, 
                style: style_DWERPHESTREACH_17,
                interactive: true,
                title: '<img src="styles/legend/DWERPHESTREACH_17.png" /> DWER-PHESTREACH'
            });
var format_DWERMURHAR_18 = new ol.format.GeoJSON();
var features_DWERMURHAR_18 = format_DWERMURHAR_18.readFeatures(json_DWERMURHAR_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERMURHAR_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERMURHAR_18.addFeatures(features_DWERMURHAR_18);
var lyr_DWERMURHAR_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERMURHAR_18, 
                style: style_DWERMURHAR_18,
                interactive: true,
                title: '<img src="styles/legend/DWERMURHAR_18.png" /> DWER-MURHAR'
            });
var format_DWERCSMWQ_19 = new ol.format.GeoJSON();
var features_DWERCSMWQ_19 = format_DWERCSMWQ_19.readFeatures(json_DWERCSMWQ_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERCSMWQ_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERCSMWQ_19.addFeatures(features_DWERCSMWQ_19);
var lyr_DWERCSMWQ_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERCSMWQ_19, 
                style: style_DWERCSMWQ_19,
                interactive: true,
                title: '<img src="styles/legend/DWERCSMWQ_19.png" /> DWER-CSMWQ'
            });
var format_DWERCSMOORING_20 = new ol.format.GeoJSON();
var features_DWERCSMOORING_20 = format_DWERCSMOORING_20.readFeatures(json_DWERCSMOORING_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERCSMOORING_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERCSMOORING_20.addFeatures(features_DWERCSMOORING_20);
var lyr_DWERCSMOORING_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERCSMOORING_20, 
                style: style_DWERCSMOORING_20,
                interactive: true,
                title: '<img src="styles/legend/DWERCSMOORING_20.png" /> DWER-CSMOORING'
            });
var format_DWERCANEST_21 = new ol.format.GeoJSON();
var features_DWERCANEST_21 = format_DWERCANEST_21.readFeatures(json_DWERCANEST_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERCANEST_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERCANEST_21.addFeatures(features_DWERCANEST_21);
var lyr_DWERCANEST_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERCANEST_21, 
                style: style_DWERCANEST_21,
                interactive: true,
                title: '<img src="styles/legend/DWERCANEST_21.png" /> DWER-CANEST'
            });
var format_DPIRDCRP_22 = new ol.format.GeoJSON();
var features_DPIRDCRP_22 = format_DPIRDCRP_22.readFeatures(json_DPIRDCRP_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPIRDCRP_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPIRDCRP_22.addFeatures(features_DPIRDCRP_22);
var lyr_DPIRDCRP_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DPIRDCRP_22, 
                style: style_DPIRDCRP_22,
                interactive: true,
                title: '<img src="styles/legend/DPIRDCRP_22.png" /> DPIRD-CRP'
            });
var format_DOTTIDE_23 = new ol.format.GeoJSON();
var features_DOTTIDE_23 = format_DOTTIDE_23.readFeatures(json_DOTTIDE_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DOTTIDE_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOTTIDE_23.addFeatures(features_DOTTIDE_23);
var lyr_DOTTIDE_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DOTTIDE_23, 
                style: style_DOTTIDE_23,
                interactive: true,
                title: '<img src="styles/legend/DOTTIDE_23.png" /> DOT-TIDE'
            });
var format_CSMCWQ_24 = new ol.format.GeoJSON();
var features_CSMCWQ_24 = format_CSMCWQ_24.readFeatures(json_CSMCWQ_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CSMCWQ_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CSMCWQ_24.addFeatures(features_CSMCWQ_24);
var lyr_CSMCWQ_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CSMCWQ_24, 
                style: style_CSMCWQ_24,
                interactive: true,
                title: '<img src="styles/legend/CSMCWQ_24.png" /> CSMC-WQ'
            });
var format_BOMIDY_25 = new ol.format.GeoJSON();
var features_BOMIDY_25 = format_BOMIDY_25.readFeatures(json_BOMIDY_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOMIDY_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOMIDY_25.addFeatures(features_BOMIDY_25);
var lyr_BOMIDY_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOMIDY_25, 
                style: style_BOMIDY_25,
                interactive: true,
                title: '<img src="styles/legend/BOMIDY_25.png" /> BOM-IDY'
            });
var group_DataAgency = new ol.layer.Group({
                                layers: [lyr_WWMSP51WQ_3,lyr_WWMSP51MET_4,lyr_WWMSP51AWAC_5,lyr_WWMSP22Seagrass_6,lyr_WWMSP22Light_7,lyr_WCWAPSDPBMT349_8,lyr_WCWAPSDP12_9,lyr_WCBMT_10,lyr_IMOSBGC_11,lyr_IMOSANMNCTD_12,lyr_IMOSANMNADCP_13,lyr_FPAMQMP_14,lyr_DWERSWANEST_15,lyr_DWERSWANCATCH_16,lyr_DWERPHESTREACH_17,lyr_DWERMURHAR_18,lyr_DWERCSMWQ_19,lyr_DWERCSMOORING_20,lyr_DWERCANEST_21,lyr_DPIRDCRP_22,lyr_DOTTIDE_23,lyr_CSMCWQ_24,lyr_BOMIDY_25,],
                                title: "Data Agency"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_ESRIGraylight_1,lyr_MLAUZones_2,],
                                title: "Basemaps"});

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRIGraylight_1.setVisible(true);lyr_MLAUZones_2.setVisible(true);lyr_WWMSP51WQ_3.setVisible(true);lyr_WWMSP51MET_4.setVisible(true);lyr_WWMSP51AWAC_5.setVisible(true);lyr_WWMSP22Seagrass_6.setVisible(true);lyr_WWMSP22Light_7.setVisible(true);lyr_WCWAPSDPBMT349_8.setVisible(true);lyr_WCWAPSDP12_9.setVisible(true);lyr_WCBMT_10.setVisible(true);lyr_IMOSBGC_11.setVisible(true);lyr_IMOSANMNCTD_12.setVisible(true);lyr_IMOSANMNADCP_13.setVisible(true);lyr_FPAMQMP_14.setVisible(true);lyr_DWERSWANEST_15.setVisible(true);lyr_DWERSWANCATCH_16.setVisible(true);lyr_DWERPHESTREACH_17.setVisible(true);lyr_DWERMURHAR_18.setVisible(true);lyr_DWERCSMWQ_19.setVisible(true);lyr_DWERCSMOORING_20.setVisible(true);lyr_DWERCANEST_21.setVisible(true);lyr_DPIRDCRP_22.setVisible(true);lyr_DOTTIDE_23.setVisible(true);lyr_CSMCWQ_24.setVisible(true);lyr_BOMIDY_25.setVisible(true);
var layersList = [group_Basemaps,group_DataAgency];
lyr_MLAUZones_2.set('fieldAliases', {'Unit_Name': 'Unit_Name', 'Name': 'Name', 'Plot_Order': 'Plot_Order', 'BP_Region': 'BP_Region', 'BP_Order': 'BP_Order', });
lyr_WWMSP51WQ_3.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WWMSP51MET_4.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WWMSP51AWAC_5.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WWMSP22Seagrass_6.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WWMSP22Light_7.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WCWAPSDPBMT349_8.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WCWAPSDP12_9.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WCBMT_10.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_IMOSBGC_11.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_IMOSANMNCTD_12.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_IMOSANMNADCP_13.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_FPAMQMP_14.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERSWANEST_15.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERSWANCATCH_16.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERPHESTREACH_17.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERMURHAR_18.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERCSMWQ_19.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERCSMOORING_20.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERCANEST_21.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DPIRDCRP_22.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DOTTIDE_23.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_CSMCWQ_24.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_BOMIDY_25.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_MLAUZones_2.set('fieldImages', {'Unit_Name': 'TextEdit', 'Name': 'TextEdit', 'Plot_Order': 'Range', 'BP_Region': 'TextEdit', 'BP_Order': 'Range', });
lyr_WWMSP51WQ_3.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WWMSP51MET_4.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WWMSP51AWAC_5.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WWMSP22Seagrass_6.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WWMSP22Light_7.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WCWAPSDPBMT349_8.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WCWAPSDP12_9.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WCBMT_10.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_IMOSBGC_11.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_IMOSANMNCTD_12.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_IMOSANMNADCP_13.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_FPAMQMP_14.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERSWANEST_15.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERSWANCATCH_16.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERPHESTREACH_17.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERMURHAR_18.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERCSMWQ_19.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERCSMOORING_20.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERCANEST_21.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DPIRDCRP_22.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DOTTIDE_23.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_CSMCWQ_24.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_BOMIDY_25.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_MLAUZones_2.set('fieldLabels', {});
lyr_WWMSP51WQ_3.set('fieldLabels', {});
lyr_WWMSP51MET_4.set('fieldLabels', {});
lyr_WWMSP51AWAC_5.set('fieldLabels', {});
lyr_WWMSP22Seagrass_6.set('fieldLabels', {});
lyr_WWMSP22Light_7.set('fieldLabels', {});
lyr_WCWAPSDPBMT349_8.set('fieldLabels', {});
lyr_WCWAPSDP12_9.set('fieldLabels', {});
lyr_WCBMT_10.set('fieldLabels', {});
lyr_IMOSBGC_11.set('fieldLabels', {});
lyr_IMOSANMNCTD_12.set('fieldLabels', {});
lyr_IMOSANMNADCP_13.set('fieldLabels', {});
lyr_FPAMQMP_14.set('fieldLabels', {});
lyr_DWERSWANEST_15.set('fieldLabels', {});
lyr_DWERSWANCATCH_16.set('fieldLabels', {});
lyr_DWERPHESTREACH_17.set('fieldLabels', {});
lyr_DWERMURHAR_18.set('fieldLabels', {});
lyr_DWERCSMWQ_19.set('fieldLabels', {});
lyr_DWERCSMOORING_20.set('fieldLabels', {});
lyr_DWERCANEST_21.set('fieldLabels', {});
lyr_DPIRDCRP_22.set('fieldLabels', {});
lyr_DOTTIDE_23.set('fieldLabels', {});
lyr_CSMCWQ_24.set('fieldLabels', {});
lyr_BOMIDY_25.set('fieldLabels', {});
lyr_BOMIDY_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});