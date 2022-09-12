"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const THEMES = {
    default: (0, styled_components_1.css) `
    background-color: rgb(40, 40, 40);
    color: rgb(255, 255, 255);
    border: 2px solid black;
  `,
    dark: (0, styled_components_1.css) `
    background-color: rgb(10, 10, 10);
    color: rgb(180, 180, 180);
    border: 2px solid black;
  `,
    light: (0, styled_components_1.css) `
    background-color: rgb(220, 220, 220);
    color: rgb(0, 0, 0);
    border: 2px solid white;
  `,
    grass: (0, styled_components_1.css) `
    background-color: rgb(40, 240, 40);
    color: rgb(0, 0, 0);
    border: 2px solid black;
  `,
    water: (0, styled_components_1.css) `
    background-color: rgb(40, 40, 240);
    color: rgb(255, 255, 255);
    border: 2px solid black;
  `,
    fire: (0, styled_components_1.css) `
    background-color: rgb(240, 60, 80);
    color: rgb(255, 255, 255);
    border: 2px solid black;
  `,
    earth: (0, styled_components_1.css) `
    background-color: rgb(100, 70, 0);
    color: rgb(255, 255, 255);
    border: 2px solid black;
  `,
    atlas: (0, styled_components_1.css) `
    background: #feac5e; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #4bc0c8,
      #c779d0,
      #feac5e
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #4bc0c8,
      #c779d0,
      #feac5e
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: rgb(255, 255, 255);
    border: 2px solid black;
  `,
    river: (0, styled_components_1.css) `
    background: #43cea2; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #185a9d,
      #43cea2
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #185a9d,
      #43cea2
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: rgb(255, 255, 255);
    border: 2px solid black;
  `,
    purpleBliss: (0, styled_components_1.css) `
    background: #360033; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #0b8793,
      #360033
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #0b8793,
      #360033
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: rgb(255, 255, 255);
    border: 2px solid black;
  `,
};
exports.default = THEMES;
