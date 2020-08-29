import styled from 'styled-components'

const MaxWidth = styled.div`
  max-width: 700px;
  width: 100%;
`

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Width = ({ children, ...rest }) => (
  <CenterContainer {...rest}>
    <MaxWidth>{children}</MaxWidth>
  </CenterContainer>
)

export default Width
