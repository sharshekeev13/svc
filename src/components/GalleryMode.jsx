import React from "react";
import "./styles/galleryMode.css";
import { t } from "i18next";

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
            src={t("gallery_mode.images.new", { ns: "translation" })}
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
          src={t("gallery_mode.images.gallery1")}
          alt="error"
        />
        <img
          className="gmphoto2"
          width="350px"
          src={t("gallery_mode.images.gallery2", { ns: "translation" })}
          alt="error"
        />
        <img
          className="gmphoto3"
          width="350px"
          src={t("gallery_mode.images.gallery3", { ns: "translation" })}
          alt="error"
        />
      </div>
    </div>
  );
};

export default GalleryMode;
