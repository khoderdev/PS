import { Bar } from "react-chartjs-2";

const BarChart = () => {
  // Sample data for the bar chart
  const barChartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Traffic",
        data: [30, 45, 62, 65, 61],
        backgroundColor: [
          "rgba(63, 81, 181, 0.5)",
          "rgba(77, 182, 172, 0.5)",
          "rgba(66, 133, 244, 0.5)",
          "rgba(156, 39, 176, 0.5)",
          "rgba(233, 30, 99, 0.5)",
        ],
      },
    ],
  };

  // Configuration options for the bar chart
  const barChartOptions = {
    scales: {
      x: {
        type: "category", // Use 'category' scale for X-axis
        ticks: {
          color: "#4285F4",
        },
      },
      y: {
        ticks: {
          color: "#f44242",
        },
      },
    },
  };

  return (
    <div>
      <h2>Bar Chart</h2>
      <Bar data={barChartData} options={barChartOptions} />
    </div>
  );
};

export default BarChart;
