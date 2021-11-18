import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Company } from "./pages/Company/Company";
import { Contact } from "./pages/Contact/Contact";
import { NewProject } from "./pages/NewProjects/NewProject";
import { Projects } from "./pages/Projects/Projects";
import { Project } from "./pages/Project";

import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/newproject" component={NewProject} />
          <Route exact path="/projects/:id" component={Project} />
        </Container>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
