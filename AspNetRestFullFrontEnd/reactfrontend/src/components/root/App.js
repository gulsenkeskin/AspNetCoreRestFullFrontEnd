import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./Dashboard";
import { Route,Switch } from "react-router-dom";
import AddOrUpdateBirim from "../birimler/AddOrUpdateBirim";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={DashBoard}></Route>
        <Route path="/birim" exact component={DashBoard}></Route>
        <Route path="/savebirim" exact component={AddOrUpdateBirim}></Route>
        <Route path="/savebirim/:birimId" component={AddOrUpdateBirim}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Container>
  );
}

export default App;
