export const Football = () => {
  const shoot = () => {
    alert("Goallllllll");
  };
  return (
    <>
      <button onClick={shoot}>Take a Shot</button>
    </>
  );
};
export const MyFootball = () => {
  const shoot = (arg) => {
    alert(arg);
  };
  return (
    <>
      <button onClick={() => shoot("Great Shot By Sumit")}>
        Goal by Sumit
      </button>
    </>
  );
};

export const Cricket = () => {
  const shoot = (arg) => {
    alert(arg);
  };
  return (
    <>
      <button onDoubleClick={() => shoot("Fabulous six by Sumitt")}>
        Fabulous six by Sumit
      </button>
    </>
  );
};
