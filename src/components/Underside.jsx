// src/components/Underside.jsx
import React from "react";
import { useTranslation } from "react-i18next";

import "./styles/underside.css";

const Underside = () => {
  const { t } = useTranslation();

  return (
    <div className="container" id="top">
      <div className="info">
        <div className="infoText">
          <h1>{t("underside.texts.collaboration_announcement")}</h1>
          <h1>{t("underside.texts.release_year")}</h1>
          <h1>{t("underside.texts.game_name")}</h1>
        </div>
      </div>
      <div className="logos">
        <div className="logo-section-left">
          <img
            className="snk"
            width="250px"
            src={t("underside.images.snk_logo")}
            alt="SNK Logo"
          />
          <img
            className="ph1"
            width="200px"
            src={t("underside.images.photo1")}
            alt="The King of Fighters"
          />
          <img
            className="ph2"
            width="200px"
            src={t("underside.images.photo2")}
            alt="Fatal Fury"
          />
          <img
            className="ph3"
            width="180px"
            src={t("underside.images.photo3")}
            alt="Art of Fighting"
          />
          <img
            className="ph4"
            width="180px"
            src={t("underside.images.photo4")}
            alt="Metal Slug"
          />
          <img
            className="ph5"
            width="200px"
            src={t("underside.images.photo5")}
            alt="Athena"
          />
        </div>
        <div className="logo-section-center">
          <img width="140px" src={t("underside.images.x")} alt="" />
        </div>
        <div className="logo-section-right">
          <img
            width="250px"
            className="capcom"
            src={t("underside.images.capcom_logo")}
            alt="Capcom Logo"
          />
          <img
            width="200px"
            className="photo1"
            src={t("underside.images.capcom_photo1")}
            alt="Street Fighter"
          />
          <img
            width="240px"
            className="photo2"
            src={t("underside.images.capcom_photo2")}
            alt=""
          />
          <img
            width="200px"
            className="photo3"
            src={t("underside.images.capcom_photo3")}
            alt=""
          />
          <img
            width="200px"
            className="photo4"
            src={t("underside.images.capcom_photo4")}
            alt=""
          />
          <img
            width="200px"
            className="photo5"
            src={t("underside.images.capcom_photo5")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Underside;
