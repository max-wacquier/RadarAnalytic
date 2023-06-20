import { AwesomeRadarAdapter } from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarAdapter";
import AwesomeRadarexemple from "../entities/Adapter/Radar/AwesomeRadarAdapter/AwesomeRadarExample.json";
import { B612Adapter } from "../entities/Adapter/Radar/B612Adapter/B612Adapter";
import  B612Example from "../entities/Adapter/Radar/B612Adapter/B612Example.json";
import { Reporter2000Adapter } from "../entities/Adapter/Radar/Reporter2000Adapter/Reporter2000Adapter";
import * as fs from 'fs';
const Reporter2000Exemple = fs.readFileSync('src\\entities\\Adapter\\Radar\\Reporter2000Adapter\\Reporter2000Example.xml', {encoding: 'utf-8'});

describe('Testing the adapters ', () => {

    it('Checking if the radar AwesomeRadar format is supported by the adapter', () => {
        const isSupported = new AwesomeRadarAdapter().formatIsSupported(JSON.stringify(AwesomeRadarexemple))
        expect(isSupported).toBe(true);
    });

    it('Checking if the radar B612 format is supported by the adapter', () => {
        const isSupported = new B612Adapter().formatIsSupported(JSON.stringify(B612Example))
        expect(isSupported).toBe(true);
    });

    it('Checking if the radar Reporter2000 format is supported by the adapter', () => {
        const isSupported = new Reporter2000Adapter().formatIsSupported(Reporter2000Exemple)
        expect(isSupported).toBe(true);
    });

});