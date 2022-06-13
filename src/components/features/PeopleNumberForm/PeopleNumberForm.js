import FormSectionTitle from '../../common/FormSectionTitle/FormSectionTitle';
import styles from './PeopleNumberForm.module.scss';

const PeopleNumberForm = props => {
    return (
        <div className={styles.peopleNumberForm}>
            <FormSectionTitle>People:</FormSectionTitle>
            <div className={styles.inputWrapper}>
                <input type="text" defaultValue={props.people} onChange={props.onChange}></input>
                <span>/</span>
                <input type="text" defaultValue={props.places}></input>
            </div>
        </div>       
    )
}

export default PeopleNumberForm;