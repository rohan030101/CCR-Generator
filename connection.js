// var sql = require("mssql");
//     var dbconfig = {
//       server: "localhost\\SQLEXPRESS",
//       database: "testing",
//       user: "Rohan",
//       password: "Database@030101",
//       port: 1433,
//       trustServerCertificate: true,
//     };
// }
// function getemp() {
//   var conn = new sql.ConnectionPool(dbconfig);
//   var req = new sql.Request(conn);

// const { exit } = require("process");

//   conn.connect(function (err) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     req.query("SELECT * from tblPatient", function (err, recordset) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(recordset);
//       }
//       conn.close();
//     });
//   });
// }

// getemp();
var sql = require("mssql");
var checkDatabase =
  "IF EXISTS(SELECT * FROM master.sys.sysdatabases WHERE name='CCR Database') BEGIN PRINT 'Database Exists' END";
// var display = "SELECT * FROM [CCR_Database].[dbo].[CCR_Datavar

var display =
  "SELECT TOP (1000) [CCR_NO],[date],[Emp_name],[Dept],[Cmp_Serial],[Eqp_detls],[Call_Status],[Remark] FROM [CCR Database].[dbo].[CCR_Data]";
var push =
  "INSERT into [CCR_Database].[dbo].[CCR_Data] (CCR_No,Emp_name,Dept,Cmp_Serial,Eqp_detls,Call_Status,Remark) VALUES (1,'ABC','IT',1234,'BNM','QWER','TYUI');";
var dbconfig = {
  server: "localhost\\SQLEXPRESS",
  database: "testing",
  user: "Rohan",
  password: "Database@030101",
  port: 1433,
  trustServerCertificate: true,
};
var conn = new sql.ConnectionPool(dbconfig);
var req = new sql.Request(conn);

conn.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connection Sucess.");
  conn.query(
    "INSERT into [CCR Database].[dbo].[CCR_Data] (CCR_No,Emp_name,Dept,Cmp_Serial,Eqp_detls,Call_Status,Remark) VALUES (1,'ABC','IT',1234,'BNM','QWER','TYUI');",
    (err, result) => {
      console.log(result);
      console.log(err);
    }
  );
});
