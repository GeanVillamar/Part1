const Content = ({ part }) => {
  console.log("content component: ", part);
  return (
    <div>
      <p>
        {part[0].name} Exercises:{part[0].exercise}
      </p>
      <p>
        {part[1].name} Exercises:{part[1].exercise}
      </p>
      <p>
        {part[2].name} Exercises:{part[2].exercise}
      </p>
    </div>
  );
};
export default Content;
