import { IncidentsList } from "../entities/IncidentsList";

describe('Testing the recuperation of incidents by date ', () => {
    const myIncidentsList = new IncidentsList()
    const date = '2023:06:01'

    it('Getting incidents by date', () => {
        const incidentsByDate = myIncidentsList.getAllIncidentsWhichHaveTheSameDate()
        // expect(incidentsByDate[0].date).toBe(date);
        expect(incidentsByDate).toBe(date);
    });
});