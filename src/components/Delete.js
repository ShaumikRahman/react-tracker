import {FaTimes} from 'react-icons/fa'

const Delete = ({task, handleDelete}) => {
    return <div className="Task__Delete">
        <FaTimes onClick={(e) => {handleDelete(task.id); e.stopPropagation();}} />
    </div>
}

export default Delete