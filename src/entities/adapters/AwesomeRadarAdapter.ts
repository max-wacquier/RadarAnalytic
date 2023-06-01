import { IRadarAdapter } from "../../interfaces/AdapterInterface";
import { Incident } from "../Incident";

export class AwesomeRadarAdapter implements IRadarAdapter {
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

    getInfosFromRadar(radar: any) {
      radar.name? this.name = radar.name : this.name = fileName
        
    }
}