import styles from './PeopleNumberForm.module.scss';
import FormSectionTitle from '../../common/FormSectionTitle/FormSectionTitle';

const PeopleNumberForm = props => {
    return (
        <div className={styles.peopleNumberForm}>
            <FormSectionTitle>People:</FormSectionTitle>
            <div className={styles.inputWrapper}>
                <input value={props.people} onChange={props.onChangePeople}></input>
                <span>/</span>
                <input value={props.places} onChange={props.onChangePlaces}></input>
            </div>
        </div>       
    )
}

export default PeopleNumberForm;