import {useState} from 'react'
// import {Header} from '/components/Header'


function App() {
  const [title, setTitle] = useState(" my name is raman")


  function addTodo(){
    setTitle (
        <div>
        <h5>my name is {Math.random()}</h5>
        </div>
      )
    }
  


  return (  
    <div>
    <button onClick={addTodo}>Add Todo</button>
    <Header title = {title}></Header>
    <Header title = "my name is Divanshu Garg"></Header>
    <Header title = "my name is Divanshu Garg"></Header>
    <Header title = "my name is Divanshu Garg"></Header>
    <Header title = "my name is Divanshu Garg"></Header>
    <Header title = "my name is Divanshu Garg"></Header>
    </div>
  )
}



function Header(props){
  return <div>
    {props.title}
  </div>
}

export default App

