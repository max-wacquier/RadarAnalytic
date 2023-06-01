import { IRadarAdapter } from "../../interfaces/IRadarAdapter";
import { Incident } from "../Incident";
import { Radar } from "../Radar";

export class Reporter2000Adapter implements IRadarAdapter {
    constructor() {

    }
    formatIsSupported(format: string) : boolean {
        return format === "AwesomeRadar" ?  true : false
      }
  
    createRadar (format: string): Radar {
    return new Radar("","",0, [new Incident("", new Date, "","","","")]); //BOUCHONNAGE MOCHE
    } 
}