// force vs-code looking this file like type script
//// @ts-check
import React, { useState } from "react";
import PropTypes, { array } from "prop-types";
import "./App.css";

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
  const [dateofBirth, setDateofBirth] = useState("")

  const [data, setData] = useState({
    name: undefined,
  });

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        value={name}
        id="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label htmlFor="dateofBirth">Date of Birth</label>
      <input type="date" name="dateofBirth" id="dateofBirth" onChange={event => {
        console.log(event.target.value)
      }}/>
      <button
        onClick={() => {
          setData({ name });
          setName("");
        }}
      >
        Save
      </button>
      <SelfIntroduction
        name={data.name}
        dateofBirth="12/12/1999"
        hobbie={["Play game", "Coding"]}
      />
      <Test>3434</Test>
    </div>
  );
}

export default App;
