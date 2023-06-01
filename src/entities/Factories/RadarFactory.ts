import { NoAdapterFound } from '../../errors/NoAdapterFound';
import { IRadarAdapter } from '../../interfaces/IRadarAdapter';
import * as fs from 'fs';

export class RadarFactory {

    ListOfRadarAdapter : Array<IRadarAdapter> = new Array<IRadarAdapter>

    constructor(ArrayofAdapter: IRadarAdapter[]) {
        ArrayofAdapter.forEach(element => {
            this.ListOfRadarAdapter.push(element)
    });
    }

    createRadarWithString(content : string){
        this.ListOfRadarAdapter.forEach(RadarAdapter => {
            if (RadarAdapter.formatIsSupported(content)) {
                return RadarAdapter.createRadar(content)
            } else {
                throw new NoAdapterFound()
            }
            
        });
    }

    createRadarWithFile(filePath: string) {
       var contentOfFile = fs.readFileSync('data/AwesomeRadar.json','utf8')
       return this.createRadarWithString(contentOfFile);
    }

}
