import { Pie } from "react-chartjs-2";
import "../../App.css";
const PieChart = () => {
  // Smoother color codes for the pie chart segments
  const colors = ["#FF5733", "#33FF57", "#3333FF"];

  const data = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: colors,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="PieChart-container w-100 h-64 overflow-hidden">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
