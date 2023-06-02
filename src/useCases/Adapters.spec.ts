import { AwesomeRadarAdapter } from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarAdapter";
import exemple from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarExample.json";

describe('Testing the adapters ', () => {


    it('Checking if the radar format is supported by the adapter', () => {
        const isSupported = new AwesomeRadarAdapter().formatIsSupported(JSON.stringify(exemple))
        expect(isSupported).toBe(true);
    });

});