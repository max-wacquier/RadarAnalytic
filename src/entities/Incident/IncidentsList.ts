import { Radar } from "../Radar/Radar";
import { Incident } from "./Incident";

export class IncidentsList {
    
    incidentList : Array<Incident> = new Array();

    constructor(){}

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