import { RadarFactory } from "../entities/Radar/RadarFactory";
import { IncidentsList } from "../entities/Incident/IncidentsList";
import { AwesomeRadarAdapter } from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarAdapter";
import { B612Adapter } from "../entities/Adapter/Radar/B612Adapter/B612Adapter";
import { Reporter2000Adapter } from "../entities/Adapter/Radar/Reporter2000Adapter/Reporter2000Adapter";
import AwesomeRadarAdapterExample from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarExample.json";
import B612Example from "../entities/Adapter/Radar/B612Adapter/B612Example.json";
import * as fs from 'fs';
const Reporter2000Example = fs.readFileSync('src\\entities\\Adapter\\Radar\\Reporter2000Adapter\\Reporter2000Example.xml', {encoding: 'utf-8'});

describe('IncidentsList', () => {

    it('the radar factory should create a radar from awesomeRadar example', () => {
        const myRadarFactory = new RadarFactory([
            new AwesomeRadarAdapter(),
            new B612Adapter(),
            new Reporter2000Adapter()
        ]);
        
        var myRadar  = myRadarFactory.createRadarFromObject(JSON.stringify(AwesomeRadarAdapterExample)); //JSON 
        console.log(myRadar);
        expect(myRadar.name).toBe(undefined)
        expect(myRadar.location).toBe("Lyon 7e")
        expect(myRadar.speedThreshold).toBe(90)
        expect(myRadar.incidents.length).toBe(3)
    });

    it('the radar factory should create a radar from B612 example', () => {
        const myRadarFactory = new RadarFactory([
            new AwesomeRadarAdapter(),
            new B612Adapter(),
            new Reporter2000Adapter()
        ]);
        
        var myRadar  = myRadarFactory.createRadarFromObject(JSON.stringify(B612Example)); //JSON 
        
        expect(myRadar.name).toBe("B612")
        expect(myRadar.location).toBe("Lyon 7e")
        expect(myRadar.speedThreshold).toBe(undefined)
        expect(myRadar.incidents.length).toBe(3)

    });

    it('the radar factory should create a radar from Reporter2000 example', () => {
        const myRadarFactory = new RadarFactory([
            new AwesomeRadarAdapter(),
            new B612Adapter(),
            new Reporter2000Adapter()
        ]);
        
        var myRadar  = myRadarFactory.createRadarFromObject(Reporter2000Example); //XML 
        
        expect(myRadar.name).toBe(undefined)
        expect(myRadar.location).toBe("Lyon 7e")
        expect(myRadar.speedThreshold).toBe(undefined)
        expect(myRadar.incidents.length).toBe(3)

    });

    it('should register all incidents in IncidentsList from radars', () => {
        const myRadarFactory = new RadarFactory([
            new AwesomeRadarAdapter(),
            new B612Adapter(),
            new Reporter2000Adapter()
        ]);
         
        var myRadarAwesomeExample  = myRadarFactory.createRadarFromObject(JSON.stringify(AwesomeRadarAdapterExample)); //JSON 
        var myRadarB612Example  = myRadarFactory.createRadarFromObject(JSON.stringify(B612Example)); //JSON 
        var myRadarReporter2000Example  = myRadarFactory.createRadarFromObject((Reporter2000Example)); //XML 

        const myIncidentsList = new IncidentsList();
        myIncidentsList.addAllIncidentsFromRadar(myRadarAwesomeExample);
        myIncidentsList.addAllIncidentsFromRadar(myRadarB612Example);
        myIncidentsList.addAllIncidentsFromRadar(myRadarReporter2000Example);
        
        expect(myIncidentsList.incidentList.length).toBe(9);

    });

});