import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { ProjectListPage } from "./page/project-list";
import { ProjectDataPage } from "./page/project-data";
import { ProjectCreatePage } from "./page/project-create";
import { ProjectUpdatePage } from "./page/project-update";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Switch>
        <Route exact path="/projects">
          <ProjectListPage />
        </Route>

        <Route exact path="/projects/:projectId">
          <ProjectDataPage />
        </Route>

        <Route exact path="/projects/:projectId/edit">
          <ProjectUpdatePage />
        </Route>

        <Route exact path="/create">
          <ProjectCreatePage />
        </Route>

        <Route exact path="/">
          <Redirect to="/projects" />
        </Route>
      </Switch>
    </IonReactRouter>
  </IonApp>
);

export default App;
