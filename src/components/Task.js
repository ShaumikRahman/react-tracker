import Delete from "./Delete";
import TaskText from "./TaskText";

const Task = ({ task, handleDelete, toggleComplete }) => {
  const complete = task.completed;
  if (complete) {
    return (
      <div
        className="Task"
        onClick={() => {
          toggleComplete(task.id, task.completed);
        }}
      >
        <TaskText task={task} />
        <Delete task={task} handleDelete={handleDelete} />
      </div>
    );
  } else {
    return (
      <div
        className="Task"
        onClick={() => {
          toggleComplete(task.id, task.completed);
        }}
      >
        <TaskText task={task} />
        <Delete task={task} handleDelete={handleDelete} />
      </div>
    );
  }
};

export default Task;
