import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/battleSystem.css";

const BattleSystem = () => {
  const { t } = useTranslation();

  return (
    <div className="bsBody" id="battleSystem">
      <div className="battleSystemLine">
        <div className="battleSystem">
          <h1>BATTLE SYSTEM</h1>
          <p>バトルシステム</p>
        </div>
      </div>

      <h1 className="bsText1">{t("battle_system.text1")}</h1>
      <p className="bsText2">{t("battle_system.text2")}</p>
      <p className="bsText3">{t("battle_system.text3")}</p>
      <p className="bsText4">{t("battle_system.text4")}</p>

      <div className="pictureBlock">
        <img
          key="battle1"
          className="battle1"
          width="250px"
          src={t("battle_system.images.battle1")}
          alt="error"
        />
        <img
          key="battle2"
          className="battle2"
          width="250px"
          src={t("battle_system.images.battle2")}
          alt="error"
        />
        <img
          key="battle3"
          className="battle3"
          width="250px"
          src={t("battle_system.images.battle3")}
          alt="error"
        />
        <img
          key="battle4"
          className="battle4"
          width="250px"
          src={t("battle_system.images.battle4")}
          alt="error"
        />
        <img
          key="battle5"
          className="battle5"
          width="330px"
          src={t("battle_system.images.battle5")}
          alt="error"
        />
        <img
          key="battle6"
          width="330px"
          src={t("battle_system.images.battle6")}
          alt="error"
        />
      </div>

      <div className="new">
        <div className="newImg">
          <img
            key="new_feature"
            width="150px"
            src={t("battle_system.images.new_feature")}
            alt="error"
          />
        </div>
        <h1>{t("battle_system.new_feature.title")}</h1>
        <h2>{t("battle_system.new_feature.subtitle")}</h2>
        <h3>{t("battle_system.new_feature.description")}</h3>
      </div>
    </div>
  );
};

export default BattleSystem;
