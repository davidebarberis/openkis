OPS_Map.MyAddLayers = function ()
{

    OPS_Map.addOSMLayer("Topo", 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png', true, false);
    OPS_Map.addOSMLayer("Satellite", "https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=vcy9GHtGmS1pAPPsJYdW", true, false);
    OPS_Map.addOSMLayer("OSM Landscape", "https://a.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=ae3c5645f1f3440bb1999f77b56164ad", true, false);
    
    OPS_Map.addOSMLayer("Ortofoto Piemonte 2018", "openkis_proxy.php/http://opengis.csi.it/mp/regp_agea_2018?version=1.3.0", true, false);

    OPS_Map.addWMSLayer("Limiti amministrativi", "https://geomap.reteunitaria.piemonte.it/ws/taims/rp-01/taimslimammwms/wms_limitiAmm?service=WMS&", "UnitaAmministrative", false, true);
    OPS_Map.addWMSLayer("SfondoCartRifBN", "https://geomap.reteunitaria.piemonte.it/ws/taims/rp-01/taimsbasewms/wms_sfondo_cart_rif_bn?language=ita&?", "SfondoCartRifBN", true, true);
    OPS_Map.addWMSLayer("Toponomastica", "https://geomap.reteunitaria.piemonte.it/ws/taims/rp-01/taimsbasewms/wms_sfondo_cart_rif_bn?language=ita&?", "Toponomastica", false, true);


    //OPS_Map.addWMSLayer("IGM 1:25000 Liguria", "http://bbsuite.nivolacloud.com:8080/geoserver/IGM/wms&", 'IGM:igm25000_256', true, true, "image/jpeg");
    OPS_Map.addWMSLayer("IGM 1:25000_miniambiente", "https://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/IGM_25000.map&", 'CB.IGM25000', true, true);


    OPS_Map.addWMSLayer("Geologica 1:50000", "openkis_proxy.php/http://sgi2.isprambiente.it/arcgis/services/raster/geo_50k_italia/ImageServer/WMSServer", '0', false, false);
    //OPS_Map.addWMSLayer("IGM 1:25000 Piemonte", "openkis_proxy.php/http://sgi2.isprambiente.it/arcgis/services/raster/igm25k_piemonte_wgs/ImageServer/WMSServer", 'igm25k_piemonte_wgs', false, false);

   



    var layers = getUrlVar("layers", "");
    var mod = getUrlVar("mod", "");
    var nv_areas = getUrlVar("nv_areas", "");
    var filter_code = getUrlVar("filter_code", "");
    console.log(filter_code);
    if (filter_code !== "")
    {
        OPS_Map.addKmlLayer("Cavita selezionate", "openkis_kml.php?mod=caves&filter_code=" + filter_code, false, mod === "caves");
        // OPS_Map.addKmlLayer("Cavita selezionate", "openkis_kml.php?mod=caves", false, mod === "caves");

    } else
    {
        if (nv_areas != "")
            OPS_Map.addKmlLayer("Cavita naturali area", "openkis_kml.php?mod=caves&nv_areas=" + nv_areas, false, mod === "caves");
        else
        {
            OPS_Map.addKmlLayer("Cavita naturali", "openkis_kml.php?mod=caves", false, mod === "caves");

        }
    }
    OPS_Map.addKmlLayer("Cavita artificiali", "openkis_kml.php?mod=artificials&minimal=1", false, mod === "artificials");
    OPS_Map.addKmlLayer("Catasto grotte Liguria", "openkis_proxy.php/https://catastogrotte.net/liguria/openkis_kml.php?mod=caves&time=1&minimal=1", false, false);
    OPS_Map.addKmlLayer("Aree carsiche piemontesi", "https://catastogrotte-piemonte.net/Aree_carsiche.kml");
    
    splx.include("bs_surveys.js.php?mod=" + mod);
    splx.include("bs_surveys.js.php?t=artificials&mod=" + mod);
    //    OPS_Map.addJsLayer("openkis_markers.js.php?mod=caves", false);

};


