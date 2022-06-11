import { Container } from "react-bootstrap";
import { useSelector } from 'react-redux';
import TableCard from "../../features/TableCard/TableCard";
import shortid from 'shortid';

const Home = () => {
    const tables = useSelector(state => state.tables);
    console.log(tables);
    return (
            <Container>
              <h3>All tables</h3>
              <ul>
                {tables.map(table => <TableCard key={shortid()} {...table} />)}
              </ul> 
            </Container>    
    )
}
export default Home;