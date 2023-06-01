import { Radar } from '../Radar';
import {RadarAdapterManager} from '../RadarAdapterManager';
import * as fs from 'fs';
export class RadarFactory {

    RadarAdapterManager: RadarAdapterManager;

    constructor(manager: RadarAdapterManager) {
        this.RadarAdapterManager = manager;
    }

    createRadar(filePath: string) {
       var content = fs.readFileSync('data/AwesomeRadar.json','utf8')
       return new Radar(content);
    }

}
