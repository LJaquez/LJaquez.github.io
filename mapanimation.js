// This array contains the coordinates for all bus stops for GLTECH Bus 1
const busStops = [
    [-71.41655244794782, 42.674729403015505],
    [-71.41247955959403, 42.67279500866269],
    [-71.41194583075864, 42.67250135099323],
    [-71.4040530884294, 42.67195094604514],
    [-71.40429727319442, 42.67441624439573],
    [-71.40220681607695, 42.674607227532164],
    [-71.40846504435888, 42.67883830373997],
    [-71.40901061552329, 42.6811244101595],
    [-71.41870915785175, 42.69825407462966],
    [-71.3903500866873, 42.69902315692251],
    [-71.3923954768913, 42.68962947360075],
    [-71.39570745970059, 42.689404246522884],
    [-71.39685925970072, 42.68695935397261],
    [-71.39467118853631, 42.681941172534714],
    [-71.39074311977387, 42.6812293226979],
    [-71.38671953326738, 42.681501409154286],
    [-71.3841247369645, 42.683281565178504],
    [-71.38141499093831, 42.684124449428644],
    [-71.37729474251029, 42.682020243193165],
    [-71.37311741737199, 42.678673404200396],
    [-71.3762857792936, 42.67582568789349],
    [-71.38038153086552, 42.67350235947403],
    [-71.3825403523068, 42.672437486516564],
    [-71.3834297698438, 42.67237343348623],
    [-71.38557376191724, 42.67010085094932],
    [-71.39507047304588, 42.664742864549154],
    [-71.38618825371402, 42.65387001664248]
  ];
  
  mapboxgl.accessToken = 'pk.eyJ1IjoibGphcXVlejE0IiwiYSI6ImNsMnhrZHBlajAwZHUzYm81cm43eDEwNmMifQ.0e0AeQuIqUcFUFO08KCNvQ';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.379,42.679],
    zoom: 12.5,
  });
  
  // Adds  marker to the map at the first coordinates in the array busStops. 
  
  var marker = new mapboxgl.Marker()
    .setLngLat(busStops[0])
    .addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // Moves the marker on the map every 1000ms.
    setTimeout(()=>{
      if (counter>= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    },750)
  }

  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  