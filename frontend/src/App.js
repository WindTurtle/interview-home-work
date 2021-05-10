import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import NewfeedProduct from "./features/Newfeed/NewfeedProduct";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={NewfeedProduct} exact />
        <Route path="/posts" component={NewfeedProduct} exact />
      </Switch>
    </div>
  );
}

export default App;
