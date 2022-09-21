import { Dispatch, SetStateAction, SyntheticEvent } from 'react'
import styled, { css } from 'styled-components'

const CSS_COLOR_NAMES = [
  'AliceBlue',
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'none',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGrey',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGrey',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Grey',
  'Green',
  'GreenYellow',
  'HoneyDew',
  'HotPink',
  'IndianRed',
  'Indigo',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenRodYellow',
  'LightGrey',
  'LightGreen',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGrey',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquaMarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDrab',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenRod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'RebeccaPurple',
  'Red',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGrey',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'Tan',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
  'WhiteSmoke',
  'Yellow',
  'YellowGreen',
]

const ThemeSelector = ({
  setTheme,
  theme,
}: {
  setTheme: Dispatch<SetStateAction<string>>
  theme: string
}) => {
  const handleClick = (e: SyntheticEvent, color: string) => {
    e.preventDefault()
    setTheme(color)
  }
  const renderColors = () => {
    return CSS_COLOR_NAMES.map((color) => (
      <SMALL_JOURNAL
        $active={color === theme}
        key={color}
        onClick={(e) => handleClick(e, color)}
        $bg={color}
      />
    ))
  }
  return <THEME_SELECTOR>{renderColors()}</THEME_SELECTOR>
}

export default ThemeSelector

const THEME_SELECTOR = styled.form`
  position: absolute;
  width: 100vw;
  height: fit-content;
  padding: 30px 0;
  display: flex;
  overflow-x: auto;
  gap: 25px;
  bottom: 0;
  left: 0;
`

const SMALL_JOURNAL = styled.button<{ $active: boolean; $bg: string }>`
  width: 82.5px;
  height: 117.5px;
  aspect-ratio: 8.25 / 11.75;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.$bg};
  position: relative;
  transition: 250ms;

  ::before {
    content: '';
    position: absolute;
    width: 13%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
    border-radius: 6px 0 0 6px;
  }
  ${(props) =>
    props.$active &&
    css`
      transform: translateY(-15px);
      border: 1px solid #000;
    `};
`
