import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import Home from "./Home";
import GamePage from "./GamePage";


const DashboardPage: React.FC<RouteComponentProps> = ({match}) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={Home} />
      <Route path={`${match.url}/game`} component={GamePage} />
    </IonRouterOutlet>
  );
};

export default DashboardPage