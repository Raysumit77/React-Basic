import { Form } from "react-bootstrap";
import { useState } from "react";

export const Checkbox = () => {
  const [Checkstate, setCheckState] = useState({
    selectAll: false,
    cow: false,
    dog: false,
    hen: false,
  });

  return (
    <div>
      <div className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
          label="select All"
          onChange={() => {
            setCheckState((prev) => {
              return {
                ...prev,
                selectAll: !prev.selectAll,
                dog: !prev.selectAll,
                Hen: !prev.selectAll,
                cow: !prev.selectAll,
              };
            });
          }}
          checked={Checkstate.selectAll}
        />
        <Form.Check // prettier-ignore
          type="checkbox"
          label="cow"
          onChange={() => {
            setCheckState((prev) => {
              return { ...prev, cow: !prev.cow };
            });
          }}
          checked={Checkstate.cow}
        />
        <Form.Check // prettier-ignore
          type="checkbox"
          label="Hen"
          onChange={() => {
            setCheckState((prev) => {
              return { ...prev, Hen: !prev.Hen };
            });
          }}
          checked={Checkstate.Hen}
        />
        <Form.Check // prettier-ignore
          type="checkbox"
          label="Dog"
          onChange={() => {
            setCheckState((prev) => {
              return { ...prev, dog: !prev.dog };
            });
          }}
          checked={Checkstate.dog}
        />
      </div>
    </div>
  );
};
