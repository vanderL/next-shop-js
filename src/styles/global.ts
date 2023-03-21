import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100'
  },

  'body, input, textarea, button': {
    fontWeight: 400,
    fontFamily: 'Roboto',
  }
})