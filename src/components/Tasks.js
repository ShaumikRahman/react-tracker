import Task from "./Task";

const Tasks = ({ tasks, handleDelete, toggleComplete }) => {
  return (
    <div className="App__Tasks">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} handleDelete={handleDelete} toggleComplete={toggleComplete}/>
      })}
    </div>
  );
};

export default Tasks;
