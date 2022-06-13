import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { getTableById } from "../../../redux/tablesRedux";
import PeopleNumberForm from "../../features/PeopleNumberForm/PeopleNumberForm";
import StatusForm from "../../features/StatusForm/StatusForm";
import BillForm from "../../features/BillForm/BillForm";
import Button from '../../common/Button/Button';

const TablePage = () => {
    const { id } = useParams();
    const table = useSelector(state => getTableById(state, id));

    const [status, setStatus] = useState(table.status);
    const [people, setPeople] = useState(table.people);
    const [places, setPlaces] = useState(table.places);
    const [bill, setBill] = useState(table.bill);

    console.log(status, people, places, bill);

    const handleSubmit = e => {
        e.preventDefault();
    }
    return ( 
        <main>
            <h2>Table {table.id}</h2>
            <form onSubmit={handleSubmit}>
                <StatusForm 
                    status={status}
                    onChange={e => setStatus(e.target.value)} />
                <PeopleNumberForm
                    people={people}
                    places={places}
                    onChangePeople={e => setPeople(e.target.value)}
                    onChangePlaces={e => setPlaces(e.taget.value)}  />
                {status === 'busy'? <BillForm
                    bill={bill}
                    onChange={e => setBill(e.target.value)} />: null}
                <Button>Update</Button>
            </form>
        </main>
    )
}

export default TablePage;