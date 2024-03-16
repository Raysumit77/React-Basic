// import { useState } from "react";

// export const Question = () => {
//   const list = [
//     { country: "india", cities: ["New Delhi", "Mumbai"] },
//     { country: "Nepal", cities: ["Kathmandu", "Bharatpur"] },
//   ];
//   const [country, setCountry] = useState("");
//   const [city, setCity] = useState("");

//   return (
//     <div>
//       <select onChange={(e) => setCountry(e.target.value)}>
//         <option value="">Select a country</option>
//         {list.map((country) => {
//           return <option key={country?.country}>{country.country}</option>;
//         })}
//       </select>
//       {country && (
//         <select onChange={(e) => setCity(e.target.value)}>
//           <option value="">Select a country</option>
//           {list
//             .filter((d) => d.country === country)
//             .pop()
//             .cities.map((city) => {
//               return (
//                 <option key={city} value={city}>
//                   {city}
//                 </option>
//               );
//             })}
//         </select>
//       )}
//     </div>
//   );
// };

// export default Question;

//write a react component that counts the number of words used in the content sestion

import { useState } from "react";

export const Question = () => {
  const [wordCount, setWordCount] = useState(0);
  const handleCount = (e) => {
    const words = e.target.value.split("").length;
    setWordCount(words);
  };
  return (
    <>
      <textarea rows={5} onChange={(e) => handleCount(e)}></textarea>
      <p>WordCount:{wordCount}</p>
    </>
  );
};
