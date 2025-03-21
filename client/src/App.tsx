import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
