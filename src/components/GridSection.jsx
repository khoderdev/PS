import BarChart from "./Charts/BarsCharts";
import PieChart from "./Charts/PieCharts";
import LineChart from "./Charts/LineCharts";

const GridSection = () => {
  return (
    <section
      id="section-1"
      className="flex flex-col border-t-2 border-b-2 p-2 mb-0 w-[100%] h-auto sm:flex-row md:flex-row  items-center  sm:w-[100%] md:w-[100%] z-40 overflow-y-auto "
    >
      <div className="container  mx-0 h-auto p-3 flex  justify-center">
        <div className="grid grid-cols-2 sm:p-4 md:p-4 w-[100%] sm:grid-cols-2 gap-1.5 ">
          {/* Top row */}
          <div className="grid-Pie-cell bg-stone-900 p-4 flex flex-col justify-center">
            <LineChart />
          </div>
          <div className="grid-Line-cell bg-stone-900 p-4 ">
            <PieChart />
          </div>

          {/* Bottom row */}
          <div className="grid-Bar-cell bg-stone-900 col-span-2 p-4 ">
            <BarChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
