import * as S from './styles'
import { Width } from 'components'
import siteConfig from 'site.config'

const Footer = props => (
  <Width {...props}>
    <S.Footer>
      <S.Copyright>
        © {new Date().getFullYear()} {siteConfig.author}
      </S.Copyright>
      <S.Social>
        <S.A href={`https://twitter.com/${siteConfig.twitterHandle}`}>
          <S.StyledTwitter />
        </S.A>
        <S.A href={`https://github.com/${siteConfig.githubUsername}`}>
          <S.StyledGitHub />
        </S.A>
      </S.Social>
    </S.Footer>
  </Width>
)

export default Footer
