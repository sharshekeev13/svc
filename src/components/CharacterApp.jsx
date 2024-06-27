import React, { useState } from "react";
import { t } from "i18next";
import CharacterGrid from "./CharacterGrid";
import CharacterDetailModal from "./CharacterDetailModal";
import "./styles/characterApp.css";
import monster from "./imgCharacter/mons.png";
import kyz from "./imgCharacter/kyz.png";

import kyo from "./imgCharacter/kyoKusanagi.png";
import Kusanagi2 from "./imgCharacter/KyoKusanagi2.png";

import lori from "./imgCharacter/loriYagami.png";
import Yagami2 from "./imgCharacter/Yagami2.png";

import mai from "./imgCharacter/mai.png";
import MaiShiranui from "./imgCharacter/MaiShiranui.png";

import sakazaki from "./imgCharacter/sakazaki.png";
import Sakazaki2 from "./imgCharacter/Sakazaki2.png";

import terry from "./imgCharacter/terry.png";
import Bogard from "./imgCharacter/Bogard.png";

import kim from "./imgCharacter/kim.png";
import KimKaphwan from "./imgCharacter/KimKaphwan.png";

import choi from "./imgCharacter/choi.png";
import BongGae from "./imgCharacter/Bong-gae.png";

import geese from "./imgCharacter/geese.png";
import GeeseHoward from "./imgCharacter/geese.png";

import karate from "./imgCharacter/mrKarate.png";
import Mrkarate2 from "./imgCharacter/MrKarate2.png";

import kasumi from "./imgCharacter/kasumi.png";
import kasumiTodo from "./imgCharacter/KasumiTodo.png";

import shiki from "./imgCharacter/shiki.png";
import shiki2 from "./imgCharacter/shiki2.png";

import genjuro from "./imgCharacter/genjuro.png";
import GenjuroGashin from "./imgCharacter/GenjuroGashin.png";

import earthquake from "./imgCharacter/earthquake.png";
import Earthquake2 from "./imgCharacter/Earthquake2.png";

import marsPeople from "./imgCharacter/marsPeople.png";
import mars from "./imgCharacter/mars.png";

import geonitz from "./imgCharacter/geonitz.png";
import Geonitz2 from "./imgCharacter/Geonitz2.png";

import IoriYagami from "./imgCharacter/IoriYagami.png";
import IoriYagami2 from "./imgCharacter/IoriYagami2.png";

import mrKarate2 from "./imgCharacter/mrKarateSerious.png";
import KarateSerious from "./imgCharacter/KarateSerious.png";

import athena from "./imgCharacter/athena.png";
import Athena2 from "./imgCharacter/Athena2.png";

/*right*/
import Ryu from "./imgCharacter/rightBlock/Ryu.png";
import Ryu2 from "./imgCharacter/rightBlock/Ryu2.png";

import ken from "./imgCharacter/rightBlock/ken.png";
import Ken2 from "./imgCharacter/rightBlock/Ken2.png";

import Chunli from "./imgCharacter/rightBlock/Chunli.png";
import Chunli2 from "./imgCharacter/rightBlock/Chunli2.png";

import Guile from "./imgCharacter/rightBlock/Guile.png";
import Guile2 from "./imgCharacter/rightBlock/Guile2.png";

import Dhalsim from "./imgCharacter/rightBlock/Dhalsim.png";
import Dhalsim2 from "./imgCharacter/rightBlock/Dhalsim2.png";

import GreatDemon from "./imgCharacter/rightBlock/GreatDemon.png";
import GreatDemon2 from "./imgCharacter/rightBlock/GreatDemon2.png";

import Balrog from "./imgCharacter/rightBlock/Balrog.png";
import Balrog2 from "./imgCharacter/rightBlock/Balrog2.png";

import Sagat from "./imgCharacter/rightBlock/Sagat.png";
import Sagat2 from "./imgCharacter/rightBlock/Sagat2.png";

import vega from "./imgCharacter/rightBlock/vega.png";
import Vega2 from "./imgCharacter/rightBlock/Vega2.png";

import bison from "./imgCharacter/rightBlock/bison.png";
import Bison2 from "./imgCharacter/rightBlock/Bison2.png";

