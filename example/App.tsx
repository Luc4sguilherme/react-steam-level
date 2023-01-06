import * as React from "react";

import "./style.css";

import SteamLevel from "../src";

function App() {
  const [level, setLevel] = React.useState(0);

  function handleLevelChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    const input = Number(event.target.value);

    if (input < 0 || input > 5299) {
      return input;
    }

    setLevel(input);
  }

  return (
    <div id="container">
      <input
        type="number"
        name="level"
        id="level"
        min={0}
        max={5299}
        defaultValue={0}
        value={level}
        onChange={handleLevelChange}
      />
      <SteamLevel level={level} size={64} />
    </div>
  );
}

export default App;
