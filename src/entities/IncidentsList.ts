import { Incident } from "./Incident";
import { Radar } from "./Radar";

export class IncidentsList {
    
    private incidents: Incident[];
    constructor(incidents: Incident[]) {
        this.incidents = incidents;
    }

    isEmpty() {
        return this.incidents.length === 0;
    }

}
