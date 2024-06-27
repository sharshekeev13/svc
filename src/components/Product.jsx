import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/product.css";
import KeyArt from "./imgProduct/key-art.png";
import MainLogo from "./imgProduct/CHAOS2.png";
import PlatformsPS4 from "./imgProduct/ps4.png";
import PlatformsSwitch from "./imgProduct/nintendo.png";
import PlatformsSteam from "./imgProduct/steam.png";
import PlatformsGog from "./imgProduct/gog.png";
import SnkLogo from "./imgProduct/snk.png";

const Product = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    window.location.href = "https://www.remove.bg/ru";
  };

  return (
    <div className="productBody" id="Product">
      <div className="ProductLine">
        <div className="Product">
          <h1>PRODUCT</h1>
          <p>製品情報</p>
        </div>
      </div>

      <div className="Pers">
        <img className="PersPhoto" width="550px" src={KeyArt} alt="error" />
      </div>

      <div className="chaosPhoto">
        <img className="" width="500px" src={MainLogo} alt="error" />
        <h1>{t("top.texts.top_text_1")}</h1>
      </div>

      <div className="buttons">
        <div className="ps4Block">
          <div className="ps4BlockText" onClick={handleClick}>
            <img className="" width="220px" src={PlatformsPS4} alt="error" />
            <h1>{t("product.buyOnPS")}</h1>
          </div>
        </div>

        <div className="nintendoBlock">
          <div className="nintedoBlockText" onClick={handleClick}>
            <img className="" width="200px" src={PlatformsSwitch} alt="error" />
            <h1>{t("product.buyOnNintendo")}</h1>
          </div>
        </div>

        <div className="steamBlock">
          <div className="steamBlockText" onClick={handleClick}>
            <img className="" width="200px" src={PlatformsSteam} alt="error" />
            <h1>{t("product.buyOnSteam")}</h1>
          </div>
        </div>

        <div className="gogBlock">
          <div className="gogBlockText" onClick={handleClick}>
            <img className="" width="110px" src={PlatformsGog} alt="error" />
            <h1>{t("product.buyOnGOG")}</h1>
          </div>
        </div>
      </div>

      <div className="infoBlock">
        <h1>{t("product.infoTitle")}</h1>
        <h2>{t("product.gameTitle")}</h2>
        <h3>{t("product.genre")}</h3>
        <h4>{t("product.platforms")}</h4>
        <h5>{t("product.price")}</h5>
        <h6>{t("product.releaseDate")}</h6>
      </div>

      <div className="footer">
        <img className="" width="200px" src={SnkLogo} alt="error" />
        <h1>{t("product.footer1")}</h1>
        <h2>{t("product.footer2")}</h2>
        <h3>{t("product.footer3")}</h3>
        <h4>{t("product.footer4")}</h4>
      </div>
    </div>
  );
};

export default Product;
