import { IRadarAdapter } from "../Adapter/Radar/IRadarAdapter";
import { Incident } from "../Incident/Incident";

export class Radar {

    name?: string|undefined;
    location: string;
    speedThreshold?: number|undefined;
    incidents: Array<Incident>;

    constructor(name: string|undefined, location: string, speedThreshold: number|undefined, incidents: Array<Incident>){
        this.name = name
        this.location = location
        this.speedThreshold = speedThreshold
        this.incidents = incidents
    }

    
}