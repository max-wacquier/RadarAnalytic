import { RadarFactory } from "../entities/Radar/RadarFactory";
import { IncidentsList } from "../entities/Incident/IncidentsList";
import { AwesomeRadarAdapter } from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarAdapter";
import { B612Adapter } from "../entities/Adapter/Radar/B612Adapter/B612Adapter";
import { Reporter2000Adapter } from "../entities/Adapter/Radar/Reporter2000Adapter/Reporter2000Adapter";
import AwesomeRadarAdapterExample from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarExample.json";
import B612Example from "../entities/Adapter/Radar/B612Adapter/B612Example.json";

describe('IncidentsList', () => {


    it('the radar factory should create a radar from awesomeRadar example', () => {
        const myRadarFactory = new RadarFactory([
            new AwesomeRadarAdapter(),
            new B612Adapter(),
            new Reporter2000Adapter()
        ]);
        
        var myRadar  = myRadarFactory.createRadarFromObject(JSON.stringify(AwesomeRadarAdapterExample)); //JSON 
        expect(myRadar.name).toBe(undefined)
        expect(myRadar.location).toBe("Lyon 7e")
        expect(myRadar.speedThreshold).toBe(90)
        expect(myRadar.incidents.length).toBe(3)

    })

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

    })

    it('should register all incidents in IncidentsList from a radar', () => {
        const myRadarFactory = new RadarFactory([
            new AwesomeRadarAdapter(),
            new B612Adapter(),
            new Reporter2000Adapter()
        ]);
         
        var myRadarAwesomeExample  = myRadarFactory.createRadarFromObject(JSON.stringify(AwesomeRadarAdapterExample)); //JSON 
        var myRadarB612Example  = myRadarFactory.createRadarFromObject(JSON.stringify(B612Example)); //JSON 

        const myIncidentsList = new IncidentsList();
        myIncidentsList.addAllIncidentsFromRadar(myRadarAwesomeExample);
        myIncidentsList.addAllIncidentsFromRadar(myRadarB612Example);
        
        expect(myIncidentsList.incidentList.length).toBe(6);

    });

    

});