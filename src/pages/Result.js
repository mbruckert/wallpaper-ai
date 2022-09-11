import {
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonFabButton,
  IonFab,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import AdamSandler from "../images/adam.png";
import { download } from "ionicons/icons";
import { useEffect, useState } from "react";
import {
  Capacitor,
  Plugins,
  CameraResultType,
  FilesystemDirectory,
} from "@capacitor/core";
const { Camera, Filesystem } = Plugins;

const Result = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setPrompt(urlParams.get("prompt"));
    setImageUrl(urlParams.get("imageUrl"));
  }, []);

  // function myFunction() {
  //   alert("Downloaded");
  // }

  // async function usePhotoGallery() {
  //   const savePicture = async (photo, fileName) => {
  //     const base64Data = await base64FromPath(photo.webPath);
  //     const savedFile = await Filesystem.writeFile({
  //       path: fileName,
  //       data: base64Data,
  //       directory: Directory.Data,
  //     });

  //     // Use webPath to display the new image instead of base64 since it's
  //     // already loaded into memory
  //     return {
  //       filepath: fileName,
  //       webviewPath: photo.webPath,
  //     };
  //   };
  // }

  // async function base64FromPath(path) {
  //   const response = await fetch(path);
  //   const blob = await response.blob();
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onerror = reject;
  //     reader.onload = () => {
  //       if (typeof reader.result === "string") {
  //         resolve(reader.result);
  //       } else {
  //         reject("method did not return a string");
  //       }
  //     };
  //     reader.readAsDataURL(blob);
  //   });
  // }

  return (
    <IonPage>
      <IonContent>
        <IonHeader style={{ display: "block", margin: "auto" }}>
          <IonToolbar style={{ borderRadius: "10px" }}>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>Wallpaper AI</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard
          style={{
            display: "block",
            margin: "auto",
            marginTop: "25px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <IonCardContent>
            <span style={{ fontWeight: "700" }}>Here's: </span>
            {prompt}
          </IonCardContent>
        </IonCard>
        <div
          style={{
            display: "flex",
            margin: "auto",
            width: "90%",
            height: "600px",
            marginLeft: "5%",
            paddingTop: "25px",
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: "cover",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        ></div>
        <IonButton
          expand="block"
          onClick={() => {
            // const savedFileImage = savePicture(photo, fileName);
            // const newPhotos = [savedFileImage, ...photos];
            // console.log(newPhotos);
          }}
        >
          Download Wallpaper
          <IonIcon slot="start" icon={download} />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Result;
