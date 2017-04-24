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
            'groupHeading': 'Ecoregions of North America',
            'showGroupHeading': true,
            'includeInLayerList': true,
            'layers': {
                'Level 1' : {
                    'url': 'https://maps4.arcgisonline.com/ArcGIS/rest/services/DOI/EPA_Ecoregions_of_North_America/MapServer',
                    'visibleLayers': [1],
                    'options': {
                        'id': 'levOne',
                        'opacity': 0.75,
                        'visible': true
                    },
                    'wimOptions': {
                        'type': 'layer',
                        'layerType': 'agisDynamic',
                        'includeInLayerList': true,
                        'zoomScale': 144448,
                        'hasOpacitySlider': true,
                        'includeLegend' : true
                    }
                },
                'Level 2' : {
                    'url': 'https://maps4.arcgisonline.com/ArcGIS/rest/services/DOI/EPA_Ecoregions_of_North_America/MapServer/',
                    'visibleLayers': [2],
                    'options': {
                        'id': 'levTwo',
                        'opacity': 0.75,
                        'visible': true
                    },
                    'wimOptions': {
                        'type': 'layer',
                        'layerType': 'agisDynamic',
                        'includeInLayerList': true,
                        'zoomScale': 144448,
                        'hasOpacitySlider': true,
                        'includeLegend' : false
                    }
                },
                'Level 3' : {
                    'url': 'https://maps4.arcgisonline.com/ArcGIS/rest/services/DOI/EPA_Ecoregions_of_North_America/MapServer/',
                    'visibleLayers': [3],
                    'options': {
                        'id': 'levThree',
                        'opacity': 0.75,
                        'visible': true
                    },
                    'wimOptions': {
                        'type': 'layer',
                        'layerType': 'agisDynamic',
                        'includeInLayerList': true,
                        'zoomScale': 144448,
                        'hasOpacitySlider': true,
                        'includeLegend' : true
                    }
                },
                'ecoregions' : {
                    'url': 'https://maps4.arcgisonline.com/ArcGIS/rest/services/DOI/EPA_Ecoregions_of_North_America/MapServer/',
                    'visibleLayers': [0],
                    'options': {
                        'id': 'ecoregions',
                        'opacity': 0.75,
                        'visible': false
                    },
                    'wimOptions': {
                        'type': 'layer',
                        'layerType': 'agisDynamic',
                        'includeInLayerList': false,
                        'zoomScale': 144448,
                        'hasOpacitySlider': true,
                        'includeLegend' : false
                    }
                }
            }
        }
    ];
 
});