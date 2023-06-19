import { IRadarAdapter } from "../IRadarAdapter";
import { Incident } from "../../../Incident/Incident";
import { Radar } from "../../../Radar/Radar";
import Reporter2000Base from "./Reporter2000Template.json"

import * as fs from 'fs';
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

      const xml = fs.readFileSync(format, {encoding: 'utf-8'});
      const list: any = xml.match(/"(.*?)"/g)
  
      const location = list[0].replaceAll('"', '')
      const date = list[1].replaceAll('"', '')
      let listOfIncidents: Array<Incident> = new Array<Incident>()
  
      let nbCurrentIncidentElements = 0
      let currentIncident = []
  
      for (let index = 2; index < list.length; index++) {
          if ((nbCurrentIncidentElements) < 3) {
              currentIncident.push(list[index].replaceAll('"', ''))
              nbCurrentIncidentElements++
          } else if ( nbCurrentIncidentElements === 3) {
              currentIncident.push(list[index].replaceAll('"', ''))
              listOfIncidents.push(new Incident(currentIncident[0], date, currentIncident[3], currentIncident[1], currentIncident[2], undefined))
              currentIncident = []
              nbCurrentIncidentElements = 0
          }
      }
      return new Radar(undefined, location, undefined, listOfIncidents);
  }
}