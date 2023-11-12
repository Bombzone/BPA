function initMap() {
    const Gameday = { lat: 43.970610, lng: -116.819190 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: Gameday,
    });
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h3 class="markertitle">Game Day Grill</h3>' +
      '<div class="markercontent">' +
      '102 N Plymouth Ave,<br>New Plymouth, ID 83655 <br>' +
      '<a target="_blank" href="https://maps.app.goo.gl/owx11pkP9w5eFcBc9"> <span> View on Google Maps </span> </a>' +
      "</div>" +
          "</div>" +
      "</div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "Game Day Grill",
    });
    const marker = new google.maps.Marker({
      position: Gameday,
      map,
    });
  
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  }
  
  window.initMap = initMap;
