// src/components/Top.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/top.css";

const Top = () => {
  const { t } = useTranslation();

  return (
    <div className="topBody" id="top">
      <div className="pers">
        <img
          className="pers"
          src={t("top.images.key_art")}
          alt=""
        />
      </div>
      <div className="block">
        <div className="ps4">
          <img
            className="ps4"
            width="120px"
            src={t("top.images.platforms_ps4")}
            alt="PS4"
          />
        </div>

        <div className="nintendo">
          <img
            className="nintendo"
            width="120px"
            src={t("top.images.platforms_switch")}
            alt="Nintendo"
          />
        </div>

        <div className="steam">
          <img
            className="steam"
            width="120px"
            src={t("top.images.platforms_steam")}
            alt="Steam"
          />
        </div>

        <div className="gog">
          <img
            className="gog"
            width="100px"
            src={t("top.images.platforms_gog")}
            alt="GOG"
          />
        </div>

        <div className="chaos">
          <img
            className="chaos"
            width="630px"
            src={t("top.images.main_logo")}
            alt="Chaos Logo"
          />
        </div>

        <div className="tex1">
          <h1>{t("top.texts.top_text_1")}</h1>
          <div className="tex2">
            <a href="./">
              <h1>{t("top.texts.top_text_2")}</h1>
            </a>
          </div>
        </div>

        <div className="trailerVideo">
          <h1>{t("top.texts.launch_trailer")}</h1>

          <div className="videoRam">
            <video
              className="video-container"
              width="470"
              height="250"
              controls
            >
              <source src="video-file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
