import { IRadarAdapter } from "../IRadarAdapter";
import { Incident } from "../../../Incident/Incident";
import { Radar } from "../../../Radar/Radar";
import B612Base from "./B612Example.json"

type B612Radar = {
  name: string ,
  localisation: string,
  reports: Array<{
      licensePlate: string,
      speed: string,
      date: string,
      evidenceUrl: string
    }>
}

export class B612Adapter implements IRadarAdapter {

    constructor() {
    }

    formatIsSupported(format: string) : boolean {
      const object = JSON.parse(format)
      for (var i in object)
        if (!B612Base.hasOwnProperty(i))
            return false;
      return true;
    }
  
    createRadar (format: string): Radar {
      var object : B612Radar = JSON.parse(format)
      var listOfIncident = new Array<Incident>;
      object.reports.forEach(Oneincident => {
        listOfIncident.push(new Incident(Oneincident.licensePlate,new Date(Oneincident.date), Oneincident?.speed, undefined, undefined, Oneincident.evidenceUrl))
      });
      return new Radar(object.name,object.localisation,undefined, listOfIncident);
    } 
}