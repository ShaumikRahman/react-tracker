const TaskText = ({task}) => {
    if (task.completed) {
        return <p className="Task__Text complete">{task.title}</p>
    } else {
        return <p className="Task__Text">{task.title}</p>
    }
}

export default TaskText



