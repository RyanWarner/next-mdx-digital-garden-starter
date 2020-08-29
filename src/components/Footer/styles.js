import styled from 'styled-components'

import Twitter from '../Twitter'
import GitHub from '../GitHub'

export const Footer = styled.footer`
  height: 70px;
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${props => props.theme.rule};
`

export const Copyright = styled.p`
  display: flex;
  align-items: center;
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const StyledGitHub = styled(GitHub)`
  margin-left: 12px;
`

export const StyledTwitter = styled(Twitter)``

export const A = styled.a`
  &:hover {
    path {
      fill: ${props => props.theme.green10};
    }
  }
`