import Tabitha from "./imgCharacter/rightBlock/Tabitha.png";
import Tabitha2 from "./imgCharacter/rightBlock/Tabitha2.png";

import hugo from "./imgCharacter/rightBlock/hugo.png";
import Hugo2 from "./imgCharacter/rightBlock/Hugo2.png";

import zero from "./imgCharacter/rightBlock/zero.png";
import Zero2 from "./imgCharacter/rightBlock/Zero2.png";

import Demitri from "./imgCharacter/rightBlock/Demitri.png";
import Demitri2 from "./imgCharacter/rightBlock/Demitri2.png";

import group from "./imgCharacter/rightBlock/group.png";
import Group2 from "./imgCharacter/rightBlock/Group2.png";

import brainwashedKen from "./imgCharacter/rightBlock/brainwashedKen.png";
import BrainwashedKen2 from "./imgCharacter/rightBlock/BrainwashedKen2.png";

import TrueAkuma from "./imgCharacter/rightBlock/TrueAkuma.png";
import TrueAkuma2 from "./imgCharacter/rightBlock/TrueAkuma2.png";

import redReamer from "./imgCharacter/rightBlock/redReamer.png";
import RedReamer2 from "./imgCharacter/rightBlock/RedReamer2.png";

import New from "./imgCharacter/new.png";
import { useTranslation } from "react-i18next";

const characters = [
  {
    id: 1,
    name: "草薙京" /*Kyo Kusanagi*/,
    icon: kyo,
    image: Kusanagi2,
    title: "THE KING OF FIGHTERS",
    side: "left",
  },
  {
    id: 2,
    // Yagami
    name: "八神庵",
    icon: lori,
    image: Yagami2,
    title: "THE KING OF FIGHTERS",
    side: "left",
  },
  {
    id: 3,
    // Terry Bogard
    name: "テリー・ボガード",
    icon: terry,
    image: Bogard,
    title: "THE KING OF FIGHTERS",
    side: "left",
  },
  {
    id: 4,
    // Mai Shiranui
    name: "不知火舞",
    icon: mai,
    image: MaiShiranui,
    title: "Art of Fighting",
    side: "left",
  },
  {
    id: 5,
    // Ryo Sakazaki
    name: "リョウ・サカザキ",
    icon: sakazaki,
    image: Sakazaki2,
    title: "Fatal Fury",
    side: "left",
  },
  {
    id: 6,
    // Mr.Karate
    name: "Mr. カラテ",
    icon: karate,
    image: Mrkarate2,
    title: "Fatal Fury",
    side: "left",
  },
  {
    id: 7,
    // Kim Kaphwan
    name: "キム",
    icon: kim,
    image: KimKaphwan,
    title: "THE KING OF FIGHTERS",
    side: "left",
  },
  {
    id: 8,
    // Choi Bounge
    name: "チョイ・ボンゲ",
    icon: choi,
    image: BongGae,
    title: "THE KING OF FIGHTERS",
    side: "left",
  },

  {
    id: 9,
    // Kasumi Todo
    name: "藤堂 香澄",
    icon: kasumi,
    image: kasumiTodo,
    title: "THE KING OF FIGHTERS",
    side: "left",
  },
  {
    id: 10,
    // color
    name: "色",
    icon: shiki,
    image: shiki2,
    title: "Fatal Fury",
    side: "left",
  },
  {
    id: 11,
    // Genjuro Gashin
    name: "牙神幻十郎",
    icon: genjuro,
    image: GenjuroGashin,
    title: "THE KING OF FIGHTERS",
    side: "left",
  },
  {
    id: 12,
    //Earthquake
    name: "アースクェイク",
    icon: earthquake,
    image: Earthquake2,
    title: "Art of Fighting",
    side: "left",
  },
  {
    id: 13,
    // Geese Howard
    name: "ギース・ハワード",
    icon: geese,
    image: GeeseHoward,
    title: "Art of Fighting",
    side: "left",
  },
  {
    id: 14,
    // Mars people
    name: "マーズピープル",
    icon: marsPeople,
    image: mars,
    title: "THE KING OF FIGHTERS",
    side: "left",
  },
  {
    id: 15,
    // Geonitz
    name: "ゲーニッツ",
    icon: geonitz,
    image: Geonitz2,
    title: "THE KING OF FIGHTERS",
    side: "left",
  },
  {
    id: 16,
    // Iori Yagami
    name: "ツキノヨルオロチノ チニクルフイオリ",
    icon: IoriYagami,
    image: IoriYagami2,
    title: "THE KING OF FIGHTERS",
    side: "left",
  },
  {
    id: 17,
    // Mr.Karate serious
    name: "本気になったMr.カラテ",
    icon: mrKarate2,
    image: KarateSerious,
    title: "Art of Fighting",
    side: "left",
  },
  {
    id: 18,
    // Athena
    name: "アテナ",
    icon: athena,
    image: Athena2,
    title: "Art of Fighting",
    side: "left",
  },
  // Правая сторона
  {
    id: 19,
    // Ryu
    name: "リュウ",
    icon: Ryu,
    image: Ryu2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 20,
    // Ken
    name: "ケン",
    icon: ken,
    image: Ken2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 21,
    //Chunli
    name: "春麗",
    icon: Chunli,
    image: Chunli2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 22,
    // Guile
    name: "ガイル",
    icon: Guile,
    image: Guile2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 23,
    // Dhalsim
    name: "ダルシム",
    icon: Dhalsim,
    image: Dhalsim2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 24,
    // Great demon
    name: "豪鬼.",
    icon: GreatDemon,
    image: GreatDemon2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 25,
    // Vega
    name: "ベガ",
    icon: vega,
    image: Vega2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 26,
    // Sagat
    name: "サガット",
    icon: Sagat,
    image: Sagat2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 27,
    // Balrog
    name: "バルログ",
    icon: Balrog,
    image: Balrog2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 28,
    // Bison
    name: "バイソン",
    icon: bison,
    image: Bison2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 29,
    // Tabitha
    name: "タバサ",
    icon: Tabitha,
    image: Tabitha2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 30,
    // Hugo
    name: "ヒューゴー",
    icon: hugo,
    image: Hugo2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 31,
    // Demitri
    name: "デミトリ",
    icon: Demitri,
    image: Demitri2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 32,
    // Zero
    name: "ゼロ",
    icon: zero,
    image: Zero2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 33,
    // Group
    name: "ダン",
    icon: group,
    image: Group2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 34,
    // Brain washed Ken
    name: "洗脳されたケン",
    icon: brainwashedKen,
    image: BrainwashedKen2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 35,
    // True Akuma
    name: "真・豪鬼",
    icon: TrueAkuma,
    image: TrueAkuma2,
    title: "Street Fighter",
    side: "right",
  },
  {
    id: 36,
    // Red Reamer
    name: "レッドアリーマー",
    icon: redReamer,
    image: RedReamer2,
    title: "Street Fighter",
    side: "right",
  },
];

