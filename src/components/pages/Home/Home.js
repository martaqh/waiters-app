import { Container } from "react-bootstrap";
import { useSelector } from 'react-redux';

const Home = () => {
    const tables = useSelector(state => state.tables);
    console.log(tables);
    return (
        <main>
            <Container>
              <h3>Home</h3>
              {tables}  
            </Container>
        </main>
    )
}
export default Home;