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
var format_IMSOSRS_L3S_11 = new ol.format.GeoJSON();
var features_IMSOSRS_L3S_11 = format_IMSOSRS_L3S_11.readFeatures(json_IMSOSRS_L3S_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMSOSRS_L3S_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMSOSRS_L3S_11.addFeatures(features_IMSOSRS_L3S_11);
var lyr_IMSOSRS_L3S_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IMSOSRS_L3S_11, 
                style: style_IMSOSRS_L3S_11,
                interactive: true,
                title: '<img src="styles/legend/IMSOSRS_L3S_11.png" /> IMSO-SRS_L3S'
            });
var format_IMSOSRSMODIS_12 = new ol.format.GeoJSON();
var features_IMSOSRSMODIS_12 = format_IMSOSRSMODIS_12.readFeatures(json_IMSOSRSMODIS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMSOSRSMODIS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMSOSRSMODIS_12.addFeatures(features_IMSOSRSMODIS_12);
var lyr_IMSOSRSMODIS_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IMSOSRSMODIS_12, 
                style: style_IMSOSRSMODIS_12,
                interactive: true,
                title: '<img src="styles/legend/IMSOSRSMODIS_12.png" /> IMSO-SRS-MODIS'
            });
var format_IMOSBGC_13 = new ol.format.GeoJSON();
var features_IMOSBGC_13 = format_IMOSBGC_13.readFeatures(json_IMOSBGC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMOSBGC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOSBGC_13.addFeatures(features_IMOSBGC_13);
var lyr_IMOSBGC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IMOSBGC_13, 
                style: style_IMOSBGC_13,
                interactive: true,
                title: '<img src="styles/legend/IMOSBGC_13.png" /> IMOS-BGC'
            });
var format_IMOSANMNCTD_14 = new ol.format.GeoJSON();
var features_IMOSANMNCTD_14 = format_IMOSANMNCTD_14.readFeatures(json_IMOSANMNCTD_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMOSANMNCTD_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOSANMNCTD_14.addFeatures(features_IMOSANMNCTD_14);
var lyr_IMOSANMNCTD_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IMOSANMNCTD_14, 
                style: style_IMOSANMNCTD_14,
                interactive: true,
                title: '<img src="styles/legend/IMOSANMNCTD_14.png" /> IMOS-ANMN-CTD'
            });
var format_IMOSANMNADCP_15 = new ol.format.GeoJSON();
var features_IMOSANMNADCP_15 = format_IMOSANMNADCP_15.readFeatures(json_IMOSANMNADCP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMOSANMNADCP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOSANMNADCP_15.addFeatures(features_IMOSANMNADCP_15);
var lyr_IMOSANMNADCP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IMOSANMNADCP_15, 
                style: style_IMOSANMNADCP_15,
                interactive: true,
                title: '<img src="styles/legend/IMOSANMNADCP_15.png" /> IMOS-ANMN-ADCP'
            });
var format_FPAMQMP_16 = new ol.format.GeoJSON();
var features_FPAMQMP_16 = format_FPAMQMP_16.readFeatures(json_FPAMQMP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPAMQMP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPAMQMP_16.addFeatures(features_FPAMQMP_16);
var lyr_FPAMQMP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPAMQMP_16, 
                style: style_FPAMQMP_16,
                interactive: true,
                title: '<img src="styles/legend/FPAMQMP_16.png" /> FPA-MQMP'
            });
var format_DWERSWANEST_17 = new ol.format.GeoJSON();
var features_DWERSWANEST_17 = format_DWERSWANEST_17.readFeatures(json_DWERSWANEST_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERSWANEST_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERSWANEST_17.addFeatures(features_DWERSWANEST_17);
var lyr_DWERSWANEST_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERSWANEST_17, 
                style: style_DWERSWANEST_17,
                interactive: true,
                title: '<img src="styles/legend/DWERSWANEST_17.png" /> DWER-SWANEST'
            });
