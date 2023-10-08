import { Line } from "react-chartjs-2";
import "../../App.css";

const LineChart = () => {
  // Sample data for the line chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Line Chart Example",
        data: [10, 20, 15, 25, 30], // Data points for the chart
        fill: false, // Fill the area under the line (set to false for just a line)
        borderColor: "#007bff", // Line color
      },
    ],
  };

  // Chart options (you can customize these)
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Values",
        },
      },
    },
  };

  return (
    <div className="w-100 h-64 bg-black px-2 overflow-hidden">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
