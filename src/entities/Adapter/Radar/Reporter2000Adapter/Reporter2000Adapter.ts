import { IRadarAdapter } from "../IRadarAdapter";
import { Incident } from "../../../Incident/Incident";
import { Radar } from "../../../Radar/Radar";
import Reporter2000Base from "./Reporter2000Template.json"

import * as fs from 'fs';
import { XMLParser } from 'fast-xml-parser';

export class Reporter2000Adapter implements IRadarAdapter {
    constructor() {

    }
    formatIsSupported (format: string) : boolean {
      try {
        JSON.parse(format)
        return false;
      } catch (error) {
        const parser = new XMLParser();
        const object = parser.parse(format);
        for (var i in object) {
          if (!Reporter2000Base.hasOwnProperty(i))
            return false;
        }
        return true;
      }
    }

    createRadar (format: string): Radar {
      console.log('Reporter2000');
      // const xml = fs.readFileSync(format, {encoding: 'utf-8'});
      const list: any = format.match(/"(.*?)"/g)

      const location: string = list[0].replaceAll('"', '')
      const date: string = list[1].replaceAll('"', '')
      let listOfIncidents: Array<Incident> = new Array<Incident>()
  
      let nbCurrentIncidentElements = 0
      let currentIncident = []
  
      for (let index = 2; index < list.length; index++) {
          if ((nbCurrentIncidentElements) < 3) {
              currentIncident.push(list[index].replaceAll('"', ''))
              nbCurrentIncidentElements++
          } else if ( nbCurrentIncidentElements === 3) {
              currentIncident.push(list[index].replaceAll('"', ''))
              listOfIncidents.push(new Incident(currentIncident[0], new Date(date), currentIncident[3], currentIncident[1], currentIncident[2], undefined))
              currentIncident = []
              nbCurrentIncidentElements = 0
          }
      }
      return new Radar(undefined, location, undefined, listOfIncidents);
  }
}