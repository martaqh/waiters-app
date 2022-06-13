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

    const handleStatusChange = e => {
        setStatus(e.target.value);
        if (e.target.value === 'free' || e.target.value === 'cleaning') {
            setPeople(0);
            setBill(0);
        }
    }

    return ( 
        <main>
            <h2>Table {table.id}</h2>
            <form onSubmit={handleSubmit}>
                <StatusForm 
                    status={status}
                    onChange={handleStatusChange} />
                <PeopleNumberForm
                    value={status === 'cleaning' || status === 'free'? 0 : people}
                    places={places}
                    onChangePeople={e => setPeople(e.target.value)}
                    onChangePlaces={e => setPlaces(e.target.value)}  />
                {status === 'busy'? <BillForm
                    bill={bill}
                    onChange={e => setBill(e.target.value)} />: null}
                <Button>Update</Button>
            </form>
        </main>
    )
}

export default TablePage;