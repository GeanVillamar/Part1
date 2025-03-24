const Total = ({ part }) => {
  console.log("total component: ", part);
  return (
    <div>
      <p>
        Number of exercises{" "}
        {part[0].exercise + part[1].exercise + part[2].exercise}
      </p>
    </div>
  );
};
export default Total;