const CharacterApp = () => {
  const { t } = useTranslation();

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="app">
      <div className="characterLine">
        <div className="character">
          <h1>CHARACTERS</h1>
          <p>キャラクター</p>
        </div>

        <div className="characterText">
          <h1>{t("characters.texts.characters_text1")}</h1>
          <h2>{t("characters.texts.characters_text2")}</h2>
        </div>
        <div className="characterText2">
          <h1>{t("characters.texts.characters_text3")}</h1>
          <h2>{t("characters.texts.characters_text4")}</h2>
          <h3>{t("characters.texts.characters_text5")}</h3>
        </div>

        <CharacterGrid
          characters={characters}
          onSelectCharacter={handleSelectCharacter}
        />

        <div className="kyz">
          <img src={kyz} width={"650px"} />
        </div>

        <div className="new3">
          <img width={130} alt="" src={New} />
        </div>

        <div className="new-text-block">
          <h1 className="new-text">{t("characters.texts.characters_text6")}</h1>
          <h2 className="new-text2">
            {t("characters.texts.characters_text7")}
          </h2>
          <h3 className="new-text3">
            {t("characters.texts.characters_text8")}
          </h3>
        </div>

        <div className="monster">
          <img src={monster} width={"670px"} />
        </div>

        {selectedCharacter && (
          <CharacterDetailModal
            character={selectedCharacter}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default CharacterApp;
