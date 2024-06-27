// src/components/Underside.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import snk_logo from "./imgUndersideSNK/snk.png";
import photo1 from "./imgUndersideSNK/photo1.png";
import photo2 from "./imgUndersideSNK/photo2.png";
import photo3 from "./imgUndersideSNK/photo3.png";
import photo4 from "./imgUndersideSNK/photo4.png";
import photo5 from "./imgUndersideSNK/photo5.png";
import x from "./imgUndersideSNK/x.png";
import capcom_logo from "./imgUndersideCapCom/capcom.png";
import capcom_photo1 from "./imgUndersideCapCom/photo1.png";
import capcom_photo2 from "./imgUndersideCapCom/photo2.png";
import capcom_photo3 from "./imgUndersideCapCom/photo3.png";
import capcom_photo4 from "./imgUndersideCapCom/photo4.png";
import capcom_photo5 from "./imgUndersideCapCom/photo5.png";
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
            src={t("underside.images.snk_logo") || snk_logo}
            alt="SNK Logo"
          />
          <img
            className="ph1"
            width="200px"
            src={t("underside.images.photo1") || photo1}
            alt="The King of Fighters"
          />
          <img
            className="ph2"
            width="200px"
            src={t("underside.images.photo2") || photo2}
            alt="Fatal Fury"
          />
          <img
            className="ph3"
            width="180px"
            src={t("underside.images.photo3") || photo3}
            alt="Art of Fighting"
          />
          <img
            className="ph4"
            width="180px"
            src={t("underside.images.photo4") || photo4}
            alt="Metal Slug"
          />
          <img
            className="ph5"
            width="200px"
            src={t("underside.images.photo5") || photo5}
            alt="Athena"
          />
        </div>
        <div className="logo-section-center">
          <img width="140px" src={t("underside.images.x") || x} alt="" />
        </div>
        <div className="logo-section-right">
          <img
            width="250px"
            className="capcom"
            src={t("underside.images.capcom_logo") || capcom_logo}
            alt="Capcom Logo"
          />
          <img
            width="200px"
            className="photo1"
            src={t("underside.images.capcom_photo1") || photo1}
            alt="Street Fighter"
          />
          <img
            width="240px"
            className="photo2"
            src={t("underside.images.capcom_photo2") || photo2}
            alt=""
          />
          <img
            width="200px"
            className="photo3"
            src={t("underside.images.capcom_photo3") || photo3}
            alt=""
          />
          <img
            width="200px"
            className="photo4"
            src={t("underside.images.capcom_photo4") || photo4}
            alt=""
          />
          <img
            width="200px"
            className="photo5"
            src={t("underside.images.capcom_photo5") || photo5}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Underside;
