import { RadarNotSupported } from './Errors/RadarNotSupported';
import { IRadarAdapter } from '../Adapter/Radar/IRadarAdapter';
import * as fs from 'fs';
import { Radar } from './Radar';
import { Incident } from '../Incident/Incident';

export class RadarFactory {

    ListOfRadarAdapter : Array<IRadarAdapter> = new Array<IRadarAdapter>

    constructor(ArrayofAdapter: IRadarAdapter[]) {
        this.ListOfRadarAdapter = ArrayofAdapter
    }

    createRadarFromString(content : string): Radar  {
        var radar= this.ListOfRadarAdapter.find(RadarAdapter => {
            if (RadarAdapter.formatIsSupported(content)) {
                return RadarAdapter.createRadar(content)
            } 
        });
        
        console.log("radar : ", radar)
        return new Radar("","",0, [new Incident("", new Date, "","","","")]); //BOUCHONNAGE MOCHE
       
    }  

    createRadarFromObject(content : Object): Radar  {
        return this.createRadarFromString(content.toString());
       
    }  

    createRadarFromFile(filePath: string): Radar {
       var contentOfFile = fs.readFileSync(filePath,'utf8')
       console.log("Report :" + contentOfFile)
       return this.createRadarFromString(contentOfFile);
    }

}
