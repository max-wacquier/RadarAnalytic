import { RadarFactory } from "../entities/Factories/RadarFactory";
import { IncidentsList } from "../entities/IncidentsList";
import { AwesomeRadarAdapter } from "../entities/adapters/AwesomeRadarAdapter/AwesomeRadarAdapter";
import { B612Adapter } from "../entities/adapters/B612Adapter/B612Adapter";

import { Reporter2000Adapter } from "../entities/adapters/Reporter2000Adapter/Reporter2000Adapter";


describe('IncidentsList', () => {




    it('should register all incidents in IncidentsList from a radar', () => {
        const myRadarFactory = new RadarFactory([
            new AwesomeRadarAdapter(),
            new B612Adapter(),
            new Reporter2000Adapter()
        ]);

        const reportOfRadar = "data/AwesomeRadar.json"

         
        var myRadar  = myRadarFactory.createRadarWithFile(reportOfRadar); //JSON 

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

        const reportOfRadar = "data/AwesomeRadar.json"

         
        var myRadar  = myRadarFactory.createRadarWithFile(reportOfRadar); //JSON 
        myRadar.name = ""

    })

});