import React from "react";
import "./styles/galleryMode.css";
import { t } from "i18next";
import new_image from "./imgGalleryMode/new.png";
import gallery1 from "./imgGalleryMode/galleryMode1.png";
import gallery2 from "./imgGalleryMode/galleryMode2.png";
import gallery3 from "./imgGalleryMode/galleryMode3.png";


const GalleryMode = () => {
  return (
    <div className="gmBody" id="GalleryMode">
      <div className="GalleryModeLine">
        <div className="GalleryMode">
          <h1>GALLERY MODE</h1>
          <p>ギャラリーモード</p>
        </div>
      </div>

      <div className="gmText">
        <div className="gmPhoto">
          <img
            width="150px"
            src={new_image}
            alt="error"
          />
        </div>
        <h1>{t("gallery_mode.texts.header")}</h1>
        <h2>{t("gallery_mode.texts.description1")}</h2>
        <h3>{t("gallery_mode.texts.description2")}</h3>
      </div>

      <div className="gmPhotBlock">
        <img
          className="gmphoto1"
          width="350px"
          src={gallery1}
          alt="error"
        />
        <img
          className="gmphoto2"
          width="350px"
          src={gallery2}
          alt="error"
        />
        <img
          className="gmphoto3"
          width="350px"
          src={gallery3}
          alt="error"
        />
      </div>
    </div>
  );
};

export default GalleryMode;
