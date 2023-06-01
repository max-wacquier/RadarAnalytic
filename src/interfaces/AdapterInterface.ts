import { Incident } from '../entities/Incident'

export interface IRadarAdapter {
    name: string;
    location: string;
    speedThreshold: number;
    incidents: Array<Incident>;
}