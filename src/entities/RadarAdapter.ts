import { IRadarAdapter } from "../interfaces/IRadarAdapter";
import { Incident } from "./Incident";

export class RadarAdapter implements IRadarAdapter{

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
    
    formatIsSupported (format: string) {
        return true
    };
}