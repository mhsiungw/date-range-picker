import { createRoot } from "react-dom/client";
import DateRangePicker from "./date-range-picker";

const container = document.getElementById("root");
const root = createRoot(container);
const App = () => (
  <div>
    <DateRangePicker />
  </div>
);
root.render(<App />);