var format_DWERSWANCATCH_18 = new ol.format.GeoJSON();
var features_DWERSWANCATCH_18 = format_DWERSWANCATCH_18.readFeatures(json_DWERSWANCATCH_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERSWANCATCH_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERSWANCATCH_18.addFeatures(features_DWERSWANCATCH_18);
var lyr_DWERSWANCATCH_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERSWANCATCH_18, 
                style: style_DWERSWANCATCH_18,
                interactive: true,
                title: '<img src="styles/legend/DWERSWANCATCH_18.png" /> DWER-SWANCATCH'
            });
var format_DWERPHESTREACH_19 = new ol.format.GeoJSON();
var features_DWERPHESTREACH_19 = format_DWERPHESTREACH_19.readFeatures(json_DWERPHESTREACH_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERPHESTREACH_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERPHESTREACH_19.addFeatures(features_DWERPHESTREACH_19);
var lyr_DWERPHESTREACH_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERPHESTREACH_19, 
                style: style_DWERPHESTREACH_19,
                interactive: true,
                title: '<img src="styles/legend/DWERPHESTREACH_19.png" /> DWER-PHESTREACH'
            });
var format_DWERMURHAR_20 = new ol.format.GeoJSON();
var features_DWERMURHAR_20 = format_DWERMURHAR_20.readFeatures(json_DWERMURHAR_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERMURHAR_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERMURHAR_20.addFeatures(features_DWERMURHAR_20);
var lyr_DWERMURHAR_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERMURHAR_20, 
                style: style_DWERMURHAR_20,
                interactive: true,
                title: '<img src="styles/legend/DWERMURHAR_20.png" /> DWER-MURHAR'
            });
var format_DWERCSMWQ_21 = new ol.format.GeoJSON();
var features_DWERCSMWQ_21 = format_DWERCSMWQ_21.readFeatures(json_DWERCSMWQ_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERCSMWQ_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERCSMWQ_21.addFeatures(features_DWERCSMWQ_21);
var lyr_DWERCSMWQ_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERCSMWQ_21, 
                style: style_DWERCSMWQ_21,
                interactive: true,
                title: '<img src="styles/legend/DWERCSMWQ_21.png" /> DWER-CSMWQ'
            });
var format_DWERCSMOORING_22 = new ol.format.GeoJSON();
var features_DWERCSMOORING_22 = format_DWERCSMOORING_22.readFeatures(json_DWERCSMOORING_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERCSMOORING_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERCSMOORING_22.addFeatures(features_DWERCSMOORING_22);
var lyr_DWERCSMOORING_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERCSMOORING_22, 
                style: style_DWERCSMOORING_22,
                interactive: true,
                title: '<img src="styles/legend/DWERCSMOORING_22.png" /> DWER-CSMOORING'
            });
var format_DWERCANEST_23 = new ol.format.GeoJSON();
var features_DWERCANEST_23 = format_DWERCANEST_23.readFeatures(json_DWERCANEST_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DWERCANEST_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DWERCANEST_23.addFeatures(features_DWERCANEST_23);
var lyr_DWERCANEST_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DWERCANEST_23, 
                style: style_DWERCANEST_23,
                interactive: true,
                title: '<img src="styles/legend/DWERCANEST_23.png" /> DWER-CANEST'
            });
var format_DPIRDCRP_24 = new ol.format.GeoJSON();
var features_DPIRDCRP_24 = format_DPIRDCRP_24.readFeatures(json_DPIRDCRP_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPIRDCRP_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPIRDCRP_24.addFeatures(features_DPIRDCRP_24);
var lyr_DPIRDCRP_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DPIRDCRP_24, 
                style: style_DPIRDCRP_24,
                interactive: true,
                title: '<img src="styles/legend/DPIRDCRP_24.png" /> DPIRD-CRP'
            });
var format_DOTTIDE_25 = new ol.format.GeoJSON();
var features_DOTTIDE_25 = format_DOTTIDE_25.readFeatures(json_DOTTIDE_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DOTTIDE_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOTTIDE_25.addFeatures(features_DOTTIDE_25);
var lyr_DOTTIDE_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DOTTIDE_25, 
                style: style_DOTTIDE_25,
                interactive: true,
                title: '<img src="styles/legend/DOTTIDE_25.png" /> DOT-TIDE'
            });
