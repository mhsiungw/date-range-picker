import { useState } from "react";
import { createRoot } from "react-dom/client";
import DateRangePicker from "./date-range-picker";
import "./style.css";

const container = document.getElementById("root");
const root = createRoot(container);
const App = () => {
  const [range, setRange] = useState([]);

  return (
    <>
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DateRangePicker onChange={setRange} />
        <div style={{ width: "200px" }}>
          <div>Start: {range[0]?.format("YYYY 年 MM 月 DD 號") || "--"}</div>
          <div>End: {range[1]?.format("YYYY 年 MM 月 DD 號") || "--"}</div>
        </div>
      </div>
    </>
  );
};
root.render(<App />);
