import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/Global'
import Theme from 'styles/Theme'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={Theme.light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
