import { Bar } from "react-chartjs-2";

const BarChart = () => {
  // Sample data for the chart
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Example Dataset",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
      },
    ],
  };

  // Chart options (you can customize these)
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bar-chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
