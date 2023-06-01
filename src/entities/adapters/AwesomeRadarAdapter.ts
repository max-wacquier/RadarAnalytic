import { IRadarAdapter } from "../../interfaces/IRadarAdapter";
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

    formatIsSupported(format: string) : boolean {
      return format === "AwesomeRadar" ?  true : false
  }
}