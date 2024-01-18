import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //====================== object destructuring =============================
  const SelfIntroduction = ({ name, dateofBirth, hobbie = [] }) => {
    return (
      <div>
        <h1>My name is {name}.</h1>
        {dateofBirth ? <h2>I was born in {dateofBirth}</h2> : null}
        {hobbie.length == 0 ? null : (
          <div>
            <h2>My Hobbies are: {hobbie.join(', ')}</h2>
            {hobbie.map((item, idx) => (
              <div key={idx}>{idx+1}. {item}</div>
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

  const Test = ({children}) => {
    return <h3>{children}</h3>;
  }

  return (
    <div>
      <SelfIntroduction
        name="PP"
        dateofBirth="12/12/1999"
        hobbie={["Play game", "Coding"]}
      />
      <Test>3434</Test>
    </div>
  );
}

export default App;
