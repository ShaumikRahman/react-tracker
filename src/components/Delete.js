import {FaTimes} from 'react-icons/fa'

const Delete = ({task, handleDelete}) => {
    return <FaTimes className="Task__Delete" onClick={(e) => {handleDelete(task.id); e.stopPropagation();}} />
}

export default Delete