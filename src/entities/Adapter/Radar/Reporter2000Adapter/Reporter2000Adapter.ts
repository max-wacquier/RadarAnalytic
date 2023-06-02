import { IRadarAdapter } from "../IRadarAdapter";
import { Incident } from "../../../Incident/Incident";
import { Radar } from "../../../Radar/Radar";

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