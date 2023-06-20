import { Radar } from "../Radar/Radar";
import { Incident } from "./Incident";
import { Template, BLANK_PDF } from '@pdfme/generator';
import * as fs from 'fs';
import { XMLHttpRequest } from 'xmlhttprequest-ts';

export class IncidentsList {
    incidentList : Array<Incident> = new Array();
    
    constructor(){}

    generateInputsForReporting() {
        
        var content = fs.readFileSync("./Caricature-Policier-Collection.jpeg", "base64")
        var dataList = ""
        this.incidentList.forEach(incident => {
            dataList = dataList +  "\nPlaque d'immatriculation : "+incident.licencePlate 
        });
        return [{ image: "data:image/jpeg;base64,"+content, Incidents: 'Incidents', field3: dataList }]
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