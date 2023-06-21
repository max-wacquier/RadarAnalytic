import { Incident } from "../../Incident/Incident";
import { Radar } from "../../Radar/Radar";

export interface IRadarAdapter {
    formatIsSupported: (format: string) => boolean;
    createRadar: (format: string) => Radar; 
}