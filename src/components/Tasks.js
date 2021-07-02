import Task from "./Task";

const Tasks = ({ tasks, handleDelete }) => {
  return (
    <div className="App__Tasks">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} handleDelete={handleDelete}/>
      })}
    </div>
  );
};

export default Tasks;
