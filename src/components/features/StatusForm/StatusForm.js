import styles from './StatusForm.module.scss';
import FormSectionTitle from "../../common/FormSectionTitle/FormSectionTitle";
import shortid from "shortid";

const StatusForm = props => {
    const statusValues = ['busy', 'free', 'reserved', 'cleaning'];
    const statusOptions = statusValues.filter(status => status !== props.currentStatus);
    
    return (
        <div className={styles.statusForm}>
            <FormSectionTitle>Status:</FormSectionTitle>
            <select className={styles.select + " form-select"}
                    aria-label="Default select example"
                    value={props.currentStatus}
                    onChange={props.onChange}>
                <option>{props.currentStatus}</option>
                {statusOptions.map(status => <option key={shortid()}>{status}</option> )}
            </select>
        </div>
        
    )
}

export default StatusForm;