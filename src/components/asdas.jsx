import React from "react";
import "./styles/product.css";
import pers from "./imgProduct/key-art.png";
import chaos from "./imgProduct/CHAOS2.png";
import ps4 from "./imgProduct/ps4.png";
import nin from "./imgProduct/nintendo.png";
import steam from "./imgProduct/steam.png";
import gog from "./imgProduct/gog.png";
import snk from "./imgProduct/snk.png";

const Product = () => {
  const handleClick = () => {
    window.location.href = "https://www.remove.bg/ru";
  };
  return (
    <div className="productBody">
      <div className="ProductLine">
        <div className="Product">
          <h1>PRODUCT </h1>
          <p>製品情報</p>
        </div>
      </div>

      <div className="Pers">
        <img className="PersPhoto" width="550px" src={pers} alt="error" />
      </div>

      <div className="chaosPhoto">
        <img className="" width="500px" src={chaos} alt="error" />

        <h1>好 評 発 売 中</h1>
      </div>

      <div className="buttons">
        <div className="ps4Block">
          <div className="ps4BlockText" onClick={""}>
            <img className="" width="220px" src={ps4} alt="error" />

            <h1>PlayStation™Storeで購入する</h1>
          </div>
        </div>

        <div className="nintendoBlock">
          <div className="nintedoBlockText" onClick={""}>
            <img className="" width="200px" src={nin} alt="error" />

            <h1>Nintendo eShopで購入する</h1>
          </div>
        </div>

        <div className="steamBlock">
          <div className="steamBlockText" onClick={""}>
            <img className="" width="200px" src={steam} alt="error" />

            <h1>Steam Storeで購入する</h1>
          </div>
        </div>

        <div className="gogBlock">
          <div className="gogBlockText" onClick={""}>
            <img className="" width="110px" src={gog} alt="error" />

            <h1>GOG Storeで購入する</h1>
          </div>
        </div>
      </div>

      <div className="infoBlock">
        <h1>タイトル概要</h1>
        <h2>
          {" "}
          ■タイトル名：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; SNK VS.
          CAPCOM SVC CHAOS
        </h2>
        <h3>
          {" "}
          ■ジャンル：
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          対戦格闘
        </h3>
        <h4>
          {" "}
          ■プラットフォーム：&nbsp;PlayStation®4 / Nintendo Switch / Steam / GOG
        </h4>
        <h5>
          ■価格：
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          3,960円 (税込) ※デジタル版{" "}
        </h5>
        <h6>
          ■発売日：
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2024年7月〇〇日
        </h6>
      </div>

      <div className="footer">
        <img className="" width="200px" src={snk} alt="error" />

        <h1>©SNK CORPORATION ALL RIGHTS RESERVED. </h1>
        <h2>
          ※ “ ” “PlayStation” “ ”および “ ”
          は株式会社ソニー・インタラクティブエンタテインメントの登録商標または商標です。
        </h2>
        <h3>※Nintendo Switch is a trademark of Nintendo. </h3>
        <h4>
          ※© 2024 Valve Corporation. Steam and the Steam logo are trademarks
          and/or registered trademarks of Valve Corporation in the U.S. and/or
          other countries.
        </h4>
      </div>
    </div>
  );
};

export default Product;
