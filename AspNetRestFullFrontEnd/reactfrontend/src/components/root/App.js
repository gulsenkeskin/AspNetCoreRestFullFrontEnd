import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./Dashboard";

function App() {
  return (
    <Container>
      <Navi />
      <DashBoard/>
    </Container>
  );
}

export default App;
