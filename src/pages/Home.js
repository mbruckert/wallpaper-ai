import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItemDivider,
  IonItem,
  IonSlide,
  IonSlides,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonThumbnail,
  IonSpinner,
  IonIcon,
} from "@ionic/react";
import { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { refresh } from "ionicons/icons";
import Logo from "../images/logo-blue.png";

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("2D Animated");
  const [loading, setLoading] = useState(false);

  const styles = [
    {
      name: "2D Animated",
      image:
        "https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054496-20180828watermelonbenchconceptdstrijleva001-1280.jpg?itok=VXVlH56K",
    },
    {
      name: "3D Animated",
      image:
        "https://damassets.autodesk.net/content/dam/autodesk/www/industry/3d-animation/create-beautiful-3d-animations-thumb-1204x677.jpg",
    },
    {
      name: "Hand-drawn Illustration",
      image:
        "https://cdn.dribbble.com/users/454118/screenshots/15530772/media/0d0a0a5eaedc58525e7344b05c3d1c36.jpg?compress=1&resize=400x300",
    },
    {
      name: "Oil Painted",
      image:
        "https://www.invaluable.com/blog/wp-content/uploads/sites/77/2021/01/Monet-Impression-Sunrise-1.jpg",
    },
    {
      name: "Photo-realistic",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f8/John%27s_Diner_by_John_Baeder.jpg",
    },
    {
      name: "Pop Art",
      image:
        "https://blog.artsper.com/wp-content/uploads/2018/01/Andy-2-min-2.jpg",
    },
    {
      name: "Abstract",
      image:
        "https://thevirtualinstructor.com/blog/wp-content/uploads/2013/08/understanding-abstract-art.jpg",
    },
    {
      name: "Surrealism",
      image:
        "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg",
    },
  ];

  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  async function runPrediction() {
    setLoading(true);
    var data = { prompt: prompt, style: selectedStyle };
    const searchParams = new URLSearchParams(data);
    return fetch(
      "https://us-central1-wallpaper-ai-app.cloudfunctions.net/getPrediction?" +
        searchParams.toString(),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        var data = { prompt: prompt, imageUrl: result };
        const searchParams = new URLSearchParams(data);
        return searchParams.toString();
      });
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <img
            src={Logo}
            style={{ width: "150px", display: "block", margin: "auto" }}
          ></img>
        </IonToolbar>
      </IonHeader>
      {!loading && (
        <IonContent fullscreen>
          <IonItem style={{ marginTop: "20px" }}>
            <IonInput
              value={prompt}
              placeholder="Describe Your Wallpaper"
              onIonChange={(e) => setPrompt(e.detail.value)}
            ></IonInput>
          </IonItem>

          <IonSlides
            pager={true}
            options={slideOpts}
            style={{ marginTop: "50px" }}
          >
            {styles.map((style) => (
              <IonSlide>
                <IonCard>
                  <IonCardHeader style={{ textAlign: "left" }}>
                    <div
                      style={{
                        backgroundImage: `url('${style.image}')`,
                        width: "90vh",
                        height: "340px",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <IonItem>
                        <IonCheckbox
                          slot="start"
                          onIonChange={(e) => {
                            if (e.target.checked == true) {
                              setSelectedStyle(style.name);
                            } else {
                              setSelectedStyle("2D Animated");
                            }
                          }}
                        ></IonCheckbox>
                      </IonItem>
                      <IonCardTitle>{style.name}</IonCardTitle>
                    </div>
                  </IonCardHeader>
                </IonCard>
              </IonSlide>
            ))}
          </IonSlides>

          <IonButton
            onClick={() => {
              runPrediction().then((params) => {
                window.location.href = "/result?" + params;
              });
            }}
            expand="block"
          >
            Generate Wallpaper
            <IonIcon slot="start" icon={refresh} />
          </IonButton>
        </IonContent>
      )}
      {loading && (
        <IonContent fullscreen>
          <div style={{ display: "block", margin: "auto" }}>
            <IonSpinner
              name="crescent"
              style={{ display: "block", margin: "auto", marginTop: "100px" }}
            />
          </div>
        </IonContent>
      )}
    </IonPage>
  );
};

export default Home;
