import { IonPage,IonHeader,IonToolbar,IonBackButton,IonTitle,IonButtons,IonFooter,IonPopover,IonButton ,IonIcon, IonContent,} from '@ionic/react';
import { helpCircle, } from 'ionicons/icons';
import React,{  useState } from 'react';
import { RouteComponentProps } from 'react-router';
import TinderCard from "react-tinder-card";
import "./GamePage.css";

const GamePage: React.FC<RouteComponentProps> = ({history})=> {

    const [cardinfo, setcardinfo] = useState([
        {
            imgURL : "assets/images/taj.jpg",
            Que : " Do you know Taj Mahal was build by whom?",
        },
        {
            imgURL: "assets/images/Jaipur.jpg",
            Que : "Is Jaipur is a pink city of India ?",
        },
        {
          imgURL :"assets/images/mysore.jpg",
          Que : "Do yo know this place is Belong to Mysore?",
        },
        {
          imgURL: "assets/images/tajHotel.jpg",
          Que : "Is Taj hotel is Located in mumbai ?",
        },
        {
          imgURL : "assets/images/dehli.jpg",
          Que : "Do you know this place is belong to Delhi? ",
        },
    ]);

    const [showPopover1, setShowPopover1] = useState(false);
    const [swipe, setswipe] = useState("NoWhere");
    const [score1, setscore1] = useState(0);

    var score:number = 0;
    var len:number = 0;
   

    const onSwipe = (direction :any ) => {
        console.log('You swiped: ' + direction);
        setswipe(direction);
             
        const fun1 = (direction :string ) =>{
         if (direction ==="right" || direction =="left")
             len++;
              if(len === 5){
                setShowPopover1(true);
              }
           if(direction === "right"){
              score++;
              setscore1(score);
           }
        }       
        fun1(direction);
    }

      const onCardLeftScreen = (myIdentifier : any) => {
        console.log(myIdentifier + ' left the screen')
      }
    
    const [showPopover, setShowPopover] = useState(false);
    
     return (
         <IonPage>
             <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="primary">Back</IonBackButton>
          </IonButtons>
          <IonTitle>Monument Game</IonTitle> 
          <IonButtons slot="primary">

          <IonPopover
                isOpen={showPopover1}
                cssClass='my-custom-class'
                onDidDismiss={e => setShowPopover1(false)}
              >
                <p className="margin-left">You know the Answer of {score1} Question out of 5 Question . great !!!</p>
            </IonPopover>

          <IonPopover
        isOpen={showPopover}
        cssClass='my-custom-class'
        onDidDismiss={e => setShowPopover(false)}
      >
        <p className="margin-left">If you know the Answer then you have to swipe Right, And if you don't know the answer then swipe Left</p>
      </IonPopover>    
      <IonButton fill="outline" color="primary" onClick={() => {
            setShowPopover(true);
        }}>
        <IonIcon slot="end" icon={helpCircle} />
      </IonButton>
    </IonButtons>
        </IonToolbar>
      </IonHeader>
       <IonContent>
            <div className="tinderCards">
              <div className="swipe">
               {cardinfo.map(person => (
                <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={["up", 'down']}>
                    <div className="container" style={{ backgroundImage : "url(${person.url})"}}>
                        <img className="cards" src={person.imgURL} alt="alter" />
                        <div className="centered">{person.Que}</div>
                    </div>
                </TinderCard>
                ))}
                </div>
            </div>
            </IonContent> 
            
    <IonFooter>
      <IonToolbar>
               <IonTitle>Swiped {swipe}</IonTitle>
      </IonToolbar>
    </IonFooter>
        </IonPage>
    )
}

export default GamePage;

