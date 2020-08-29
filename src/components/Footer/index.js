import * as S from './styles'
import { Width } from 'components'
import siteMetadata from 'siteMetadata'

const Footer = props => (
  <Width {...props}>
    <S.Footer>
      <S.Copyright>
        © {new Date().getFullYear()} {siteMetadata.author}
      </S.Copyright>
      <S.Social>
        <S.A href={`https://twitter.com/${siteMetadata.twitterHandle}`}>
          <S.StyledTwitter />
        </S.A>
        <S.A href={`https://github.com/${siteMetadata.githubUsername}`}>
          <S.StyledGitHub />
        </S.A>
      </S.Social>
    </S.Footer>
  </Width>
)

export default Footer
