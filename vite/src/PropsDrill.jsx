import { createContext, useState, useContext } from "react";

//mounting using context
const NameContext = createContext(null);

export const Comp1 = ({ data }) => {
  const [name, setName] = useState(data);
  return (
    <>
      <NameContext.Provider value={{ name, setName }}>
        I am component 1
        <br />
        <Comp2 data={data} />
      </NameContext.Provider>
    </>
  );
};

const Comp2 = () => {
  const context = useContext(NameContext);
  if (context === undefined) throw new Error("Context not valid");
  const { name, setName } = context;
  return (
    <>
      I am component 2
      <br />
      <button
        onClick={() => {
          setName("Sumit Ray");
        }}
      >
        Change full Name
      </button>
      Welcome {name ? name : "User"}
      <br />
      <Comp3 />
    </>
  );
};

const Comp3 = () => {
  const context = useContext(NameContext);
  if (context === undefined) throw new Error("Context not valid");
  const { name, setName } = context;
  return (
    <>
      <br />
      <button
        onClick={() => {
          setName("Sumit Ray");
        }}
      >
        Change full Name
      </button>
      Welcome {name ? name : "User"}
    </>
  );
};

/*
props drilling 
parent component {data}
comp1
    comp2
        comp3   {data}
useContext hook => 
if data is to shared across multiple componenets,
we have to context hook 
{global data sharing}

user data (profile , navbar, user table )

*/