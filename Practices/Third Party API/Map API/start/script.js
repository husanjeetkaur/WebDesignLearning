L.mapquest.key = "pZVYPvp1sf4obEdZQluDLdIVAZVGvlQ7";

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});

map.addControl(L.mapquest.control({ position: "bottomright" }));

L.mapquest.searchControl().addTo(map);

map.addControl(L.mapquest.satelliteControl());

L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: "#22407F",
    secondaryColor: "#3B5998",
    shadow: true,
    size: "sm",
    symbol: "A",
  }),
})
  .bindPopup("This is Manchester!")
  .addTo(map);
