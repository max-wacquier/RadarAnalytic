import { RadarFactory } from "../entities/Factories/RadarFactory";
import { AwesomeRadarAdapter } from "../entities/adapters/AwesomeRadarAdapter";
import { B612Adapter } from "../entities/adapters/B612Adapter";

import { Reporter2000Adapter } from "../entities/adapters/Reporter2000Adapter";

import { IncidentsList } from "../entities/IncidentsList";


describe('IncidentsList', () => {

    it('should register all incidents in IncidentsList from a radar', () => {
        const myRadarFactory = new RadarFactory([
            new AwesomeRadarAdapter(),
            new B612Adapter(),
            new Reporter2000Adapter()
        ]);

        const reportOfRadar = "data/AwesomeRadar.json"

        const myRadar = myRadarFactory.createRadarWithFile(reportOfRadar); //JSON 

        const myIncidentsList = new IncidentsList();
        myIncidentsList.addAllIncidentsFromRadar(myRadar);
        
        expect(myIncidentsList.containsIncident(reportOfRadar));

    });

});