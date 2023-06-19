import { Radar } from "../Radar/Radar";
import { Incident } from "./Incident";
import { Template, BLANK_PDF } from '@pdfme/generator';
import * as fs from 'fs';
import { XMLHttpRequest } from 'xmlhttprequest-ts';

export class IncidentsList {
    incidentList : Array<Incident> = new Array();
    
    template: Template = {
        basePdf: BLANK_PDF,
        schemas: [
          {
            Incidents: {
              type: "text",
              position: {
                x: 77.06,
                y: 132.2
              },
              width: 61.73,
              height: 14.94,
              alignment: "center",
              fontSize: 29,
              characterSpacing: 0,
              lineHeight: 1,
              fontName: "Roboto"
            },
            image: {
              type: "image",
              position: {
                x: 4.5,
                y: 3.97
              },
              width: 47.7,
              height: 65.96
            },
            field3: {
              type: "text",
              position: {
                x: 42.86,
                y: 160.87
              },
              width: 350,
              height: 7,
              alignment: "left",
              fontSize: 13,
              characterSpacing: 0,
              lineHeight: 1,
              fontName: "Roboto"
            }
          }
        ]
    };

    constructor(){}

    generateInputsForReporting() {
        
        var content = fs.readFileSync("./Caricature-Policier-Collection.jpeg", "base64")
        var dataList = ""
        this.incidentList.forEach(incident => {
            dataList = dataList +  "\nPlaque d'immatriculation : "+incident.licencePlate 
        });
        return [{ image: "data:image/jpeg;base64,"+content, Incidents: 'Incidents', field3: dataList }]
    }

    getTemplate() {
        return this.template
    }
    
    

    addAllIncidentsFromRadar(newRadar: Radar){
        newRadar.incidents.forEach(incident => {
            this.incidentList.push(incident)
        })
    }

    containsIncident(content: Object){
        return false
    }

    getAllIncidentsWhichHaveTheSameDate(date: Date) : Array<Incident> {
        var allIncidents = new Array<Incident>()

        this.incidentList.forEach(element => {
            if (date.getDay() === element.date.getDay() &&
            date.getFullYear() === element.date.getFullYear() &&
            date.getMonth() === element.date.getMonth()) {
                allIncidents.push(element)
            }
        });
        return allIncidents
    }
}