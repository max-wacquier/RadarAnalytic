export class Incident {
    licencePlate: string;
    date: Date;
    speed?: string;
    type?: string;
    brand?: string;
    evidenceUrl?: string;

    constructor(licencePlate: string, date: Date, speed?: string, type?: string, brand?: string, evidenceUrl?: string) {
            this.licencePlate = licencePlate;
            this.date = date;
            this.speed = speed;
            this.type = type;
            this.brand = brand;
            this.evidenceUrl = evidenceUrl;
    }
}