
describe('IncidentsList', () => {

    it('should register all incidents in IncidentsList from a radar', () => {

        const ListOfAdapter = new AdapterManager ([
            new AwesomeRadarAdaptateur(),
            new R2D2Adaptateur(),
            new Reporteur2000Adaptateur()
        ])

        const myRadarFactory = new RadarFactory(ListOfAdapter);

        const reportOfRadar = "data/AwesomeRadar.json"

        const myRadar = myRadarFactory.createRadar(reportOfRadar); //JSON 

        const myIncidentsList = new IncidentsList();
        myIncidentsList.addAllIncidentsFromRadar(myRadar);
        
        expect(myIncidentsList.containsIncident(reportOfRadar));

    });

});