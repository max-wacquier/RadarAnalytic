import { IRadarAdapter } from "../interfaces/IRadarAdapter";
import { Radar } from "./Radar";

export class RadarAdapterManager {

    ListOfRadarAdapter : Array<IRadarAdapter> = new Array<IRadarAdapter>

    constructor(ArrayofAdapter: IRadarAdapter[] ) {
        ArrayofAdapter.forEach(element => {
                this.ListOfRadarAdapter.push(element)
        });
    }

    getRadarWithGoodAdapteur(content : string){
        this.ListOfRadarAdapter.forEach(RadarAdapter => {
            if (RadarAdapter.formatIsSupported(content)) {


            }
            
            return RadarAdapter
        });
    }
    

}