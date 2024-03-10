// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

// const destinationInfo = `
    
//                 //  <h2>Mission Destination</h2>
//                 //  <ol>
//                 //      <li>Name: ${document.name} </li>
//                 //      <li>Diameter: ${document.diameter} </li>
//                 //      <li>Star: ${document.star}</li>
//                 //      <li>Distance from Earth: ${document.distance} </li>
//                 //      <li>Number of Moons: ${document.moons} </li>
//                 //  </ol>
//                 //  <img src="${document.imageUrl}">
    
//  `
}
 
 // Validating end user information with a cross reference to data format //
 function validateInput(input) {
    if (input === "") {
      return("Empty");
    } else if (isNaN(input)) {
      return("Not a Number");
    } else {
      return("Is a Number");
    }
  };
 // Added validation to return safety protocol for end user //

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
 
  if(fuelLevel < 10000){
      list.style = 'visibility: block;'
      document.getElementById('fuelStatus').textContent = 'Fuel level too low for launch';
      document.getElementById('launchStatus').textContent = 'Shuttle Not Ready for Launch';
      document.getElementById('pilotStatus').textContent = `Pilot ${pilot + ''} is ready for launch`;
      document.getElementById('copilotStatus').textContent = `Co-pilot ${copilot + ''} is ready for launch`;
      document.getElementById('launchStatus').style.color = 'red';
  } else if (cargoLevel > 10000) {
      list.style = 'visibility: block;'
      document.getElementById('cargoStatus').textContent = ' Cargo mass too heavy for launch';
      document.getElementById('launchStatus').textContent = 'Shuttle Not Ready for Launch';
      document.getElementById('pilotStatus').textContent = `Pilot ${pilot + ''} is ready for launch`;
      document.getElementById('copilotStatus').textContent = `Co-pilot ${copilot + ''} is ready for launch`;
      document.getElementById('fuelStatus').textContent = 'Fuel level high enough for launch';
      document.getElementById('launchStatus').style.color = 'red';
  } else if (fuelLevel === 10000 && cargoLevel <= 10000) {
      document.getElementById('launchStatus').textContent = 'Shuttle is Ready for Launch';
      document.getElementById('pilotStatus').textContent = `Pilot ${pilot + ''} is ready for launch`;
      document.getElementById('copilotStatus').textContent = `Co-pilot ${copilot + ''} is ready for launch`;
      document.getElementById('fuelStatus').textContent = 'Fuel level high enough for launch';
      document.getElementById('cargoStatus').textContent = 'Cargo mass low enough for launch';
      document.getElementById('launchStatus').style.color = 'green';
  } else {
    alert('Please complete form to verify saftey!')
  }

};
 
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json)").then( function(response) {
         });
 
     return planetsReturned;
 }
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