function generate_ccr() {
  var ccr_no = document.getElementById("ccr_no").value;
  var date = document.getElementById("dt").value;
  var emp_name = document.getElementById("employee_name").value;
  var dept = document.getElementById("department").value;
  var cmp_serial = document.getElementById("cmp_serial").value;
  var eqp_details = document.getElementById("eqp_details").value;
  var call_status = document.getElementById("call_status").value;
  var remark = document.getElementById("remark").value;
  var change = document.getElementById("preview");

  console.log(ccr_no);
  console.log(date);
  console.log(emp_name);
  console.log(dept);
  console.log(cmp_serial);
  console.log(eqp_details);
  console.log(call_status);
  console.log(remark);
}

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  // console.log(dd);
  var mm = today.getMonth() + 1; //January is 0!
  // console.log(mm);
  var yyyy = today.getFullYear();
  // console.log(yyyy);

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = dd + "-" + mm + "-" + yyyy;
  // console.log(today);
  document.getElementById("dt").value = today;
}

window.onload = function () {
  getDate();
};
