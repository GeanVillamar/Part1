import StatisticLine from "./StatisticLine";
const statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / total;
  const positive = (props.good / total) * 100;

  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  console.log(props);
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <th>
              <StatisticLine text="good" value={props.good} />
            </th>
          </tr>
          <tr>
            <th>
              <StatisticLine text="neutral" value={props.neutral} />
            </th>
          </tr>
          <tr>
            <th>
              <StatisticLine text="bad" value={props.bad} />
            </th>
          </tr>
          <tr>
            <th>
              <StatisticLine text="all" value={total} />
            </th>
          </tr>
          <tr>
            <th>
              <StatisticLine text="average" value={average} />
            </th>
          </tr>
          <tr>
            <th>
              <StatisticLine text="positive" value={positive} />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default statistics;
