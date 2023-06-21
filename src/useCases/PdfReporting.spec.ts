import { AwesomeRadarAdapter } from "../Domain/entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarAdapter";
import { B612Adapter } from "../Domain/entities/Adapter/Radar/B612Adapter/B612Adapter";
import { Reporter2000Adapter } from "../Domain/entities/Adapter/Radar/Reporter2000Adapter/Reporter2000Adapter";
import { IncidentsList } from "../Domain/entities/Incident/IncidentsList";
import { RadarFactory } from "../Domain/entities/Radar/RadarFactory";
import AwesomeRadarAdapterExample from "../Domain/entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarExample.json";
import B612Example from "../Domain/entities/Adapter/Radar/B612Adapter/B612Example.json";
import { FrenchEtatIncidentReporting } from "../Infra/Reporting/Adapter/FrenchEtat/FrenchEtatIncidentReporting";
import { PdfMeFactory } from "../Infra/Pdf/PdfMeFactory";
import * as fs from 'fs';
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
describe('Test the generation of pdf reporting ', () => {
    beforeAll(() => {
        if (fs.existsSync("generated/test.pdf")) {
            console.log("Deleting old test.pdf")
            fs.rmSync("generated/test.pdf", { recursive: true, force: true});
        } 
    });

    it('Checking if we can generate pdf reporting contening a lisf of incident', () => {
        const myRadarFactory = new RadarFactory([
            new AwesomeRadarAdapter(),
            new B612Adapter()
            
        ]);
        
        var myRadarAwesomeExample  = myRadarFactory.createRadarFromObject(JSON.stringify(AwesomeRadarAdapterExample)); //JSON 
        var myRadarB612Example  = myRadarFactory.createRadarFromObject(JSON.stringify(B612Example)); //JSON 

        const myIncidentsList = new IncidentsList();
        myIncidentsList.addAllIncidentsFromRadar(myRadarAwesomeExample);
        myIncidentsList.addAllIncidentsFromRadar(myRadarB612Example);

        var newDocument = new FrenchEtatIncidentReporting().getDocumentFormat();
        var temp = new PdfMeFactory();
        temp.generatePdfMeReporting(newDocument)
        
        
        expect(temp.generatePdfReporting("generated/test.pdf")).toBe("generated/test.pdf");
       
    });
  
})