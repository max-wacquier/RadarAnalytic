import { AwesomeRadarAdapter } from "../Domain/entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarAdapter";
import AwesomeRadarexemple from "../Domain/entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarExample.json";
import { B612Adapter } from "../Domain/entities/Adapter/Radar/B612Adapter/B612Adapter";
import  B612Example from "../Domain/entities/Adapter/Radar/B612Adapter/B612Example.json";

describe('Testing the adapters ', () => {


    it('Checking if the radar AwesomeRadar format is supported by the adapter', () => {
        const isSupported = new AwesomeRadarAdapter().formatIsSupported(JSON.stringify(AwesomeRadarexemple))
        expect(isSupported).toBe(true);
    });

    it('Checking if the radar B612 format is supported by the adapter', () => {
        const isSupported = new B612Adapter().formatIsSupported(JSON.stringify(B612Example))
        expect(isSupported).toBe(true);
    });

});