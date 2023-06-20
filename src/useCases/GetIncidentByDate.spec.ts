import { AwesomeRadarAdapter } from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarAdapter";
import { B612Adapter } from "../entities/Adapter/Radar/B612Adapter/B612Adapter";
import { Reporter2000Adapter } from "../entities/Adapter/Radar/Reporter2000Adapter/Reporter2000Adapter";
import { IncidentsList } from "../entities/Incident/IncidentsList";
import { RadarFactory } from "../entities/Radar/RadarFactory";
import AwesomeRadarAdapterExample from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarExample.json";
import B612Example from "../entities/Adapter/Radar/B612Adapter/B612Example.json";
import * as fs from 'fs';
const Reporter2000Example = fs.readFileSync('src\\entities\\Adapter\\Radar\\Reporter2000Adapter\\Reporter2000Example.xml', {encoding: 'utf-8'});

describe('Testing the recuperation of incidents by date ', () => {

    it('Getting incidents by date', () => {

        const myRadarFactory = new RadarFactory([
            new AwesomeRadarAdapter(),
            new B612Adapter(),
            new Reporter2000Adapter()
        ]);
         
        var myRadarAwesomeExample  = myRadarFactory.createRadarFromObject(JSON.stringify(AwesomeRadarAdapterExample)); //JSON 
        var myRadarB612Example  = myRadarFactory.createRadarFromObject(JSON.stringify(B612Example)); //JSON 
        var myRadarReporter2000Example  = myRadarFactory.createRadarFromObject(Reporter2000Example); //XML 

        const myIncidentsList = new IncidentsList();
        myIncidentsList.addAllIncidentsFromRadar(myRadarAwesomeExample);
        myIncidentsList.addAllIncidentsFromRadar(myRadarB612Example);
        myIncidentsList.addAllIncidentsFromRadar(myRadarReporter2000Example);
        
        const incidentsByDate = myIncidentsList.getAllIncidentsWhichHaveTheSameDate(new Date("2023-01-01"));
        expect(incidentsByDate.length).toBe(7);
    });
});