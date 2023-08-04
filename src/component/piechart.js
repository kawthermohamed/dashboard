import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "my first dataset",
      backgroundColor: "rgb(255,99,132)",
      borderColor: "rgb(150,50,130)",
      data: [0, 10, 5, 2, 20, 30, 45]
    }
  ]
};
function PieChart() {
  return (
    <div className="bg-white border border-secondary">
      <Pie data={data}></Pie>
    </div>
  );
}
export default PieChart;
