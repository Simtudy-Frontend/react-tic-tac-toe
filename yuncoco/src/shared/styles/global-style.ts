import { createGlobalStyle } from "styled-components";

import color from "./color";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 62.5%;
    font-weight: 400;
    letter-spacing: -0.03em;
    word-break: keep-all;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */

    &::-webkit-scrollbar {
    width: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${color.gray300};
      border-radius: 1rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${color.gray100};
      border-radius: 1rem;
    }
  }

  .ant-picker-dropdown {
    * {
      font-size: medium;
    }
  }

  html, body {
    position: fixed; /* INFO: iOS scroll bounce 방지용 */
    overflow: hidden; /* INFO: iOS scroll bounce 방지용 */
    width: 100%;
    height: 100%;
    text-size-adjust: none;
    -webkit-tap-highlight-color: transparent;
  }

  label{
    background-color: transparent;
    cursor: inherit;
  }

  button {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    border-radius: 0;
    background-color: transparent;
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    font-size: 1.6rem;

    &:focus {
      outline: 0;
      box-shadow: none !important;
    }
  }

  select {
    outline: none; 
    appearance: none;
    font-size: 1.6rem;
  }

  input {
    box-shadow: none;
    border-radius: 0;
    border: none;
    outline: none;
    appearance: none;
    background-color: transparent;
    appearance: none;
    font-family: sans-serif;
    font-size: 1.6rem;

    &:focus {
      outline: 0;
      box-shadow: none !important;
    }

    /* Chrome 및 Safari에서 자동완성 텍스트 선택 시 배경색 변경 제거 */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px transparent inset !important; /* 배경색 투명화 */
      box-shadow: 0 0 0 30px transparent inset !important;
      -webkit-text-fill-color: inherit !important; /* 텍스트 색상 유지 */
      transition: background-color 5000s ease-in-out 0s; /* background-color의 변화 억제 */
    }

    &:-internal-autofill-selected {
      background-color: transparent !important;
    }

    &[type="number"] {
    -moz-appearance: textfield; /* Firefox에서 스핀 버튼 제거 */
    -webkit-appearance: none; /* Chrome, Safari, Edge에서 스핀 버튼 제거 */
    appearance: none; /* 기본 설정 */

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0; /* 스핀 버튼 여백 제거 */
    }
  }
  }

  textarea {
    outline: none;
    border-radius: 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: white;
    font-size: 1.6rem;
  }

  p {
    margin: 0;
    font-size: 1.6rem;
    -webkit-tap-highlight-color: transparent;
  }

  span {
    font-size: 1.6rem;
    -webkit-tap-highlight-color: transparent;
  }

  div {
    font-size: 1.6rem;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    font-size: 1.6rem;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  hr{
    font-size: 1.6rem;
    border: none;
    height: 0;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
