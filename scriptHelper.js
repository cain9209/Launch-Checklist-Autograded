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
      list.document.getElementById('faultyItems').style.display = 'block';
      document.getElementById('fuelStatus').textContent = 'Not enough fuel for the Journey';
      document.getElementById('launchStatus').textContent = 'Shuttle not ready for launch';
      document.getElementById('launchStatus').style.color = 'red';
  } else if (cargoLevel > 10000) {
      list.document.getElementById('faultyItems').style.display = 'block';
      document.getElementById('cargoStatus').textContent = alert('To much mass for the shuttle to take off');
      document.getElementById('launchStatus').textContent = alert('Shuttle not ready for launch');
      document.getElementById('launchStatus').style.color = 'red';
  } else {
      document.getElementById('lanchStatus').textContent = alert('Shuttle is ready for launch');
      document.getElementById('launchStatus').style.color = 'green';
      
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