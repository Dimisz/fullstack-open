const Total = ({parts}) => {
  
  const totalHours = parts.reduce((accum, part) => {
    return accum + part['exercises'];
  }, 0);

  return(
    <p>Number of exercises {totalHours}</p>
  );
}

export default Total;