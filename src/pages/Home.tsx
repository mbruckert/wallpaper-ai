import { IonCheckbox,IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonButton, IonItemDivider, IonItem, IonSlide, IonSlides, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonImg, IonThumbnail, IonIcon} from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { refresh } from 'ionicons/icons';

const Home: React.FC = () => {

const [text, setText] = useState("");

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

  return (
    <IonPage>

      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Wallpaper-AI</IonTitle>
      </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonItem>
            <IonInput value={text} placeholder="Describe Your Wallpaper" onIonChange={e => setText(e.detail.value!)}></IonInput>
        </IonItem> 
      

    <IonSlides pager={true} options={slideOpts}>

      <IonSlide>
        <IonCard>
          <IonCardHeader style={{textAlign: 'left'}}>
            <IonImg src="https://i.ytimg.com/vi/lnocVspafNY/maxresdefault.jpg" />
            <div style={{display: 'flex', alignItems: 'center'}}>
            <IonItem>
              <IonCheckbox slot="start"></IonCheckbox>
            </IonItem>
            <IonCardTitle>Fantasy</IonCardTitle>
            </div>
          </IonCardHeader>
        </IonCard>
      </IonSlide>


      <IonSlide>
      <IonCard>
            <IonCardHeader style={{textAlign: 'left'}}>
            <IonImg src="https://i.ytimg.com/vi/lnocVspafNY/maxresdefault.jpg" />
            <div style={{display: 'flex', alignItems: 'center'}}>
            <IonItem>
              <IonCheckbox slot="start"></IonCheckbox>
            </IonItem>
            <IonCardTitle>Photo Realistic</IonCardTitle>
            </div>
            </IonCardHeader>
        </IonCard>
      </IonSlide>


      <IonSlide>
      <IonCard>
        <IonCardHeader style={{textAlign: 'left'}}>
            <IonImg src="https://i.ytimg.com/vi/lnocVspafNY/maxresdefault.jpg" />
            <div style={{display: 'flex', alignItems: 'center'}}>
            <IonItem>
              <IonCheckbox slot="start"></IonCheckbox>
            </IonItem>
            <IonCardTitle>Animated</IonCardTitle>
            </div>
          </IonCardHeader>
      </IonCard>
      </IonSlide>

    </IonSlides>


      <IonButton href="/result" expand="block">Generate Wallpaper
        <IonIcon slot="start" icon={refresh}/>
      </IonButton>

      </IonContent>
</IonPage>
    
  );
};

export default Home;
