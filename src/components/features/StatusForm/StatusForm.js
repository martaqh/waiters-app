import { useSelector } from "react-redux";
import styles from './StatusForm.module.scss';
import { getAllStatusValues } from "../../../redux/tablesRedux";

const StatusForm = props => {
    
    const allStatusValues = useSelector(state => getAllStatusValues(state));
    const uniqueStatusValues = [...new Set(allStatusValues)];
    const statusValues = uniqueStatusValues.filter(status => status !== props.status);
    
    return (
        <select className={styles.select + " form-select"} aria-label="Default select example">
            <option selected>{props.status}</option>
            {statusValues.map(status => <option>{status}</option> )}
        </select>
    )
}

export default StatusForm;