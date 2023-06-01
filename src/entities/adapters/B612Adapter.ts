import { IRadarAdapter } from "../../interfaces/IRadarAdapter";
import { Incident } from "../Incident";
import { Radar } from "../Radar";
import B612Base from "../../data/B612Base.json"

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