import Title from "./components/Title";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "Take the trash out",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "Clean",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "Fix fridge",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "Eat dinnerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "Move boxes",
      "completed": false
    }
  ]
  );

  const deleteTask = (id) => {
    console.log(`deleted task with id ${id}`);
  }

  return (
    <div className="App">
      <Title />
      <Tasks tasks={tasks} handleDelete={deleteTask}/>
    </div>
  );
}

export default App;
