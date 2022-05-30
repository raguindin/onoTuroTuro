<script>
  export let addressText = "The Gahanna Plant Library";
  const googleApiKey = "AIzaSyB2Z8A8BF_g-pn_sTMA86FqAksSRJ4CHnM";

  const mapboxApiKey =
    "pk.eyJ1IjoibHVrZXNoYWZlciIsImEiOiJjbDNzMzNuMGExbzc1M2RsOG1jd3dldTZvIn0.zVDOS6uRSvJSD49q1iyQVQ";

  const getMapImage = async (text) => {
    let response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${mapboxApiKey}`
    );
    let body = await response.text();
    let geocode = JSON.parse(body);
    let coordinates = geocode.features[0].center;
    let coordStr = coordinates.join(",");
    let zoomLevel = "16.3";
    let width = "600";
    let height = "600";
    let truckIcon = "https://cdn-icons-png.flaticon.com/32/1046/1046762.png";
    let imgSrc = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/url-${encodeURIComponent(
      truckIcon
    )}(${coordStr})/${coordStr},${zoomLevel},0/${width}x${height}?access_token=${mapboxApiKey}`;
    let mapLink = `https://www.openstreetmap.org/#map=${zoomLevel}/${coordinates[1]}/${coordinates[0]}`;
    return { imgSrc: imgSrc, mapLink: mapLink };
  };
</script>

{#await getMapImage(addressText) then value}
  <a href={value.mapLink} target="_blank"
    ><img
      src={value.imgSrc}
      alt="Map of {addressText}"
      width="100%"
      height="100%"
    /></a
  >
{/await}
