import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar,IonButton, IonIcon,IonFabButton,IonFab,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButtons, IonBackButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import AdamSandler from "../images/adam.png";
import { download } from 'ionicons/icons';
 
const Result: React.FC = () => {
 
 function myFunction(){
   alert('Downloaded')
 }
 
 return (
   <IonPage>
     <IonContent>
        <IonHeader style= {{display: 'block', margin: 'auto'}}>
         <IonToolbar style={{borderRadius: "10px"}}>
           <IonButtons slot="start">
             <IonBackButton defaultHref="/" />
           </IonButtons>
         <IonTitle>Wallpaper AI</IonTitle>
         </IonToolbar>
       </IonHeader>
      
       <IonCard style= {{display: 'block', margin: 'auto', marginTop: '25px', borderRadius: "10px", textAlign:'center'}}>
         <IonCardContent><span style={{fontWeight: '700'}}>Here's: </span>Adam Sandler in Picasso</IonCardContent>
       </IonCard>
       <div style={{ display: 'flex', margin: 'auto', width: '90%', height: '600px', marginLeft: '5%', paddingTop: '25px', backgroundImage: `url(${AdamSandler})`, backgroundSize: 'cover', borderRadius: '20px', marginTop: '20px'}}>
       </div>
       <IonButton expand="block">Download Wallpaper
        <IonIcon slot="start" icon={download}/>
      </IonButton>
     </IonContent>
   </IonPage>
 );
};
 
export default Result;
