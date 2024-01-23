// force vs-code looking this file like type script
//// @ts-check
import React, { useState } from "react";
import PropTypes, { array } from "prop-types";
import "./App.css" ;

var monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//====================== check type solve 2 : with like type script ======================
// /**
//  * @type {React.FC<{name: string, dateofBirth: string, hobbie: Array}>}
//  * @returns {React.ReactNode}
//  */

//====================== object destructuring =============================
const SelfIntroduction = ({ name = "Unknow", dateofBirth, hobbie = [] }) => {
  return (
    <div>
      <h1>
        My name is <span style={{ color: "darkgreen" }}>{name}</span>.
      </h1>
      {dateofBirth ? <h2>I was born in {dateofBirth}</h2> : null}
      {hobbie.length == 0 ? null : (
        <div>
          <h2>My Hobbies are: {hobbie.join(", ")}</h2>
          {hobbie.map((item, idx) => (
            <div key={idx}>
              {idx + 1}. {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

//====================== props จะเป็น object เสมอ =============================
// const SelfIntroduction = (props) => {
//   return <h1>My name is {props.name}.</h1>;
// };

//====================== check type solve 1======================
SelfIntroduction.propTypes = {
  name: PropTypes.string.isRequired,
};

const Test = ({ children }) => {
  return <h3>{children}</h3>;
};

function App() {
  //====================== array destructuring ======================
  const [name, setName] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [hobbies, setHobbies] = useState([""]);

  const [data, setData] = useState({
    name: "",
    dateofBirth: "",
    hobbies: [],
  });

  return (
    <div>
      <div className="" style={{display: "grid", gridTemplateColumns: "100px 1fr 48px", gap: "0.5rem"}}>
        <label htmlFor="name">Name:</label>
        <input
          value={name}
          style={{gridColumn: 'span 2'}}
          id="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="dateofBirth">Date of Birth</label>
        <input
          type="date"
          name="dateofBirth"
          value={inputDate}
          id="dateofBirth"
          style={{gridColumn: 'span 2'}}
          onChange={(event) => {
            const dateSplit = event.target.value.split("-");
            const date = dateSplit[2];
            const month = monthName[Number(dateSplit[1]) - 1];
            const year = dateSplit[0];
            setDateofBirth(date + " " + month + " " + year);
            setInputDate(event.target.value);
          }}
        />
        {hobbies.map((hobby, idx) => (
          <div className="" key={idx} style={{display: "contents"}}>
            <label htmlFor={`hobby-${idx}`}>Hobby {idx + 1}:</label>
            <input
              value={hobby}
              id={`hobby-${idx}`}
              onChange={(event) => {
                const newValue = event.target.value;

                //====================== check hobby index solve 1======================
                const hobbyArray = [...hobbies];
                hobbyArray[idx] = newValue;
                setHobbies(hobbyArray);

                // setHobbies(
                //   //====================== check hobby index solve 2.1======================
                //   // hobbies.map((item, hobbyIndex) => {
                //   //   if(idx === hobbyIndex){
                //   //     return newValue
                //   //   }
                //   //   return item

                //   //====================== check hobby index solve 2.2======================
                //   //   return idx === hobbyIndex ? newValue : item;

                //   // }

                // );
              }}
            />
            <button
              onClick={() => {
                const array = hobbies.filter(
                  (hobbie, hobbyIndex) => hobbyIndex !== idx
                );
                console.log(array);
                setHobbies(array);
              }}
            >
              -
            </button>
          </div>
        ))}

        <button
          onClick={() => {
            setHobbies([...hobbies, ""]);
          }}
          style={{gridColumn: "2", width: 'max-content'}}
        >
          Add another hobby
        </button>
        <button
          onClick={() => {
            setData({ name, dateofBirth, hobbies });
            setInputDate("");
            setName("");
            setHobbies([""]);
          }}
          style={{gridColumn: '1 / span 3', backgroundColor: 'slategray'}}

        >
          Save
        </button>
      </div>
      <SelfIntroduction
        name={data.name}
        dateofBirth={data.dateofBirth}
        hobbie={data.hobbies}
      />
      <Test>Test component children</Test>
    </div>
  );
}

export default App;
