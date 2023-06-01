import { Incident } from "../entities/Incident";

export interface IRadar {
    name: string;
    location: string;
    speedThreshold: number;
    incidents: Array<Incident>;
}