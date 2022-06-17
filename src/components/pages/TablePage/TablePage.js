import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { getTableById, updateServerData } from "../../../redux/tablesRedux";
import PeopleNumberForm from "../../features/PeopleNumberForm/PeopleNumberForm";
import StatusForm from "../../features/StatusForm/StatusForm";
import BillForm from "../../features/BillForm/BillForm";
import Button from '../../common/Button/Button';
import styles from './TablePage.module.scss';

const TablePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const table = useSelector(state => getTableById(state, id));
    
    const [status, setStatus] = useState('');
    const [people, setPeople] = useState(0);
    const [places, setPlaces] = useState(0);
    const [bill, setBill] = useState(0);

    useEffect(() => {
        console.log('table', table)
        if (table) {
            setStatus(table.status)
            setPeople(table.people)
            setPlaces(table.places)
            setBill(table.bill)
        }
    }, [ table ])

    const handleSubmit = (e) => { 
        e.preventDefault();
        dispatch(updateServerData(table.id, status, people, places, bill))
        navigate('/server-updated')
    }

    const checkPeopleValue = (peopleNumber) => {
        if (peopleNumber > places) {
            setPeople(places);
        }
        else if (peopleNumber < 0) {
            setPeople(0);
        }
        else if (peopleNumber > 10) {
            setPeople(10);
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
            <h2 className={styles.tablePage__title}>Table {table && table.id}</h2>
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