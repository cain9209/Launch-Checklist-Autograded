// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    return `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth:${distance} </li>
                     <li>Number of Moons:${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
    `
 };
 
 function validateInput(input) {
    if (input === "") {
      return "Empty";
    } else if (isNaN(input)) {
      return "Not a Number";
    } else {
      return "Is a Number";
    }
  }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  // validateInput //
 
  if(fuelLevel < 10000){
      document.getElementById('faultyItems').style = 'visibility: block;'
      document.getElementById('fuelStatus').textContent = 'Fuel level too low for launch';
      document.getElementById('launchStatus').textContent = 'Shuttle Not Ready for Launch';
      document.getElementById('pilotStatus').textContent = 'Pilot Chris is ready for launch';
      document.getElementById('copilotStatus').textContent = 'Co-pilot Bob is ready for launch';
      document.getElementById('launchStatus').style.color = 'red';
  } else if (cargoLevel > 10000) {
      document.getElementById('faultyItems').style = 'visibility: block;'
      document.getElementById('cargoStatus').textContent = ' Cargo mass too heavy for launch';
      document.getElementById('launchStatus').textContent = 'Shuttle Not Ready for Launch';
      document.getElementById('pilotStatus').textContent = 'Pilot Chris is ready for launch';
      document.getElementById('copilotStatus').textContent = 'Co-pilot Bob is ready for launch';
      document.getElementById('fuelStatus').textContent = ('Fuel level high enough for launch');
      document.getElementById('launchStatus').style.color = 'red';
  } else if (fuelLevel === 10000 && cargoLevel <= 10000) {
      document.getElementById('launchStatus').textContent = 'Shuttle is Ready for Launch';
      document.getElementById('pilotStatus').textContent = 'Pilot Chris is ready for launch';
      document.getElementById('copilotStatus').textContent = 'Co-pilot Bob is ready for launch';
      document.getElementById('fuelStatus').textContent = ('Fuel level high enough for launch');
      document.getElementById('cargoStatus').textContent = 'Cargo mass low enough for launch';
      document.getElementById('launchStatus').style.color = 'green';
  } else {
    alert('Please complete form to verify saftey!')
  }

};
 
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) { // this was changed //
 
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;