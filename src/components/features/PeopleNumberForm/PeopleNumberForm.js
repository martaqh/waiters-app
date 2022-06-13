import FormSectionTitle from '../../common/FormSectionTitle/FormSectionTitle';
import styles from './PeopleNumberForm.module.scss';

const PeopleNumberForm = props => {
    return (
        <div className={styles.peopleNumberForm}>
            <FormSectionTitle>People:</FormSectionTitle>
            <div className={styles.inputWrapper}>
                <input defaultValue={props.people} onChange={props.onChangePeople}></input>
                <span>/</span>
                <input defaultValue={props.places} onChange={props.onChangePlaces}></input>
            </div>
        </div>       
    )
}

export default PeopleNumberForm;