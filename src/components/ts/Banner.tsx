import "../css/Banner.css";
import video from "../../assets/images/video-banner.mp4";
export default function Banner() {
  return (
    <div className="banner-div">
      <video className="banner-div-video" autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </video>{" "}
      <div className="banner-div-title">
        <h1>Disfruta del mejor café del mundo</h1>
        <h2>Seleccionado a mano. Tostado con pasión. Envíos a toda España.</h2>
          <button>Descubre nuestros cafés</button>
      </div>
    </div>
  );
}
