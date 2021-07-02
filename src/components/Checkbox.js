const Checkbox = ({task, handleDelete}) => {
    return <input type="Checkbox" className="Task__Checkbox" checked={task.completed ? 'checked' : null}/>
}

export default Checkbox