import Link from 'next/link'

import * as S from './styles'
import { Width } from 'components'
import siteMetadata from 'siteMetadata'

const Footer = props =>
  <Width {...props}>
    <S.Footer>
      <S.Copyright>
        © {new Date().getFullYear()} {siteMetadata.author}
      </S.Copyright>
    </S.Footer>
  </Width>

export default Footer
