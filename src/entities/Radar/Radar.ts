import { IRadarAdapter } from "../Adapter/Radar/IRadarAdapter";
import { Incident } from "../Incident/Incident";

export class Radar {

    name: string;
    location: string;
    speedThreshold: number;
    incidents: Array<Incident>;

    constructor(name: string, location: string, speedThreshold: number, incidents: Array<Incident>){
        this.name = name
        this.location = location
        this.speedThreshold = speedThreshold
        this.incidents = incidents
    }

    
}