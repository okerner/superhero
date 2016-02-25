// Mongodb adatmodell
// Kezeli a megadott táblát. itf
var db;

function setConnection( mongo_db ) {
  db = mongo_db;
}



//Publikus elemek
module.exports = {
  setConnectio: setConnection
};
