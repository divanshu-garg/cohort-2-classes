import { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

useEffect(() => {
  fetch
}, [])

  return (
    <>

    <CreateTodo id = "3" url = "" ></CreateTodo>

    </>
  )
}

// function CreateTodo(props){
//   newTodo = fetch(props.url)[props.id]
//   setTodos(() => (todo + newTodo))
// }

export default App
