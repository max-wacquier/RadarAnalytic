import { IRadarAdapter } from "../IRadarAdapter";
import { Incident } from "../../../Incident/Incident";
import { Radar } from "../../../Radar/Radar";
import B612Base from "./B612Example.json"

export class B612Adapter implements IRadarAdapter {

    constructor() {
    }

    formatIsSupported(format: string) : boolean {
      const object: {} = JSON.stringify(format)
      for (var i in object)
        if (!B612Base.hasOwnProperty(i))
            return false;
      return true;
    }
  
    createRadar (format: string): Radar {
    return new Radar("","",0, [new Incident("", new Date, "","","","")]); //BOUCHONNAGE MOCHE
    } 
}