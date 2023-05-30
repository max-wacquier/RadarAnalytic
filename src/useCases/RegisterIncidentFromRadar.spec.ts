describe('IncidentsList', () => {

    it('should register all incidents in IncidentsList from a radar', () => {

        const ListOfAdapter = new ListOfAdaptateur ([
            new AwesomeRadarAdaptateur(),
            new R2D2Adaptateur(),
            new Reporteur2000Adaptateur()
        ])

        const myRadarFactory = new RadarFactory(ListOfAdapter);

        const reportOfRadar = {
            "metadata": {
              "localisation": "Lyon 7e",
              "speedThreshold": 90,
            },
            "incidents": [
              ["BH-686-AM", "2023-01-01T00:00:00Z"],
              ["BH-686-AM", "2023-01-01T00:00:00Z"],
              ["BH-686-AM", "2023-01-01T00:00:00Z"]
            ]
          }

        const myRadar = myRadarFactory.createRadar(reportOfRadar); //JSON 

        const myIncidentsList = new IncidentsList();
        myIncidentsList.addAllIncidentsFromRadar(myRadar);
        
        expect(myIncidentsList.containsIncident(reportOfRadar));

    });

});