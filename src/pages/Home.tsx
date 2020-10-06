import {  IonPage,IonButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Home.css';

const Home: React.FC<RouteComponentProps> = ({history}) => {
  return (
    <IonPage>
      <img src="assets/images/front.jpg" className="container_img"/>
  
          {/* <IonButton color="light" className="btn">Play Monument-Quiz</IonButton> */}
          
          <IonButton
              color="light"
              className="btn"
              onClick={e => {
               e.preventDefault();
              history.push('/dashboard/game');
              }}>
                  Play Monument-Quiz
          </IonButton>
    </IonPage>
  );
};

export default Home;
