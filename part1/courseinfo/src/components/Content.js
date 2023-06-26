import Part from "./Part";
const Content = ({ parts }) => {
  
  const renderedParts = parts.map((part) => {
    return <Part key={part.name} name={part.name} exercises={part.exercises}/>;
  });

  return(
    <>
      {renderedParts}
    </>
  );
}

export default Content;