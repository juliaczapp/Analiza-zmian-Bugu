var wms_layers = [];

var lyr_ortofotomapa_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'ortofotomapa',
                            opacity: 0.646000,
                            
                            
                          });
              wms_layers.push([lyr_ortofotomapa_0, 0]);
var format_siatka_19401990_1 = new ol.format.GeoJSON();
var features_siatka_19401990_1 = format_siatka_19401990_1.readFeatures(json_siatka_19401990_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_19401990_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_19401990_1.addFeatures(features_siatka_19401990_1);
var lyr_siatka_19401990_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_19401990_1, 
                style: style_siatka_19401990_1,
                popuplayertitle: 'siatka_1940-1990',
                interactive: true,
    title: 'siatka_1940-1990<br />\
    <img src="styles/legend/siatka_19401990_1_0.png" /> -100 - -60<br />\
    <img src="styles/legend/siatka_19401990_1_1.png" /> -60 - -20<br />\
    <img src="styles/legend/siatka_19401990_1_2.png" /> -20 - 0<br />\
    <img src="styles/legend/siatka_19401990_1_3.png" /> 0 - 20<br />\
    <img src="styles/legend/siatka_19401990_1_4.png" /> 20 - 60<br />\
    <img src="styles/legend/siatka_19401990_1_5.png" /> 60 - 100<br />'
        });
var format_siatka_19902024_2 = new ol.format.GeoJSON();
var features_siatka_19902024_2 = format_siatka_19902024_2.readFeatures(json_siatka_19902024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_19902024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_19902024_2.addFeatures(features_siatka_19902024_2);
var lyr_siatka_19902024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_19902024_2, 
                style: style_siatka_19902024_2,
                popuplayertitle: 'siatka_1990-2024',
                interactive: true,
    title: 'siatka_1990-2024<br />\
    <img src="styles/legend/siatka_19902024_2_0.png" /> -85 - -60<br />\
    <img src="styles/legend/siatka_19902024_2_1.png" /> -60 - -20<br />\
    <img src="styles/legend/siatka_19902024_2_2.png" /> -20 - 0<br />\
    <img src="styles/legend/siatka_19902024_2_3.png" /> 0 - 20<br />\
    <img src="styles/legend/siatka_19902024_2_4.png" /> 20 - 60<br />\
    <img src="styles/legend/siatka_19902024_2_5.png" /> 60 - 100<br />'
        });
var format_BUG_union_3 = new ol.format.GeoJSON();
var features_BUG_union_3 = format_BUG_union_3.readFeatures(json_BUG_union_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUG_union_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUG_union_3.addFeatures(features_BUG_union_3);
var lyr_BUG_union_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUG_union_3, 
                style: style_BUG_union_3,
                popuplayertitle: 'BUG_union',
                interactive: true,
                title: '<img src="styles/legend/BUG_union_3.png" /> BUG_union'
            });
var format_BUG_intersect_4 = new ol.format.GeoJSON();
var features_BUG_intersect_4 = format_BUG_intersect_4.readFeatures(json_BUG_intersect_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUG_intersect_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUG_intersect_4.addFeatures(features_BUG_intersect_4);
var lyr_BUG_intersect_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUG_intersect_4, 
                style: style_BUG_intersect_4,
                popuplayertitle: 'BUG_intersect',
                interactive: true,
                title: '<img src="styles/legend/BUG_intersect_4.png" /> BUG_intersect'
            });
var format_BUG_1940_5 = new ol.format.GeoJSON();
var features_BUG_1940_5 = format_BUG_1940_5.readFeatures(json_BUG_1940_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUG_1940_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUG_1940_5.addFeatures(features_BUG_1940_5);
var lyr_BUG_1940_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUG_1940_5, 
                style: style_BUG_1940_5,
                popuplayertitle: 'BUG_1940',
                interactive: true,
                title: '<img src="styles/legend/BUG_1940_5.png" /> BUG_1940'
            });
var format_BUG_1990_6 = new ol.format.GeoJSON();
var features_BUG_1990_6 = format_BUG_1990_6.readFeatures(json_BUG_1990_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUG_1990_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUG_1990_6.addFeatures(features_BUG_1990_6);
var lyr_BUG_1990_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUG_1990_6, 
                style: style_BUG_1990_6,
                popuplayertitle: 'BUG_1990',
                interactive: true,
                title: '<img src="styles/legend/BUG_1990_6.png" /> BUG_1990'
            });
