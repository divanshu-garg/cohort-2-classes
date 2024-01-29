import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";


function App() {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState([{
title:"Go to gym",
description:"Go to gym form 7-9",
completed: false,

  },
{
  title:"Study DSA",
description:"Stidy DSA form 9-100",
completed: true
}]);
  // console.log(count);
  // console.log(setCount);



  return (
    <>
      <div>
        {/* <button onClick = {onClickHandler}>Counter {count}</button> */}
        <CustomButton count={count} setCount={setCount}></CustomButton>
      </div>
    </>
  );
}

function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count + 1)
  }

  return <button onClick = {onClickHandler}>
    Counter {props.count}
  </button>
}

export default App;
