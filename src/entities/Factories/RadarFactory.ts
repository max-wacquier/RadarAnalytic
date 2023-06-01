import { RadarAdapter } from '../RadarAdapter';
import {RadarAdapterManager} from '../RadarAdapterManager';
import * as fs from 'fs';
export class RadarFactory {

    RadarAdapterManager: RadarAdapterManager;

    constructor(manager: RadarAdapterManager) {
        this.RadarAdapterManager = manager;
    }

    createRadar(filePath: string) {
       var contentOfFile = fs.readFileSync('data/AwesomeRadar.json','utf8')
       return this.getRadarWithGoodAdapter(contentOfFile);
    }

    getRadarWithGoodAdapter(content: string){
        return this.RadarAdapterManager.getRadarWithGoodAdapteur(content)
    }

}
