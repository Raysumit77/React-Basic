//debouncing is programming practice that alllow us to optimize user experince on web
//by handling expensive computation (API calls)
//by adding international delays 


import { useEffect } from "react";

const  useDebounce = ({ wait ,value,setFn }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setFn(value); 
         },Number(wait));
         return () => clearTimeout(timer);
         },[value,wait,setFn] );
};

export default useDebounce;