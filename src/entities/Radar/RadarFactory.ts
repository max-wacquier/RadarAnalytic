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
        var radar: Radar = new Radar("","",0, [new Incident("", new Date, "","","","")]);
        this.ListOfRadarAdapter.find(RadarAdapter => {
            if (RadarAdapter.formatIsSupported(content)) {
                console.log("le format est supporté !")
                radar = RadarAdapter.createRadar(content)
            } 
        });
        return radar
    }  

    createRadarFromObject(content : Object): Radar  {
        return this.createRadarFromString(content.toString());
    }  

}
