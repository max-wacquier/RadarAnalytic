export class RadarFactory {
    type: string;
    name: string;
    localisation: string;
    speedThreshold: number;
    

    constructor(type: string, name: string, localisation: string, speedThreshold: number) {
        this.type = type;
        this.name = name;
        this.localisation = localisation;
        this.speedThreshold = speedThreshold;
    }

    createRadar(reportOfRadar) {
       const data = JSON.parse(reportOfRadar);

       const radarLocalisation = data.metadata.localisation;
       const radarSpeedThreshold = data.metadata.speedThreshold;
       const radarIncidents = data.metadata.incidents;

       const radar = [];
       radar.push(radarLocalisation);
       radar.push(radarSpeedThreshold);
       radar.push(radarIncidents);

       return radar;
    }
    
}