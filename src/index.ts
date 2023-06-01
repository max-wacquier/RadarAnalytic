import _ from "lodash";

// console.log("Hello world!");

const remoteJSON = {
    "metadata": {
      "localisation": "Lyon 7e",
      "speedThreshold": 90
    },
    "incidents": [
      ["BH-686-AM", "2023-01-01T00:00:00Z"],
      ["BH-686-AM", "2023-01-01T00:00:00Z"],
      ["BH-686-AM", "2023-01-01T00:00:00Z"]
    ]
  };

const modelJSON = {
    "metadata": {
      "localisation": "Lyon 8e",
      "speedThreshold": 80
    },
    "incidents": [
      ["BH-686-AM", "2023-05-01T00:00:00Z"],
      ["BJ-686-AM", "2023-01-01T00:00:00Z"],
      ["BH-686-AM", "2023-06-01T00:00:00Z"]
    ]
  };
    
console.log( _.isEqual(remoteJSON, modelJSON) );