export class RadarNotSupported extends Error{
    constructor() {
        super()
        Object.setPrototypeOf(this, RadarNotSupported.prototype);
    }

  getErrorMessage() {
    return 'No radar adapter found for this radar: ' + this.message;
  }
}