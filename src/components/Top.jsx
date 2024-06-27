// src/components/Top.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import Key_art from "./imgTop/key-art.png";
import Platforms_Ps4 from "./imgTop/ps4.png";
import Platforms__Switch from "./imgTop/nintendo.jpeg";
import Platforms_Steam from "./imgTop/steam.jpeg";
import Platforms_Gog from "./imgTop/gog.jpeg";
import Main_Logo from "./imgTop/CHAOS.png";
import "./styles/top.css";

const Top = () => {
  const { t } = useTranslation();

  return (
    <div className="topBody" id="top">
      <div className="pers">
        <img
          className="pers"
          src={Key_art}
          alt=""
        />
      </div>
      <div className="block">
        <div className="ps4">
          <img
            className="ps4"
            width="120px"
            src={Platforms_Ps4}
            alt="PS4"
          />
        </div>

        <div className="nintendo">
          <img
            className="nintendo"
            width="120px"
            src={Platforms__Switch}
            alt="Nintendo"
          />
        </div>

        <div className="steam">
          <img
            className="steam"
            width="120px"
            src={Platforms_Steam}
            alt="Steam"
          />
        </div>

        <div className="gog">
          <img
            className="gog"
            width="100px"
            src={Platforms_Gog}
            alt="GOG"
          />
        </div>

        <div className="chaos">
          <img
            className="chaos"
            width="630px"
            src={Main_Logo}
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
