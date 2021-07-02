import {FaTimes} from 'react-icons/fa'

const Delete = ({task, handleDelete}) => {
    return <FaTimes className="Task__Delete" onClick={() => handleDelete(task.id)} />
}

export default Delete