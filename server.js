const express = require("express");
const app = express();



app.get("/", function(request, response){
    response.send("<h1>Главная страница</h1>");

});
app.use("/json", function(request, response){
    const serializerJSON = new SerializerJSON();
    let name = request.query.name;
    let gender = request.query.gender;
    let age = request.query.age;
    let json = serializerJSON.getString(name, gender, age);
    // console.log(json+'  '+ json.name+'  '+json.age);
    response.send(json);
});
app.use("/csv", function(request, response){
    const serializerCSV = new SerializerCSV();
    let name = request.query.name;
    let gender = request.query.gender;
    let age = request.query.age;
    let csv = serializerCSV.getString(name, gender, age);
    response.send(csv);
});
app.use("/yaml", function(request, response){
    const serializerYAML = new SerializerYAML();
    let name = request.query.name;
    let gender = request.query.gender;
    let age = request.query.age;
    let yaml = serializerYAML.getString(name, gender, age);
    response.send(yaml);
});
app.use("/xml", function(request, response){
    const serializerXML = new SerializerXML();
    let name = request.query.name;
    let gender = request.query.gender;
    let age = request.query.age;
    let xml = serializerXML.getString(name, gender, age);
    response.send(xml);
});
app.listen(3009);

// http://localhost:3009/json?name=Vasya&gender=male&age=12
//    http://localhost:3009/csv?name=VasyaCSV&gender=male&age=12
//    http://localhost:3009/yaml?name=VasyaYAML&gender=male&age=12
//    http://localhost:3009/xml?name=VasyaXML&gender=male&age=12


function Serializer() {}
Serializer.prototype.getString = function (object) {};

function SerializerJSON() {
    Serializer.apply(this,arguments);
}
SerializerJSON.prototype = Object.create(Serializer.prototype);
SerializerJSON.prototype.constructor = SerializerJSON;

SerializerJSON.prototype.getString = function (n, g, a) {
   let json = {
       name: n,
       gender: g,
       age: a
   };
  return json;
};
function SerializerCSV() {
    Serializer.apply(this,arguments);
}
SerializerCSV.prototype = Object.create(Serializer.prototype);
SerializerCSV.prototype.constructor = SerializerCSV;

SerializerCSV.prototype.getString = function (n, g, a) {
    let csv = [{"name": n, "gender": g, "age": a}];
    // name,VasyaYAML
    // gender,male
    // age,12
    return csv;
};
function SerializerYAML() {
    Serializer.apply(this,arguments);
}
SerializerYAML.prototype = Object.create(Serializer.prototype);
SerializerYAML.prototype.constructor = SerializerYAML;

SerializerYAML.prototype.getString = function (n, g, a) {
    let yaml = {"name": n, "gender": g, "age": a};
    return yaml;
};
function SerializerXML() {
    Serializer.apply(this,arguments);
}
SerializerXML.prototype = Object.create(Serializer.prototype);
SerializerXML.prototype.constructor = SerializerXML;

SerializerXML.prototype.getString = function (n, g, a) {
    let xml = '<?xml version="1.0" encoding="UTF-8" ?>'+
'<name>'+n+'</name>'+
    '<gender>'+g+'</gender>'
    +'<age>'+a+'<age>';
    return xml;
};

module.exports.SerializerXML = SerializerXML;
module.exports.SerializerJSON = SerializerJSON;
module.exports.SerializerYAML = SerializerYAML;
module.exports.SerializerCSV = SerializerCSV;