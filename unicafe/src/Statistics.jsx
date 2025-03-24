const statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / total;
  const positive = (props.good / total) * 100;

  console.log(props);
  return (
    <div>
      <h1>statistics</h1>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all:{total}</p>
      <p>average:{average}</p>
      <p>positive:{positive} %</p>
    </div>
  );
};
export default statistics;
