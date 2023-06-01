import { IRadarAdapter } from "../../interfaces/IRadarAdapter";
import { Incident } from "../Incident";
import { Radar } from "../Radar";

export class AwesomeRadarAdapter implements IRadarAdapter {
    
    constructor() {
    }

    formatIsSupported(format: string) : boolean {
      return format === "AwesomeRadar" ?  true : false
    }

    createRadar (format: string) {
      return new Radar("","",0, [new Incident("", new Date, "","","","")]); //BOUCHONNAGE MOCHE
    } 
}