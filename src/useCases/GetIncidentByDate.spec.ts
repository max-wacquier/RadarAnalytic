describe('Testing the recuperation of incidents by date ', () => {
    const myRadar = ''
    let incidents: any[];

    beforeEach(()=> {
        incidents = new IncidentsList(myRadar);
    })

    it('Return incidents by date', () => {
        let incidentsByDate: any[]
        incidentsByDate = incidents.getAllIncidentsWhichHaveTheSameDate(date)
        expect(incidents[0].date).toContain(date);
    });
});