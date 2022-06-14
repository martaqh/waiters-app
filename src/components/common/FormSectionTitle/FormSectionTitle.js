import styles from './FormSectionTitle.module.scss';

const FormSectionTitle = props => {
    return (
        <div className={styles.formSectionTitle}>
            <h6 >{props.children}</h6>
        </div>
    )
}

export default FormSectionTitle;