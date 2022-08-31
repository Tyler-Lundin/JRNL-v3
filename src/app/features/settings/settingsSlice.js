import { createSlice } from '@reduxjs/toolkit'
import { css } from 'styled-components'

const fontSizes = {
  s: css`
    font-size: 14px;
  `,
  m: css`
    font-size: 16px;
  `,
  l: css`
    font-size: 18px;
  `,
  xl: css`
    font-size: 20px;
  `,
  xxl: css`
    font-size: 22px;
  `,
}

const defaultFontPack = {
  content: css`
    font-family: 'Komet', sans-serif;
  `,
  title: css`
    font-family: 'Komet Bold', sans-serif;
    font-weight: 700;
  `,
}
const initialState = {
  darkmode: false,
  fontSize:
    fontSizes ||
    css`
      font-size: 1rem;
    `,
  fontPack: defaultFontPack,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleDarkmode: (state) => {
      state.darkmode = !state.darkmode
    },
  },
})

export const { toggleDarkmode } = settingsSlice.actions

export default settingsSlice.reducer