var format_BUG_2024_7 = new ol.format.GeoJSON();
var features_BUG_2024_7 = format_BUG_2024_7.readFeatures(json_BUG_2024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUG_2024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUG_2024_7.addFeatures(features_BUG_2024_7);
var lyr_BUG_2024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUG_2024_7, 
                style: style_BUG_2024_7,
                popuplayertitle: 'BUG_2024',
                interactive: true,
                title: '<img src="styles/legend/BUG_2024_7.png" /> BUG_2024'
            });

lyr_ortofotomapa_0.setVisible(true);lyr_siatka_19401990_1.setVisible(true);lyr_siatka_19902024_2.setVisible(true);lyr_BUG_union_3.setVisible(true);lyr_BUG_intersect_4.setVisible(true);lyr_BUG_1940_5.setVisible(true);lyr_BUG_1990_6.setVisible(true);lyr_BUG_2024_7.setVisible(true);
var layersList = [lyr_ortofotomapa_0,lyr_siatka_19401990_1,lyr_siatka_19902024_2,lyr_BUG_union_3,lyr_BUG_intersect_4,lyr_BUG_1940_5,lyr_BUG_1990_6,lyr_BUG_2024_7];
lyr_siatka_19401990_1.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'roznica_40': 'roznica_40', 'roznica_90': 'roznica_90', });
lyr_siatka_19902024_2.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'roznica_40': 'roznica_40', 'roznica_90': 'roznica_90', });
lyr_BUG_union_3.set('fieldAliases', {'FID_BUG_20': 'FID_BUG_20', 'Id': 'Id', 'gridcode': 'gridcode', 'FID_BUG_19': 'FID_BUG_19', 'Id_1': 'Id_1', 'Shape_Leng': 'Shape_Leng', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID_12', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_BUG_intersect_4.set('fieldAliases', {'FID_BUG_19': 'FID_BUG_19', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'FID_BUG_20': 'FID_BUG_20', 'Id_12': 'Id_12', 'gridcode': 'gridcode', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_BUG_1940_5.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'obwod': 'obwod', });
lyr_BUG_1990_6.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'obwod': 'obwod', });
lyr_BUG_2024_7.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'obwod': 'obwod', });
lyr_siatka_19401990_1.set('fieldImages', {'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'roznica_40': 'TextEdit', 'roznica_90': 'TextEdit', });
lyr_siatka_19902024_2.set('fieldImages', {'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'roznica_40': 'TextEdit', 'roznica_90': 'TextEdit', });
lyr_BUG_union_3.set('fieldImages', {'FID_BUG_20': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'FID_BUG_19': 'TextEdit', 'Id_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BUG_intersect_4.set('fieldImages', {'FID_BUG_19': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'FID_BUG_20': 'TextEdit', 'Id_12': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BUG_1940_5.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'obwod': 'TextEdit', });
lyr_BUG_1990_6.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'obwod': 'TextEdit', });
lyr_BUG_2024_7.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'obwod': 'TextEdit', });
lyr_siatka_19401990_1.set('fieldLabels', {'GRID_ID': 'no label', 'PERCENTAGE': 'no label', 'PERCENTA_1': 'no label', 'PERCENTA_2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'roznica_40': 'no label', 'roznica_90': 'no label', });
lyr_siatka_19902024_2.set('fieldLabels', {'GRID_ID': 'no label', 'PERCENTAGE': 'no label', 'PERCENTA_1': 'no label', 'PERCENTA_2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'roznica_40': 'no label', 'roznica_90': 'no label', });
lyr_BUG_union_3.set('fieldLabels', {'FID_BUG_20': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'FID_BUG_19': 'no label', 'Id_1': 'no label', 'Shape_Leng': 'no label', 'FID_HYDRO_': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_BUG_intersect_4.set('fieldLabels', {'FID_BUG_19': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'FID_HYDRO_': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'FID_BUG_20': 'no label', 'Id_12': 'no label', 'gridcode': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_BUG_1940_5.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'obwod': 'no label', });
lyr_BUG_1990_6.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'obwod': 'no label', });
lyr_BUG_2024_7.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'obwod': 'no label', });
lyr_BUG_2024_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});