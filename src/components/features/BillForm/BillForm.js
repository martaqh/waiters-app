import FormSectionTitle from "../../common/FormSectionTitle/FormSectionTitle";
import styles from './BillForm.module.scss';

const BillForm = props => {
    return (
        <div className={styles.billForm}>
            <FormSectionTitle>Bill:</FormSectionTitle>
            <div>
            <span>$</span>
            <input value={props.bill} onChange={props.onChange}></input>
            </div>
        </div>
        
    )
}

export default BillForm;