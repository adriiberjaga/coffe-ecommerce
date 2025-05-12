import "../css/Banner.css";
import video from "../../assets/images/video-banner.mp4";
export default function BannerMenu() {
  return (
<div className="banner-div">
      <video className="banner-div-video" autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </video>{" "}
      <div className="banner-div-title">
        <h3>Nuestro Menú</h3>
        <h4>Explora nuestra variedad de cafés artesanales</h4>
      </div>
    </div>  )
}
