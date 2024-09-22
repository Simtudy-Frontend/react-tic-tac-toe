import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./selection-board.css";
import p0 from "./assets/p0.webp";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import p5 from "./assets/p5.png";
import p6 from "./assets/p6.png";
import p7 from "./assets/p7.png";
import p8 from "./assets/p8.png";
import p9 from "./assets/p9.png";
import p10 from "./assets/p10.png";
import p11 from "./assets/p11.png";
import p12 from "./assets/p12.png";
import p13 from "./assets/p13.png";
import p14 from "./assets/p14.png";
import p15 from "./assets/p15.png";
import p16 from "./assets/p16.png";
import p17 from "./assets/p17.png";
import p18 from "./assets/p18.png";
import { setPlayerCharacter } from "./store";

export default function SelectionPage() {
  const dispatch = useDispatch();
  const player1Character = useSelector((state) => state.game.player1Character);
  const player2Character = useSelector((state) => state.game.player2Character);

  const characters = [
    { id: 0, image: p0 },
    { id: 1, image: p1 },
    { id: 2, image: p2 },
    { id: 3, image: p3 },
    { id: 4, image: p4 },
    { id: 5, image: p5 },
    { id: 6, image: p6 },
    { id: 7, image: p7 },
    { id: 8, image: p8 },
    { id: 9, image: p9 },
    { id: 10, image: p10 },
    { id: 11, image: p11 },
    { id: 12, image: p12 },
    { id: 13, image: p13 },
    { id: 14, image: p14 },
    { id: 15, image: p15 },
    { id: 16, image: p16 },
    { id: 17, image: p17 },
    { id: 18, image: p18 },
  ];

  const handleCharacterSelection = (character) => {
    if (!player1Character) {
      dispatch(setPlayerCharacter({ player: 1, character }));
    } else if (!player2Character) {
      dispatch(setPlayerCharacter({ player: 2, character }));
    }
  };

  return (
    <>
      <h1> 캐릭터를 선택하세요 하츄~ </h1>
      <div>
        {characters.map((char) => (
          <button
            key={char.id}
            onClick={() => handleCharacterSelection(char)}
            disabled={player1Character && player2Character}
          >
            <img src={char.image} alt={`Character ${char.id}`} />
          </button>
        ))}
      </div>
      {player1Character && !player2Character && (
        <p>플레이어 1이 선택되었습니다. 플레이어 2를 선택해주세요.</p>
      )}
      {player1Character && player2Character && (
        <p>두 플레이어 모두 선택되었습니다.</p>
      )}
    </>
  );
}
