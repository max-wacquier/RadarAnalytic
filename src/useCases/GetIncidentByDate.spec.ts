describe('Testing the recuperation of incidents by date ', () => {
    const myIncidentsList = new IncidentsList()
    const date = '2023:06:01'

    it('Getting incidents by date', () => {
        const incidentsByDate = myIncidentsList.getAllIncidentsWhichHaveTheSameDate(date)
        expect(incidentsByDate[0].date).toBe(date);
    });
});