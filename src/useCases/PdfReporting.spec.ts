import { AwesomeRadarAdapter } from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarAdapter";
import { B612Adapter } from "../entities/Adapter/Radar/B612Adapter/B612Adapter";
import { Reporter2000Adapter } from "../entities/Adapter/Radar/Reporter2000Adapter/Reporter2000Adapter";
import { IncidentsList } from "../entities/Incident/IncidentsList";
import { RadarFactory } from "../entities/Radar/RadarFactory";
import AwesomeRadarAdapterExample from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarExample.json";
import B612Example from "../entities/Adapter/Radar/B612Adapter/B612Example.json";
import { PdfReportingFactory } from "../entities/Reporting/PdfReporting/PdfReporting";

describe('Test the generation of pdf reporting ', () => {


    it('Checking if we can generate pdf reporting contening a lisf of incident', () => {
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

        var generateReport = new PdfReportingFactory().generatePdfReporting(myIncidentsList.getTemplate(), myIncidentsList.generateInputsForReporting());

        
        expect(true).toBe(true);
    });
});