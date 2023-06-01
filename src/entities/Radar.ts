import { IRadar } from "../interfaces/IRadar";
import { IRadarAdapter } from "../interfaces/IRadarAdapter";
import { Incident } from "./Incident";

export class Radar implements IRadar{

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