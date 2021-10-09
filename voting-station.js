const chooseStations = (stations) => {
  let validStations = [];
  for (let station of stations){
    if (station[1] >= 20 && (station[2] === 'community centre' || station[2] === 'school')) {
      validStations.push(station[0]);
    }
  }
  //console.log(validStations);
  return validStations;
}

// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];
let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 10, 'community centre']
]

chooseStations(stations);