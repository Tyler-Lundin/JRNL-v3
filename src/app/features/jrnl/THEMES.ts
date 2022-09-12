import { css } from 'styled-components'

export type JrnlThemeType = typeof THEMES.default
export type TJrnlTheme =
  | 'default'
  | 'dark'
  | 'light'
  | 'jungle'
  | 'ocean'
  | 'volcano'
  | 'mountain'
  | 'atlas'
  | 'river'
  | 'bliss'

const THEMES = {
  default: css`
    background-color: rgb(40, 40, 40);
    color: rgb(255, 255, 255);
    border: 2px solid black;
  `,
  dark: css`
    background-color: rgb(10, 10, 10);
    color: rgb(180, 180, 180);
    border: 2px solid black;
  `,
  light: css`
    background-color: rgb(220, 220, 220);
    color: rgb(0, 0, 0);
    border: 2px solid white;
  `,
  jungle: css`
    background-color: rgb(40, 240, 40);
    color: rgb(0, 0, 0);
    border: 2px solid black;
  `,
  ocean: css`
    background-color: rgb(40, 40, 240);
    color: rgb(255, 255, 255);
    border: 2px solid black;
  `,
  volcano: css`
    background-color: rgb(240, 60, 80);
    color: rgb(255, 255, 255);
    border: 2px solid black;
  `,
  mountain: css`
    background-color: rgb(100, 70, 0);
    color: rgb(255, 255, 255);
    border: 2px solid black;
  `,
  atlas: css`
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
  river: css`
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
  bliss: css`
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
}

export default THEMES
