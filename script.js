// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

// const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanets; // need to store in an object //
    let listedPlanetsResponse = myFetch(); // this validates the above req. //
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        const randomPlanet = pickPlanet(listedPlanets);
        
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter,randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
    
    })
   
 document.addEventListener("submit", function(event) {
        event.preventDefault();
  const faultyItems =  document.querySelector('faultyItems')
  const pilotName = document.querySelector('input[name=pilot]').value
  const copilotName = document.querySelector('input[name=copilot]').value
  const fuelLevel = Number(document.querySelector('input[name=fuelLevel]').value)
  const cargoMass = Number(document.querySelector('input[name=cargoMass]').value)
});
formSubmission(document,faultyItems,pilotName,copilotName,fuelLevel,cargoMass)
});
