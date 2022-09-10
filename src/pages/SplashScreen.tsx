import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Cats from '../images/cats.png';
import Adam from '../images/adam.png';
import Sand from '../images/sand.png';
import Window from '../images/window.png';
import Logo from '../images/logo.png';
import Turtle from '../images/turtle.png';
import { url } from 'inspector';
import 'animate.css';

export default function SplashScreen() {

    const[loaded, setLoaded] = useState(false);

    const[selectedImage, setSelectedImage] = useState(Window);
    
    var images = [Cats, Adam, Sand, Window, Turtle];
    useEffect(() => {
        setSelectedImage(images[Math.floor(Math.random()*4)]);
    }, []);


    useEffect(() => {
         setTimeout(() => {
             window.location.href = "/home"; 
         }, 2000);
    }, []);

  return (
    <div>
        {<IonImg src={selectedImage} style={{height:'100vh'}}></IonImg>}
        <img src={Logo} className="animate__animated animate__fadeIn animate__slow 2s" style={{width: '80%',position: 'absolute', marginTop: '-500px', display:'block', marginLeft:'10%',}}></img>

    </div>
  );

    

};


