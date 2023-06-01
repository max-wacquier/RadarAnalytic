import { Incident } from "../entities/Incident";
import { Radar } from "../entities/Radar";

export interface IRadarAdapter {
    formatIsSupported: (format: string) => boolean;
    createRadar: (format: string) => Radar; 
}