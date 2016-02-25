// Mongodb adatmodell
// Kezeli a megadott táblát. itf
var db;

function setConnection( mongo_db ) {
  db = mongo_db;
}

// Kollekció modell
var Itf = mongoose.model( 'itf' , {
  name : String,
  email : String,
  order: {
    date: Date,
    amount: Number,
    status: String,
    product: String
  }
});

// Adatok olvasása a kollekcióból
function read( where, callBack ) {
  Itf.find( where, function( err, data){
    if ( err ) {
      console.error( 'Error in query: ', where );
      callBack( {} )
    }
    else {
      callBack( data );
    }
  });
}

//Publikus elemek
module.exports = {
  setConnectio: setConnection
};
