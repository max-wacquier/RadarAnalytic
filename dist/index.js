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
    ],
};
const modelJSON = {
    "metadata": {
        "localisation": "Lyon 7e",
        "speedThreshold": 90
    },
    "incidents": []
};
function compareObjects(object1, object2) {
    for (var i in object1)
        if (!object2.hasOwnProperty(i))
            return false;
    return true;
}
console.log(_.isEqual(remoteJSON, modelJSON));
console.log(_.isEqual(remoteJSON, modelJSON));
console.log(compareObjects(remoteJSON, modelJSON));
