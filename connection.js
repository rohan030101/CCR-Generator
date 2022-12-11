var sql = require("mssql");
var dbconfig = {
  server: "localhost\\SQLEXPRESS",
  database: "testing",
  user: "Rohan",
  password: "Database@030101",
  port: 1433,
  trustServerCertificate: true,
};
function getemp() {
  var conn = new sql.ConnectionPool(dbconfig);
  var req = new sql.Request(conn);

  conn.connect(function (err) {
    if (err) {
      console.log(err);
      return;
    }
    req.query("SELECT * from tblPatient", function (err, recordset) {
      if (err) {
        console.log(err);
      } else {
        console.log(recordset);
      }
      conn.close();
    });
  });
}

getemp();
