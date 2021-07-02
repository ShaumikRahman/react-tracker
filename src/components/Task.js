import Checkbox from "./Checkbox"
import Delete from "./Delete"

const Task = ({task, handleDelete}) => {
    return (
        <div className="Task">
            <p className="Task__Text">{task.title}</p>
            <Checkbox task={task} />
            <Delete task={task} handleDelete={handleDelete} />
        </div>
    )
}

export default Task