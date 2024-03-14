export const Login = (props) => {
  //js
  const { username, password } = props;
  //html
  const result =
    username === "sumitray45@gmail.com" && password === "1234"
      ? "welcome Sumit"
      : "Invalid User";
  return <>{result}</>;
};

export const ForgetPassword = ({ email }) => {
  return <>Your email is {email} </>;
};

export const Register = () => {
  return <>Register</>;
};
export const ChangePassword = () => {
  return <>ChangePassword</>;
};
export const SignUp = () => {
  return <>SignUp</>;
};
