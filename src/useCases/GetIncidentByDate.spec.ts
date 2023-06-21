import { AwesomeRadarAdapter } from "../Domain/entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarAdapter";
import { B612Adapter } from "../Domain/entities/Adapter/Radar/B612Adapter/B612Adapter";
import { Reporter2000Adapter } from "../Domain/entities/Adapter/Radar/Reporter2000Adapter/Reporter2000Adapter";
import { IncidentsList } from "../Domain/entities/Incident/IncidentsList";
import { RadarFactory } from "../Domain/entities/Radar/RadarFactory";
import AwesomeRadarAdapterExample from "../Domain/entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarExample.json";
import B612Example from "../Domain/entities/Adapter/Radar/B612Adapter/B612Example.json";

describe('Testing the recuperation of incidents by date ', () => {

    it('Getting incidents by date', () => {

        const myRadarFactory = new RadarFactory([
            new AwesomeRadarAdapter(),
            new B612Adapter()
        ]);
         
        var myRadarAwesomeExample  = myRadarFactory.createRadarFromObject(JSON.stringify(AwesomeRadarAdapterExample)); //JSON 
        var myRadarB612Example  = myRadarFactory.createRadarFromObject(JSON.stringify(B612Example)); //JSON 

        const myIncidentsList = new IncidentsList();
        myIncidentsList.addAllIncidentsFromRadar(myRadarAwesomeExample);
        myIncidentsList.addAllIncidentsFromRadar(myRadarB612Example);
        


        const incidentsByDate = myIncidentsList.getAllIncidentsWhichHaveTheSameDate(new Date("2023-01-01"));
        expect(incidentsByDate.length).toBe(4);
    });
});