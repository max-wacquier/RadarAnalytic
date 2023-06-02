import { IRadarAdapter } from "../IRadarAdapter";
import { Incident } from "../../../Incident/Incident";
import { Radar } from "../../../Radar/Radar";
import AwesomeRadarBase from "./AwesomeRadarTemplate.json"

type awesomeRadar = {
  metadata:{
    localisation: string,
    speedThreshold: number
  } ,
  incidents: Array<Array<string>>
}

export class AwesomeRadarAdapter implements IRadarAdapter {
    
    constructor() {
    }

  
    formatIsSupported(format: string) : boolean {
      const object = JSON.parse(format)
      for (var i in object){
        if (!AwesomeRadarBase.hasOwnProperty(i))
            return false;
      }
    return true;
    }



    createRadar (format: string): Radar {
      var object : awesomeRadar = JSON.parse(format)
      var listOfIncident = new Array<Incident>;
      // Parse data from string to radar
      object.incidents.forEach(incidentsAwesomeRadar => {
        var OneIncident = new Array<string>
        incidentsAwesomeRadar.forEach(element => {
          OneIncident.push(element);
        })
        listOfIncident.push(new Incident(OneIncident[0],new Date(OneIncident[1])))
      })

      return new Radar(undefined, object.metadata.localisation,object.metadata.speedThreshold,listOfIncident); 
    } 
}