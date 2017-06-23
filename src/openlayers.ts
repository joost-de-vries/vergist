
import * as ol from "openlayers"
import {store} from "./index";
import {visiblePlaces} from "./actions/index";
import {Place, placeName} from "./types/index";

// OL map

const placeLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        //url: "http://www.geoforall.org/locations/OSGEoLabs.json" raises
        //Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at
        // http://www.geoforall.org/locations/OSGEoLabs.json. (Reason: CORS header 'Access-Control-Allow-Origin' missing).
        url: "OSGEoLabs.json"
    })
});

const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        placeLayer
    ],
    view: new ol.View({
        center: [949282, 6002552],
        zoom: 4
    })
});

const popupElement:Element = document.getElementById('popup')!;
const popup = new ol.Overlay({
    element: popupElement,
    autoPan: true /* ,
    autoPanAnimation: {
        duration: 250,
        source:
    } */
});
map.addOverlay(popup);

function updateVisiblePlaces() {
    const extent = map.getView().calculateExtent(map.getSize());
    const places = placeLayer.getSource().getFeaturesInExtent(extent).map((feature) => feature.getProperties()) as Place[];
    // Update state in Redux store
    store.dispatch(visiblePlaces(places))
}

placeLayer.on('change', updateVisiblePlaces);
map.on('moveend', updateVisiblePlaces);

export function updateSelection(name:string) {
    const extent = map.getView().calculateExtent(map.getSize());
    const selected = placeLayer.getSource().getFeaturesInExtent(extent).filter((feature) => name == placeName(feature.getProperties() as Place));
    if (selected.length > 0) {
        const feature = selected[0];
        popupElement.innerHTML = feature.getProperties().name;
        popup.setPosition((feature.getGeometry() as any).getFirstCoordinate());
    }
}