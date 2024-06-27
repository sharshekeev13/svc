import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/onlainBattle.css";
import New from "./imgOnlineBattle/new.png";

const OnlainBattle = () => {
  const { t } = useTranslation();

  return (
    <div className="obBody" id="OnlineBattle">
      <div className="OnlineBattleLine">
        <div className="OnlineBattle">
          <h1>ONLINE BATTLE</h1>
          <p>オンラインバトル</p>
        </div>
      </div>

      <div className="newPhoto">
        <img width="150px" src={New} alt="new" />
        <h1>{t("online_battle.new_section.title")}</h1>
        <p>{t("online_battle.new_section.description")}</p>
        <h2>{t("online_battle.new_section.tournament_mode")}</h2>
        <h3>{t("online_battle.new_section.challenge")}</h3>
      </div>

      <div className="photoBlock">
        <img
          className="photoBlock1"
          width="400px"
          src={t("online_battle.images.photo1")}
          alt="photo1"
        />
        <img
          className="photoBlock2"
          width="400px"
          src={t("online_battle.images.photo2")}
          alt="photo2"
        />
        <img
          className="photoBlock3"
          width="400px"
          src={t("online_battle.images.photo3")}
          alt="photo3"
        />
        <img
          className="photoBlock4"
          width="400px"
          src={t("online_battle.images.photo4")}
          alt="photo4"
        />
        <div className="photoBlock5">
          <img
            width="650px"
            src={t("online_battle.images.photo5")}
            alt="photo5"
          />
        </div>
      </div>
    </div>
  );
};

export default OnlainBattle;
