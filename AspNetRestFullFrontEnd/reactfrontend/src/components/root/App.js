import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";

function App() {
  return (
    <Container>
      <Navi />
      <DashBoard/>
    </Container>
  );
}

export default App;
