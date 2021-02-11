function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 31.4165, lng: 31.8133 },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      // mapTypeIds: ["roadmap", "terrain", "places"],
    },
  });
}
