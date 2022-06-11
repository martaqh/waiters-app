import styles from'./PageTitle.module.scss';

const PageTitle = props => {
    return (
        <h3 className={styles.pageTitle}>{props.children}</h3>
    )
}

export default PageTitle;