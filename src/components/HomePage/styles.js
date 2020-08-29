import styled from 'styled-components'
import { Footer } from 'components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  box-sizing: border-box;
`

export const StyledFooter = styled(Footer)`
  margin-top: auto;
  padding-top: 40px;
`

export const Main = styled.main`
  max-width: 700px;
  padding: 0 30px;
  width: 100%;
  margin-top: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const H1 = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`

export const GitHubButton = styled.a`
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 12px;
  color: black;
  text-decoration: none;
  margin-top: 30px;
  display: grid;
  gap: 14px;
  grid-template-columns: auto auto;
  align-self: flex-start;
`

export const H2 = styled.h2`
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 100px;
  color: ${props => props.theme.text20};
`

export const FeatureList = styled.ul`
  margin: 8px 0 0 0;
  padding: 0 0 0 30px;
`

export const ListItem = styled.li`
  font-size: 21px;
  margin-bottom: 16px;
  color: ${props => props.theme.text20};
`

export const PostList = styled.ul`
  margin: 22px 0 0 0;
  padding: 0;
  list-style-type: none;
`

export const PostListItem = styled.li`
  margin-bottom: 30px;
`
