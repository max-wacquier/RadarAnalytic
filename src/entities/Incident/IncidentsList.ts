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

    getAllIncidentsWhichHaveTheSameDate(){
        
    }
}