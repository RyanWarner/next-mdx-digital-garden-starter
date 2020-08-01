import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  font-family: 'Lato', sans-serif;
  background-color: #FBFBF9;
  min-height: 100vh;
  box-sizing: border-box;
`

export const Main = styled.main`
  max-width: 700px;
  padding: 0 30px;
  width: 100%;
  margin-top: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const H1 = styled.h1``

export const GitHubButton = styled.a`
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 12px;
  color: black;
  text-decoration: none;
  margin-top: 20px;
  display: grid;
  gap: 14px;
  grid-template-columns: auto auto;
  align-self: flex-start;
`

export const Seedling = styled.div`
  font-size: 30px;
  position: absolute;
  left: -10px;
  top: 16px;
`

export const H2 = styled.h2`
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-size: 16px;
  margin-top: 70px;
`

export const FeatureList = styled.ul`
  margin: 18px 0 0 0;
  padding: 0;
`

export const PostList = styled.ul`
  margin: 22px 0 0 0;
  padding: 0;
  list-style-type: none;
`

export const ListItem = styled.li`
  font-size: 21px;
  margin-bottom: 16px;
`

export const PostListItem = styled.li`
  margin-bottom: 30px;
`