// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {if (testInput === "")
 {
    return("Empty")
 }    else if (testInput === isNaN(value)) {
    return  "Not a Numberr";
 }   else if (testInput !== isNaN(value))
    return "Is a Number"
 }   
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) 
    {
    if (document, list, pilot, copilot, fuelLevel, cargoLevel === isNaN(value)){
        return('Not a Number')
    } else if (document, list, pilot, copilot, fuelLevel, cargoLevel !== isNaN(value)){
        return('input is a Number')
    } else {
        return('Pleasse submit a valid responce')
    }
    };
 
 
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;