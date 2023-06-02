import { IRadarAdapter } from "../IRadarAdapter";
import { Incident } from "../../../Incident/Incident";
import { Radar } from "../../../Radar/Radar";
import Reporter2000Base from "./Reporter2000Template.json"

const parser = require('xml2json');

export class Reporter2000Adapter implements IRadarAdapter {
    constructor() {

    }
    formatIsSupported (format: string) : boolean {
      const jsonExemple = parser.toJson(format);
      const object = JSON.parse(jsonExemple)
      for (var i in object){
        if (!Reporter2000Base.hasOwnProperty(i))
            return false;
      }
    return true;
    }
  
    createRadar (format: string): Radar {
    return new Radar("","",0, [new Incident("", new Date, "","","","")]); //BOUCHONNAGE MOCHE
    } 
}