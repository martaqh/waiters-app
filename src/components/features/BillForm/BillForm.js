import FormSectionTitle from "../../common/FormSectionTitle/FormSectionTitle";

const BillForm = props => {
    return (
        <div>
            <FormSectionTitle>Bill:</FormSectionTitle>
            <span>$</span>
            <input value={props.bill} onChange={props.onChange}></input>
        </div>
        
    )
}

export default BillForm;