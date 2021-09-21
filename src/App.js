import Title from "./components/Title";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import uniqid from 'uniqid';
import { useState, useEffect } from "react";

function App() {
  let state;
  if (localStorage.getItem("tasks") == null) {
    console.log("no tasks");
    localStorage.setItem(
      "tasks",
      JSON.stringify([
        {
          id: uniqid(),
          title: "Take the trash out",
          completed: false,
        },
        {
          id: uniqid(),
          title: "Clean",
          completed: false,
        },
        {
          id: uniqid(),
          title: "Fix fridge",
          completed: false,
        },
        {
          id: uniqid(),
          title: "Eat dinner",
          completed: true,
        },
        {
          id: uniqid(),
          title: "Move boxes",
          completed: false,
        },
      ])
    );
    //state = JSON.parse(localStorage.getItem("tasks"));
  } else {
    state = JSON.parse(localStorage.getItem("tasks"));
  }

  const [tasks, setTasks] = useState(state);

  const deleteTask = (id) => {
    console.log(`deleted task with id ${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.filter((task) => task.id !== id))
    );
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

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: uniqid(),
        title: `${text}`,
        completed: false,
      }
    ]
    );
  };

  useEffect(() => {
    console.log(tasks);
    localStorage.setItem(
      "tasks",
      JSON.stringify(
        tasks
      )
    );
  }, [tasks]);

  return (
    <div className="App">
      <Title />
      <AddTask addTask={addTask} />
      <Tasks
        tasks={tasks}
        toggleComplete={toggleComplete}
        handleDelete={deleteTask}
      />
      <Footer />
    </div>
  );
}

export default App;
