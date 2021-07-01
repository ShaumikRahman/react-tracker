import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div className="App__Tasks">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default Tasks;
