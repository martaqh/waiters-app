import { useSelector } from "react-redux";
import styles from './StatusForm.module.scss';
import { getAllStatusValues } from "../../../redux/tablesRedux";
import FormSectionTitle from "../../common/FormSectionTitle/FormSectionTitle";
import shortid from "shortid";

const StatusForm = props => {
    
    const allStatusValues = useSelector(state => getAllStatusValues(state));
    const uniqueStatusValues = [...new Set(allStatusValues)];
    const statusValues = uniqueStatusValues.filter(status => status !== props.status);
    
    return (
        <div className={styles.statusForm}>
            <FormSectionTitle>Status:</FormSectionTitle>
            <select className={styles.select + " form-select"}
                    aria-label="Default select example"
                    defaultValue={props.status}
                    onChange={props.onChange}>
                <option selected>{props.status}</option>
                {statusValues.map(status => <option key={shortid()}>{status}</option> )}
            </select>
        </div>
        
    )
}

export default StatusForm;