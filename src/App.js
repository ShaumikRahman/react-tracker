import Title from "./components/Title";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Take the trash out",
      completed: false,
    },
    {
      id: 2,
      title: "Clean",
      completed: false,
    },
    {
      id: 3,
      title: "Fix fridge",
      completed: false,
    },
    {
      id: 4,
      title:
        "Eat dinnerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      completed: true,
    },
    {
      id: 5,
      title: "Move boxes",
      completed: false,
    },
  ]);

  const deleteTask = (id) => {
    console.log(`deleted task with id ${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id, status) => {
    console.log(`toggled status of task ${id} from ${status} to ${!status}`);
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
          return task;
        } else {
          return task;
        }
      })
    );
  };

  const addTask = (text) => {
    setTasks([...tasks, {
      id: Math.floor(Math.random() * 10000),
      title: `${text}`,
      completed: false
    }]);
  };

  return (
    <div className="App">
      <Title />
      <AddTask addTask={addTask} />
      <Tasks
        tasks={tasks}
        toggleComplete={toggleComplete}
        handleDelete={deleteTask}
      />
    </div>
  );
}

export default App;
