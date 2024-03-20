import { useRef, useState } from "react";

export const ControlledForm = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
  });
  //from input value are controlled by state
  // wht are its advantages?
  //1.form option selection
  //2.form on the fly validation
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      C Form
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Name</label>
        <input
          placeholder="Enter Name"
          onChange={(e) =>
            setForm((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
        />
        <label>Age</label>
        <input
          placeholder="Enter age"
          onChange={(e) =>
            setForm((prev) => {
              return { ...prev, age: e.target.value };
            })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export const UncontrolledForm = () => {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
  };

  return (
    <div>
      U Form
      <form
        ref={formRef}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Name</label>
        <input placeholder="Enter Name" name="name" />
        <label>Age</label>
        <input placeholder="Enter Age" name="age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
