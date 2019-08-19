const json = require("../server.js").SerializerJSON;
const csv = require("server.js").SerializerCSV;
const yaml = require("server.js").SerializerYAML;
const xml = require("server.js").SerializerXML;

const serializerJSON = new json();
const serializerCSV = new csv();
const serializerYAML = new yaml();
const serializerXML = new xml();

serializerYAML.
describe("serializerJSON", () => {
    it('\'vasya\', \'male\', 12', function () {
        const act = serializerJSON.getString('vasya', 'male', 12);
        const exp = {"name":"Vasya","gender":"male","age":"12"};
        assert.equal(act, exp);
    });
});
describe("serializerCSV", () => {
    it('\'vasya\', \'male\', 12', function () {
        const act = serializerCSV.getString('vasya', 'male', 12);
        const exp = [{"name":"VasyaCSV","gender":"male","age":"12"}];
        assert.equal(act, exp);
    });
});
describe("serializerYAML", () => {
    it('\'vasya\', \'male\', 12', function () {
        const act = serializerYAML.getString('vasya', 'male', 12);
        const exp = {"name":"VasyaYAML","gender":"male","age":"12"};
        assert.equal(act, exp);
    });
});
describe("serializerXML", () => {
    it('\'vasya\', \'male\', 12', function () {
        const act = serializerXML.getString('vasya', 'male', 12);
        const exp = 'VasyaXMLmale12';
        assert.equal(act, exp);
    });
});