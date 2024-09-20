import React, { useState } from "react";

export default function GameBoard({ charactor }) {
  return (
    <>
      <div>
        <button>
          {" "}
          <img src={charactor.image}></img>
        </button>
      </div>
    </>
  );
}
