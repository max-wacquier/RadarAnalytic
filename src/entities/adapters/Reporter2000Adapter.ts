import { IRadarAdapter } from "../../interfaces/AdapterInterface";
import { Incident } from "../Incident";

export class Reporter2000Adapter implements IRadarAdapter {
    name: string;
    location: string;
    speedThreshold: number;
    incidents: Array<Incident>;

    constructor(name: string, location: string, speedThreshold: number, incidents: Array<Incident>) {
            this.name = name;
            this.location = location;
            this.speedThreshold = speedThreshold;
            this.incidents = incidents;
    }

    formatIsSupported(format: string) : boolean {
        return true
    }
}