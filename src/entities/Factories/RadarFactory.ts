import { NoAdapterFound } from '../../errors/NoAdapterFound';
import { IRadarAdapter } from '../../interfaces/IRadarAdapter';
import * as fs from 'fs';
import { Radar } from '../Radar';

export class RadarFactory {

    ListOfRadarAdapter : Array<IRadarAdapter> = new Array<IRadarAdapter>

    constructor(ArrayofAdapter: IRadarAdapter[]) {
        ArrayofAdapter.forEach(element => {
            this.ListOfRadarAdapter.push(element)
    });
    }

    createRadarWithString(content : string): Radar  {
        try{
            this.ListOfRadarAdapter.forEach(RadarAdapter => {
                if (RadarAdapter.formatIsSupported(content)) {
                    return RadarAdapter.createRadar(content)
                } 
            });
            throw new NoAdapterFound();
        } catch (e){
            throw new Error()
            
        }
                
    }

    createRadarWithFile(filePath: string): Radar {
       var contentOfFile = fs.readFileSync('data/AwesomeRadar.json','utf8')
       return this.createRadarWithString(contentOfFile);
    }

}
