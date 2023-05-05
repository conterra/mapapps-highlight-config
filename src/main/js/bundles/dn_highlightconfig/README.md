# Highlight Config

The Highlight Config bundle provides the possibility to configure the highlight in the map view. For example, the highlighting when a popup opens.

## Usage

1. Add the bundle "dn_highlightconfig" to your app.
2. Configure the highlighting options as configurable components

### Sample configuration to use a green highlighting color instead of the default cyan:
```json
"dn_highlightconfig": {
    "Config":{
        "color": [0, 255, 0]
    }
}
```

### Sample configuration to use a green highlighting color for the fill with an opacity of 50% and a purple highlighting color for the halo surrounding the highlight with an opacity of 75%.

```json
"dn_highlightconfig": {
    "Config":{
        "color": "green",
        "fillOpacity": 0.5,
        "haloColor": "##8800FF",
        "haloOpacity": 0.75
    }
}
```

## Configurable Components of dn_highlightconfig:

#### Config:
```json
"dn_highlightconfig": {
    "Config":{
        "color": [0, 255, 255],
        "fillOpacity": 0.25,
        "haloColor": [0, 255, 255],
        "haloOpacity": 1,
        "shadowColor": [0, 0, 0],
        "shadowOpacity": 0.4,
        "shadowDifference": 0.375
    }
}
```

Here all highlighting options, which are provided by the ArcGIS Maps SDK for JavaScript can be set. For more information, you can check the documentation directly [here](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#HighlightOptions).

| Property   | Type   | Possible Values | Default    |Description|
|------------|--------|-----------------|------------|-----------|
| color      | Array[Number], String or Object  |  [namedcolorvalue](https://www.w3.org/wiki/CSS/Properties/color/keywords),  hex value as string or RGB value as array or object                                        | ```"#00FFFF"```| The color of the highlight fill.                               |
| haloColor | Array[Number], String or Object  |  [namedcolorvalue](https://www.w3.org/wiki/CSS/Properties/color/keywords),  hex value as string or RGB value as array or object                                        | ```null```   | The color of the halo surrounding the highlight. If no haloColor is provided, then the halo will be colored with the specified color. |
| haloOpacity | Number |  0 - 1                     | ```1```   | The opacity of the highlight halo. This will be multiplied with any opacity specified in color.|
| fillOpacity | Number |  0 - 1                     | ```0.25```   | The opacity of the fill (area within the halo). This will be multiplied with the opacity specified in color.|
| shadowColor | Array[Number], String or Object  |  [namedcolorvalue](https://www.w3.org/wiki/CSS/Properties/color/keywords),  hex value as string or RGB value as array or object                                        | ```"#000000"```   | The color of the highlighted feature's shadow in [3D Scene View](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html)                 |
| shadowOpacity | Number |  0 - 1                     | ```0.4```   | The opacity of the highlighted feature's shadow. This will be multiplied with the opacity specified in shadowColor|
| shadowdifference | Number |  0 - 1                     | ```0.375```   | Defines the intensity of the shadow area obtained by overlapping the shadow of the highlighted feature and the shadow of other objects in 3D SceneView. The value ranges from 0 to 1. A value of 0 highlights the overlapping shadow areas in the same way (no difference). Setting it to 1 highlights only the difference between the shadow areas, so the overlapping shadow areas aren't highlighted at all|
