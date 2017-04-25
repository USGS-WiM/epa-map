/**
 * Created by bdraper on 4/27/2015.
 */
var allLayers;
var renderer;

require([
    'esri/InfoTemplate',
    'esri/renderers/UniqueValueRenderer',
    'esri/symbols/PictureMarkerSymbol',
    'dojo/domReady!'
], function(
    InfoTemplate,
    UniqueValueRenderer,
    PictureMarkerSymbol
) {

    var defaultSymbol = new PictureMarkerSymbol("./images/grn-pushpin.png", 45, 45);

    renderer = new UniqueValueRenderer(defaultSymbol);

    var template = new InfoTemplate("${NAME}",
        "Type: ${TYPE}<br/>" +
        "Ramsar: <a id='ramsarLink' target='_blank' href='${HYPERLINK_2}'>click here</a><br/>" +
        "Location Website: <a target='_blank' href='${HYPERLINK}'>click here</a><br/>" +
        "Water Summary Report: <a target='_blank' href='${WATER_SUMMARY_REPORT}'>click here</a><br/>" +
        "Wildlife Action Plan: <a target='_blank' href='${STATE_ACTION_PLAN}'>click here</a><br/>"
    )

    allLayers = [
        {
            'groupHeading': 'ESRI dynamic map services',
            'showGroupHeading': false,
            'includeInLayerList': true,
            'layers': {
                'Revised Polygons' : {
                    'url': 'https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/USGS_Regions/FeatureServer/0?token=DjcX42N0ihSH--P-qYw5815P-YVYlkUM34RJhmOFAP6zuBPMZgYcr5vgDrpbXHUO7xgoIQtxY1upVC5Ro_PSxQj0hOJ_cVaLL1PDiY6GL9neK1F4Zt32o59F4JtVfnz2fAW8UjnX2cf1-nQiNj01agF_zDKFtF6M8xPmIFSZwoaY9O0RAvsWapQ_UwpzTXAN3ZRKGg-nM-tCaqiajg99JyrHABeY18mcw_BOFKTdWnczoYSWaoPigYJz_PU-XhPI',
                    'options': {
                        'id': 'wetlands',
                        'opacity': 0.75,
                        'visible': true
                    },
                    'wimOptions': {
                        'type': 'layer',
                        'layerType': 'agisFeature',
                        'includeInLayerList': true,
                        'zoomScale': 144448,
                        'hasOpacitySlider': true,
                        'includeLegend' : true,
                        'moreinfo': 'http://www.fws.gov/wetlands/Data/Wetlands-V2-Product-Summary.html',
                        'otherLayersToggled': ['wetlandsStatus', 'wetlandsRaster']
                    }
                },
            }
        },
        
    ];
 
});