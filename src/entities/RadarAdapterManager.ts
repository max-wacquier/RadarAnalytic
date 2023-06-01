import { NoAdapterFound } from "../errors/NoAdapterFound";
import { RadarAdapter } from "./RadarAdapter";

export class RadarAdapterManager {

    ListOfRadarAdapter : Array<RadarAdapter> = new Array<RadarAdapter>

    constructor(ArrayofAdapter: any[] ) {
        ArrayofAdapter.forEach(element => {
            if (element instanceof(RadarAdapter)) {
                this.ListOfRadarAdapter.push(element)
            } else {
                throw new NoAdapterFound();
            }
        });
    }

    getRadarWithGoodAdapteur(content : string){
        this.ListOfRadarAdapter.forEach(RadarAdapter => {
            if (RadarAdapter.formatIsSupported(content)) return RadarAdapter
        });
    }
    

}