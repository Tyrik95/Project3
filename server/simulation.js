const race = () => {

let racing = true
let raceCompleted = false
const racer1 = {name: "Captain Falcon", topSpeed: 400, handling: 93, acceleration: 100, distanceTravelled: 0, raceTime: 0, completedRace: false}
const racer2 = {name: "Black Bull", topSpeed: 360, handling: 100, acceleration: 100, distanceTravelled: 0, raceTime: 0, completedRace: false}
let currentCheckpoint = 0
const startingLine = {name: "the starting line", type: "start", distanceToNextCheckpoint:2000}
const corner1 = {name: "turn 1", type: "hairpin", distanceToNextCheckpoint:2000}
const corner2 = {name: "turn 2", type: "chicane", distanceToNextCheckpoint:2000}
const corner3 = {name: "turn 3", type: "double apex", distanceToNextCheckpoint:2000}
const corner4 = {name: "turn 4", type: "increasing radius", distanceToNextCheckpoint:2000}
const straight1 = {name: "straight 1", type: "long-straight", distanceToNextCheckpoint:10000}
const straight2 = {name: "straight 2", type: "short-straight", distanceToNextCheckpoint:1000}
const straight3 = {name: "straight 3", type: "short-straight", distanceToNextCheckpoint:1000}
const straight4 = {name: "straight 4", type: "long-straight", distanceToNextCheckpoint:10000}
const finishLine = {name: "the finish line", type: "finish", distanceToNextCheckpoint:0}
const map = [startingLine, corner1, straight1, corner2, straight2, corner3, straight3, corner4, straight4, finishLine]
const messageArray1 = []
const messageArray2 = []
const messages = {racer1Messages:messageArray1, racer2Messages:messageArray2}

const calculateRaceDistance = () => {
    let distance = 0
    for (section of map) {
        distance += section.distanceToNextCheckpoint
    }
    return distance
}


function simulateRace(racer1, racer2, map) {
    // Reset the distance travelled by both racers
    racer1.distanceTravelled = 0;
    racer2.distanceTravelled = 0;

    // Start the race
    let currentRacer = racer1;
    let currentCorner;
    let timeElapsed = 0

    while (racing) {
        // Get the current checkpoint and corner
        const currentCheckpointData = map[currentCheckpoint];
        currentCorner = currentCheckpointData
        
        // Calculate the time it takes to reach the next checkpoint
        let timeToNextCheckpoint = 0;
        let message = ``
        
        switch (currentCheckpointData.type) {
        case "start":
            timeToNextCheckpoint = currentCheckpointData.distanceToNextCheckpoint / currentRacer.topSpeed;
            break;
        case "hairpin":
            const cornerTime1 = currentCorner.distanceToNextCheckpoint / currentRacer.topSpeed;
            currentRacer.topSpeed *= (currentRacer.handling  - Math.ceil(Math.random() * 5))/ 100;
            const cornerTime2 = currentCorner.distanceToNextCheckpoint / currentRacer.topSpeed;
            timeToNextCheckpoint = cornerTime1 + cornerTime2;
            break;
        case "chicane":
            const chicaneTime1 = currentCheckpointData.distanceToNextCheckpoint / currentRacer.topSpeed;
            currentRacer.topSpeed *= currentRacer.acceleration / 100;
            const chicaneTime2 = currentCheckpointData.distanceToNextCheckpoint / currentRacer.topSpeed;
            timeToNextCheckpoint = chicaneTime1 + chicaneTime2;
            break;
        case "double apex":
            const apexTime1 = currentCorner.distanceToNextCheckpoint / currentRacer.topSpeed;
            currentRacer.topSpeed *= currentRacer.handling / 100;
            const apexTime2 = currentCorner.distanceToNextCheckpoint / currentRacer.topSpeed;
            timeToNextCheckpoint = apexTime1 + apexTime2;
            break;
        case "increasing radius":
            const radiusTime1 = currentCheckpointData.distanceToNextCheckpoint / currentRacer.topSpeed;
            currentRacer.topSpeed *= currentRacer.acceleration / 100;
            const radiusTime2 = currentCheckpointData.distanceToNextCheckpoint / currentRacer.topSpeed;
            timeToNextCheckpoint = radiusTime1 + radiusTime2;
            break;
        case "long-straight":
            timeToNextCheckpoint = currentCheckpointData.distanceToNextCheckpoint / currentRacer.topSpeed;
            break;
        case "short-straight":
            timeToNextCheckpoint = currentCheckpointData.distanceToNextCheckpoint / currentRacer.topSpeed;
            break;
        case "finish":
            raceCompleted = true;
            racing = false;
            break;
        default:
            break;
        }
        
        // Update the distance travelled by the current racer
        currentRacer.distanceTravelled += currentCheckpointData.distanceToNextCheckpoint;
        timeElapsed += timeToNextCheckpoint
        currentRacer.raceTime += timeToNextCheckpoint

        switch (currentCheckpointData.type) {
            case "start":
                if (currentRacer.name === "Captain Falcon") {
                    message = `${currentRacer.name} has flown off ${currentCorner.name} the with a strong start!`
                messageArray1.push(message)
                    message = `And ${racer2.name} comes roaring off ${currentCorner.name}!`
                messageArray1.push(message)
                }
                else {
                    message = `${currentRacer.name} comes roaring off ${currentCorner.name}!`
                messageArray2.push(message)
                }
                break;
            case "hairpin":
                if (currentRacer.name === "Captain Falcon") {
                    message = `${currentRacer.name} threads the needle through the ${currentCorner.type}!`
                messageArray1.push(message)
                    message = `But ${racer2.name} makes that ${currentCorner.type} look like a canyon!`
                messageArray1.push(message)
                }
                else {
                    message = `${currentRacer.name} makes that ${currentCorner.type} look like a canyon!`
                messageArray2.push(message)
                }
                break;
            case "chicane":
                if (currentRacer.name === "Captain Falcon") {
                    message = `Left, right, left... Ohhh!${currentRacer.name} shows his skill through the ${currentCorner.type}!`
                messageArray1.push(message)
                    message = `Oh man, can ${racer2.name} make that ${currentCorner.type} look any tougher? I think not.`
                messageArray1.push(message)
                }
                else {
                    message = `Ohhh... can ${currentRacer.name} make that ${currentCorner.type} look any tougher? I think not.`
                messageArray2.push(message)
                }
                break;
            case "double apex":
                if (currentRacer.name === "Captain Falcon") {
                    message = `Here's ${currentRacer.name} at ${currentCorner.name}. Remember his last race with a double apex? Ohhh... clear through!`
                messageArray1.push(message)
                    message = `Here's ${racer2.name} coming through ${currentCorner.name}, and he blazes past those apexes! The savagery!`
                messageArray1.push(message)
                }
                else {
                    message = `Here's ${currentRacer.name} coming through ${currentCorner.name}, and he blazes past those apexes! The savagery!`
                messageArray2.push(message)
                }
                break;
            case "increasing radius": 
                if (currentRacer.name === "Captain Falcon") {
                    message = `${currentRacer.name} is at ${currentCorner.name} and he should have no trouble with that a radius that wide...`
                messageArray1.push(message)
                    message = `Here's ${racer2.name} showing ${currentCorner.name} why he spent so much money on handling!`
                messageArray1.push(message)
                }
                else {
                    message = `Here's ${currentRacer.name} showing ${currentCorner.name} why he spent so much money on handling!`
                messageArray2.push(message)
                }
                break;
            case "long-straight": //HERE'S WHERE I STOPPED JUST ADD FLAVOR TO THE STRAIGHTS
                if (currentRacer.name === "Captain Falcon") {
                    message = `${currentRacer.name} has the speed advantage during a ${currentCorner.type} like this...`
                messageArray1.push(message)
                    message = `${racer2.name} going in a straight line ${currentCorner.type} is something...`
                messageArray1.push(message)
                }
                else {
                    message = `${currentRacer.name} going in a straight line ${currentCorner.type} is something...`
                messageArray2.push(message)
                }
                break;
            case "short-straight":
                if (currentRacer.name === "Captain Falcon") {
                    message = `This ${currentCorner.type} shows off ${currentRacer.name}'s insane acceleration...`
                messageArray1.push(message)
                    message = `${racer2.name} doesn't enough time at this ${currentCorner.type} to keep the pressure on...`
                messageArray1.push(message)
                }
                else {
                    message = `${currentRacer.name} doesn't enough time at this ${currentCorner.type} to keep the pressure on...`
                messageArray2.push(message)
                }
                break;
            case "finish":
                message = ``
                break;
            default:
                break;
            } //MAKE IT MAKE SENSE!!!
        console.log("-------------------------------------------------")
        console.log(message)
        console.log(currentRacer.name + " race time: " + currentRacer.raceTime)
        console.log(currentRacer.name + " has traveled " + currentRacer.distanceTravelled + " units")
        // Move to the next checkpoint and switch to the other racer if a lap is completed
        // Or end race if both racers have completed laps
        currentCheckpoint += 1;
        if (currentRacer.distanceTravelled >= calculateRaceDistance()) {
            currentCheckpoint = 0;
            if (currentRacer === racer1 && currentRacer.completedRace === false) {
            currentRacer.completedRace = true
            currentRacer = racer2;
            } else if (currentRacer === racer2 && currentRacer.completedRace === false){
            currentRacer.completedRace = true;
            if (racer1.raceTime < racer2.raceTime) {
                return { winner: racer1, time: racer1.raceTime };
                } else {
                return { winner: racer2, time: racer2.raceTime };
                }
            } else {
                console.log("Race end logic broke.")
            }
        }
    
        // Update the time elapsed
        
        }

        }
const result = simulateRace(racer1, racer2, map);
console.log(result)
const minutes = Math.floor(result.time/60)
const seconds = (result.time - Math.floor(result.time/60) * 60).toFixed(2)
const milliseconds = Math.floor((result.time - Math.floor(result.time/60) * 60).toFixed(2) * 100)
calculateRaceDistance();
messageArray1.push(message = `The winner is ${result.winner.name} with a time of ${minutes} minutes and ${seconds > 1 ? seconds : milliseconds} ${seconds > 1 ? "seconds" : "milliseconds"}!`)
console.log(`The winner is ${result.winner.name} with a time of ${minutes} minutes and ${seconds > 1 ? seconds : milliseconds} ${seconds > 1 ? "seconds" : "milliseconds"}!`);
console.log(messages)
return (messages)
    }
    module.exports = {race}