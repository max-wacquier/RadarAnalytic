export class NoAdapterFound extends Error{
    constructor() {
        super()
        Object.setPrototypeOf(this, NoAdapterFound.prototype);
    }

  getErrorMessage() {
    return 'No radar adapter found for this radar: ' + this.message;
  }
}