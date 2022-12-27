// import Chart from "chart.js";
console.log("This is working ");

// var part = ["Mouse", "Keyboard", "Monitor", "MohtheBoard"];
// var values = [10, 20, 5, 5];
// var pieColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

// new Chart("myChart", {
//   type: "pie",
//   data: {
//     labels: part,
//     datasets: [{ backgroundColor: pieColors, data: values }],
//   },
//   options: {
//     title: {
//       display: true,
//       text: "Inventory",
//     },
//   },
// });
var xValues = ["Monitor", "Keyboard", "Mouse", "Cabinet", "Motheboard"];
var yValues = [10, 8, 8, 2, 2];
var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Inventory",
    },
  },
});
