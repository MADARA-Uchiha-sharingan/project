import { Switch, Route } from "wouter";
import Welcome from "@/pages/Welcome";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import MenuBook from "@/pages/MenuBook";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Switch>
      <Route path="/" component={Welcome} />
      <Route path="/home" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/menu" component={MenuBook} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
