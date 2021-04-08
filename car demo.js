class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep."
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!"
    }
}

class Garage {
    constructor(cap){
        this.vehicles = [];
        this.capacity = cap;
    }
    add(veh){
        if (veh instanceof Vehicle){
            if (this.vehicles.length < this.capacity){
                this.vehicles.push(veh)
                return "Vehicle Added!"
            }
            else {return "Sorry, we're Full."}
        }
        else {return "Only Vehicles are allowed in here!"}
    }
}
