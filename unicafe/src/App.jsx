import { useState } from "react";
import Statistics from "./Statistics";
import Buttons from "./Buttons";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const props = { good, neutral, bad };

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons onClick={() => setGood(good + 1)} text="Good" />
      <Buttons onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Buttons onClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics {...props} />
    </div>
  );
};

export default App;
