import { RadarFactory } from "../entities/Radar/RadarFactory";
import { IncidentsList } from "../entities/Incident/IncidentsList";
import { AwesomeRadarAdapter } from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarAdapter";
import { B612Adapter } from "../entities/Adapter/Radar/B612Adapter/B612Adapter";
import { Reporter2000Adapter } from "../entities/Adapter/Radar/Reporter2000Adapter/Reporter2000Adapter";
import AwesomeRadarAdapterExample from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarExample.json";

describe('IncidentsList', () => {




    it('should register all incidents in IncidentsList from a radar', () => {
        const myRadarFactory = new RadarFactory([
            new AwesomeRadarAdapter(),
            new B612Adapter(),
            new Reporter2000Adapter()
        ]);

        
        
         
        var myRadar  = myRadarFactory.createRadarFromObject(AwesomeRadarAdapterExample); //JSON 

        const myIncidentsList = new IncidentsList();
        myIncidentsList.addAllIncidentsFromRadar(myRadar);
        
        expect(myIncidentsList.containsIncident(reportOfRadar));

    });

    it('the radar factory should create a radar', () => {
        const myRadarFactory = new RadarFactory([
            new AwesomeRadarAdapter(),
            new B612Adapter(),
            new Reporter2000Adapter()
        ]);


        
        var myRadar  = myRadarFactory.createRadarFromObject(AwesomeRadarAdapterExample); //JSON 
    
        expect(myRadar.name == "")

    })

});