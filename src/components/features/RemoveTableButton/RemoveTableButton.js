
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeTableFromServer } from '../../../redux/tablesRedux';
import styles from './RemoveTableButton.module.scss'

const RemoveTable = props => {
    const dispatch = useDispatch();   

    const handleClick = e => {
        e.preventDefault();
        dispatch(removeTableFromServer(props.tableId))     
    }

    return (
        <button className={styles.removeTable} onClick={handleClick}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
}

export default RemoveTable;