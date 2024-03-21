// Write your helper functions here!

// require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  const div = document.getElementById('missionTarget');
  div.innerHTML = `
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}"> 
                 `;
}


// Validating end user information with a cross reference to data format //
function validateInput(input) {
  if (input === "") {
    return ("Empty");
  } else if (isNaN(input)) {
    return ("Not a Number");
  } else {
    return ("Is a Number");
  }
};
// add event listner and event prevent //

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let faultyItems = document.getElementById('faultyItems')
  let cargoMass = document.getElementById('cargoStatus')
  let fuelStatus = document.getElementById('fuelStatus')
  let launchStatus = document.getElementById('launchStatus')
  let pilotStatus = document.getElementById('pilotStatus')
  let copilostStatus = document.getElementById('copilotStatus')

  let validatedFuel = validateInput(fuelLevel)
  let validateCargo = validateInput(cargoMass)

  if (pilot === ' ' || copilot === '' || fuelLevel === '' || cargoMass === '') {
    // alert("Please enter a valid responce")
  }

  if (validatedFuel === 'Not a Number' || validateCargo === 'Not a Number') {
    // alert('Please enter a valid responce')
  }
  pilotStatus.innerHTML = `Pilot ${pilot + ''} is ready for launch`
  copilostStatus.innerHTML = `Co-pilot ${copilot + ''} is ready for launch`

  if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    launchStatus.innerHTML = 'Shuttle is Ready for Launch';
    launchStatus.style.color = 'green'
  }

  if (fuelLevel < 10000) {
    faultyItems.style.visibility = 'visible'
    fuelStatus.innerHTML = 'Fuel level too low for launch'
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch'
    launchStatus.style.color = 'red'
  } else {
    fuelStatus.innerHTML = 'Fuel level high enough for launch'
  }

  if (cargoLevel > 10000) {
    faultyItems.style.visibility = 'visible'
    cargoMass.innerHTML = 'Cargo mass too heavy for launch'
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch'
    launchStatus.style.color = 'red'
  } else {
    cargoMass.innerHTML = 'Cargo mass low enough for launch'
  }
}


async function myFetch() {

  let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
    return response.json()
  })
  return planetsReturned;
}


myFetch();
// Function is completed, end user is able to call Random Planetary data //
function pickPlanet(planets) {
  const randomIndex = Math.floor(Math.random() * planets.length);
  return planets[randomIndex];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;