import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "my first dataset",
      backgroundColor: "rgb(255,99,132)",
      borderColor: "rgb(255,99,132)",
      data: [0, 10, 5, 2, 20, 30, 45]
    }
  ]
};
function LineChart() {
  return (
    <div className="bg-white border border-secondary">
      <Line data={data}></Line>
    </div>
  );
}
export default LineChart;
