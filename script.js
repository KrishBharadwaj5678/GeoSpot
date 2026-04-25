// Gsap
t = gsap.timeline();

t.from("h1.gps-coordinates", {
  duration: 0.4,
  delay: 0.8,
  opacity: 0,
  y: -5,
});

t.from("div.parent-box", {
  duration: 0.5,
  opacity: 0,
  width: "0px",
});

t.from(
  "h2.gps_coord,p.latitude,p.longitude,input.lati,input.longi,input.coordinates_find",
  {
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
  },
);

t.from(
  "h2.inner_latitude,p.inner_latitude_info,h2.inner_longitude,p.inner_longitude_info,p.copyright",
  {
    opacity: 0,
    stagger: 0.3,
    x: -100,
  },
);

let sub_btn = document.querySelector("input.coordinates_find");
let lati = document.querySelector("input.lati");
let longi = document.querySelector("input.longi");

sub_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lati.value = position.coords.latitude;
      longi.value = position.coords.longitude;
    });
  }
});
