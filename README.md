# date-range-picker

## Installation

To start the project

```sh
npm i
npm run dev
```

## Usage

Here’s a basic example of how to use the `date-range-picker` component:

```jsx
import React, { useState } from "react";
import DateRangePicker from "date-range-picker";

const App = () => {
  const [range, setRange] = useState([]);

  return (
    <div>
      <h1>Select a Date Range</h1>
      <DateRangePicker onChange={setRange} />
      <div>Start: {range[0]?.format() || "--"}</div>
      <div>End: {range[1]?.format() || "--"}</div>
    </div>
  );
};

export default App;
```
