import { memo } from "react";

const Children = ({ salary, increaseSalary }) => {
  console.log("I am children rendred");
  return (
    <div>
      <h1>Children</h1>
      <br />
      Salary: {salary}
      <br />
      <button onClick={increaseSalary}>Increase Salary</button>
    </div>
  );
};

export default memo(Children);
