import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { getTableById, updateServerData } from "../../../redux/tablesRedux";
import PeopleNumberForm from "../../features/PeopleNumberForm/PeopleNumberForm";
import StatusForm from "../../features/StatusForm/StatusForm";
import BillForm from "../../features/BillForm/BillForm";
import Button from '../../common/Button/Button';
import styles from './TablePage.module.scss';

const TablePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const table = useSelector(state => getTableById(state, id));

    const [status, setStatus] = useState(table.status);
    const [people, setPeople] = useState(table.people);
    const [places, setPlaces] = useState(table.places);
    const [bill, setBill] = useState(table.bill);
    console.log(status, people, places, bill);

    const handleSubmit = e => { 
        updateServerData(table.id, status, people, places, bill);
        navigate('/server-updated');
    }

    const checkPeopleValue = (peopleNumber) => {
        if (peopleNumber > 10) {
            setPeople(10);
        }
        else if (peopleNumber < 0) {
                setPeople(0);
        }
        else if (peopleNumber > places) {
                    setPeople(places);
        } else {
            setPeople(peopleNumber);
        }
    }

    const checkPlacesValue = (placesNumber) => {
        if (placesNumber > 10) {
            setPlaces(10);
        }
        else if (placesNumber < 0) {
            setPlaces(0);
            }
        else if (placesNumber < people) {
            setPlaces(placesNumber);
            setPeople(placesNumber);
                }
        else {
            setPlaces(placesNumber);
        }
    }

    const handleStatusChange = e => {
        e.preventDefault();
        setStatus(e.target.value);
        if (e.target.value === 'free' || e.target.value === 'cleaning') {
            setPeople(0);
            setBill(0);
        }
    }

    return ( 
        <main>
            <h2 className={styles.tablePage__title}>Table {table.id}</h2>
            <form className={styles.tablePage__form} onSubmit={handleSubmit}>
                <StatusForm 
                    currentStatus={status}
                    onChange={handleStatusChange} />
                <PeopleNumberForm
                    people={status === 'cleaning' || status === 'free'? 0 : people}
                    places={places}
                    onChangePeople={e => checkPeopleValue(e.target.value)}
                    onChangePlaces={e => checkPlacesValue(e.target.value)}  />
                {status === 'busy'? <BillForm
                    bill={bill}
                    onChange={e => setBill(e.target.value)} />: null}
                <Button>Update</Button>
            </form>
        </main>
    )
}

export default TablePage;