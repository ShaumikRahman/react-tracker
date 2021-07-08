import Task from "./Task";

const Tasks = ({ tasks, handleDelete, toggleComplete }) => {
  return (
    <>
      {tasks.length ? <div className="App__Tasks">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} handleDelete={handleDelete} toggleComplete={toggleComplete}/>
      })}
    </div> : 
    <p className="none"> Please add some tasks </p>}
    </>
  );
};

export default Tasks;
