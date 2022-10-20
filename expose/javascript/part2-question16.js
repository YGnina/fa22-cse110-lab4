let statistics = {
    redCars: 21,
    blueCars:45,
    greenCars:12,
    raceCars:5,
    blackCars:40,
    rareCars:2
};

// iterate through it and print out the value of the property 
//if the property starts with the letter r, 
//or if the value of that property is an odd number. 
for (let key in statistics) {
    if(key.startsWith('r') || statistics[key]%2!=0){
        console.log(statistics[key]);
    }
}