var format_CSMCWQ_26 = new ol.format.GeoJSON();
var features_CSMCWQ_26 = format_CSMCWQ_26.readFeatures(json_CSMCWQ_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CSMCWQ_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CSMCWQ_26.addFeatures(features_CSMCWQ_26);
var lyr_CSMCWQ_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CSMCWQ_26, 
                style: style_CSMCWQ_26,
                interactive: true,
                title: '<img src="styles/legend/CSMCWQ_26.png" /> CSMC-WQ'
            });
var format_BOMIDY_27 = new ol.format.GeoJSON();
var features_BOMIDY_27 = format_BOMIDY_27.readFeatures(json_BOMIDY_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOMIDY_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOMIDY_27.addFeatures(features_BOMIDY_27);
var lyr_BOMIDY_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOMIDY_27, 
                style: style_BOMIDY_27,
                interactive: true,
                title: '<img src="styles/legend/BOMIDY_27.png" /> BOM-IDY'
            });
var group_DataAgencies = new ol.layer.Group({
                                layers: [lyr_WWMSP51WQ_3,lyr_WWMSP51MET_4,lyr_WWMSP51AWAC_5,lyr_WWMSP22Seagrass_6,lyr_WWMSP22Light_7,lyr_WCWAPSDPBMT349_8,lyr_WCWAPSDP12_9,lyr_WCBMT_10,lyr_IMSOSRS_L3S_11,lyr_IMSOSRSMODIS_12,lyr_IMOSBGC_13,lyr_IMOSANMNCTD_14,lyr_IMOSANMNADCP_15,lyr_FPAMQMP_16,lyr_DWERSWANEST_17,lyr_DWERSWANCATCH_18,lyr_DWERPHESTREACH_19,lyr_DWERMURHAR_20,lyr_DWERCSMWQ_21,lyr_DWERCSMOORING_22,lyr_DWERCANEST_23,lyr_DPIRDCRP_24,lyr_DOTTIDE_25,lyr_CSMCWQ_26,lyr_BOMIDY_27,],
                                title: "Data Agencies"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_ESRIGraylight_1,lyr_MLAUZones_2,],
                                title: "Basemaps"});

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRIGraylight_1.setVisible(true);lyr_MLAUZones_2.setVisible(true);lyr_WWMSP51WQ_3.setVisible(true);lyr_WWMSP51MET_4.setVisible(true);lyr_WWMSP51AWAC_5.setVisible(true);lyr_WWMSP22Seagrass_6.setVisible(true);lyr_WWMSP22Light_7.setVisible(true);lyr_WCWAPSDPBMT349_8.setVisible(true);lyr_WCWAPSDP12_9.setVisible(true);lyr_WCBMT_10.setVisible(true);lyr_IMSOSRS_L3S_11.setVisible(true);lyr_IMSOSRSMODIS_12.setVisible(true);lyr_IMOSBGC_13.setVisible(true);lyr_IMOSANMNCTD_14.setVisible(true);lyr_IMOSANMNADCP_15.setVisible(true);lyr_FPAMQMP_16.setVisible(true);lyr_DWERSWANEST_17.setVisible(true);lyr_DWERSWANCATCH_18.setVisible(true);lyr_DWERPHESTREACH_19.setVisible(true);lyr_DWERMURHAR_20.setVisible(true);lyr_DWERCSMWQ_21.setVisible(true);lyr_DWERCSMOORING_22.setVisible(true);lyr_DWERCANEST_23.setVisible(true);lyr_DPIRDCRP_24.setVisible(true);lyr_DOTTIDE_25.setVisible(true);lyr_CSMCWQ_26.setVisible(true);lyr_BOMIDY_27.setVisible(true);
var layersList = [group_Basemaps,group_DataAgencies];
lyr_MLAUZones_2.set('fieldAliases', {'Unit_Name': 'Unit_Name', 'Name': 'Name', 'Plot_Order': 'Plot_Order', 'BP_Region': 'BP_Region', 'BP_Order': 'BP_Order', });
lyr_WWMSP51WQ_3.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WWMSP51MET_4.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WWMSP51AWAC_5.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WWMSP22Seagrass_6.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WWMSP22Light_7.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WCWAPSDPBMT349_8.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WCWAPSDP12_9.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_WCBMT_10.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_IMSOSRS_L3S_11.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_IMSOSRSMODIS_12.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_IMOSBGC_13.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_IMOSANMNCTD_14.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_IMOSANMNADCP_15.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_FPAMQMP_16.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERSWANEST_17.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERSWANCATCH_18.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERPHESTREACH_19.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERMURHAR_20.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERCSMWQ_21.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERCSMOORING_22.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DWERCANEST_23.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DPIRDCRP_24.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_DOTTIDE_25.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_CSMCWQ_26.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_BOMIDY_27.set('fieldAliases', {'Agency_Name': 'Agency_Name', 'Program_Name': 'Program_Name', 'Station_ID': 'Station_ID', 'Site_Description': 'Site_Description', 'Tag': 'Tag', 'mAHD': 'mAHD', 'Lat': 'Lat', 'Lon': 'Lon', 'Label': 'Label', });
lyr_MLAUZones_2.set('fieldImages', {'Unit_Name': 'TextEdit', 'Name': 'TextEdit', 'Plot_Order': 'Range', 'BP_Region': 'TextEdit', 'BP_Order': 'Range', });
lyr_WWMSP51WQ_3.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WWMSP51MET_4.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WWMSP51AWAC_5.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WWMSP22Seagrass_6.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WWMSP22Light_7.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WCWAPSDPBMT349_8.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WCWAPSDP12_9.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_WCBMT_10.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_IMSOSRS_L3S_11.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_IMSOSRSMODIS_12.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_IMOSBGC_13.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_IMOSANMNCTD_14.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_IMOSANMNADCP_15.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_FPAMQMP_16.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERSWANEST_17.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERSWANCATCH_18.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERPHESTREACH_19.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERMURHAR_20.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERCSMWQ_21.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERCSMOORING_22.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DWERCANEST_23.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DPIRDCRP_24.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_DOTTIDE_25.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_CSMCWQ_26.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_BOMIDY_27.set('fieldImages', {'Agency_Name': '', 'Program_Name': '', 'Station_ID': '', 'Site_Description': '', 'Tag': '', 'mAHD': '', 'Lat': '', 'Lon': '', 'Label': '', });
lyr_MLAUZones_2.set('fieldLabels', {});
lyr_WWMSP51WQ_3.set('fieldLabels', {});
lyr_WWMSP51MET_4.set('fieldLabels', {});
lyr_WWMSP51AWAC_5.set('fieldLabels', {});
lyr_WWMSP22Seagrass_6.set('fieldLabels', {});
lyr_WWMSP22Light_7.set('fieldLabels', {});
lyr_WCWAPSDPBMT349_8.set('fieldLabels', {});
lyr_WCWAPSDP12_9.set('fieldLabels', {});
lyr_WCBMT_10.set('fieldLabels', {});
lyr_IMSOSRS_L3S_11.set('fieldLabels', {});
lyr_IMSOSRSMODIS_12.set('fieldLabels', {});
lyr_IMOSBGC_13.set('fieldLabels', {});
lyr_IMOSANMNCTD_14.set('fieldLabels', {});
lyr_IMOSANMNADCP_15.set('fieldLabels', {});
lyr_FPAMQMP_16.set('fieldLabels', {});
lyr_DWERSWANEST_17.set('fieldLabels', {});
lyr_DWERSWANCATCH_18.set('fieldLabels', {});
lyr_DWERPHESTREACH_19.set('fieldLabels', {});
lyr_DWERMURHAR_20.set('fieldLabels', {});
lyr_DWERCSMWQ_21.set('fieldLabels', {});
lyr_DWERCSMOORING_22.set('fieldLabels', {});
lyr_DWERCANEST_23.set('fieldLabels', {});
lyr_DPIRDCRP_24.set('fieldLabels', {});
lyr_DOTTIDE_25.set('fieldLabels', {});
lyr_CSMCWQ_26.set('fieldLabels', {});
lyr_BOMIDY_27.set('fieldLabels', {});
lyr_BOMIDY_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});