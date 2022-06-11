import { Container } from "react-bootstrap";
import PageTitle from "../../common/PageTitle/PageTitle";
import TablesList from "../../views/TablesList/TablesList";

const Home = () => {
    return (
            <Container>
              <PageTitle>All tables</PageTitle>
              <TablesList />
            </Container>
    )
}
export default Home;