const typeTokens = {
  fontFamily: 'Lato, sans-serif'
}

export default {
  light: {
    ...typeTokens,
    background: '#FBFBF9',
    text10: '#1E1E1B',
    text20: '#696966',
    rule: 'rgba(0, 0, 0, 0.1)',
    green10: '#79BB40',
    highlightBackground: '#ABEF70'
  },
  dark: {
    ...typeTokens,
    background: '#171716',
    text10: '#FBFBF9',
    text20: '#9C9C96',
    rule: 'rgba(255, 255, 255, 0.1)',
    green10: '#79BB40',
    highlightBackground: '#ABEF70'
  }
}
