export const Wrap = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 30px',
      fontFamily: `'Lato', sans-serif`,
      backgroundColor: '#FBFBF9',
      minHeight: '100vh',
      boxSizing: 'border-box'
    }}
  >
    {children}
  </div>
)

export const Main = ({ children }) => (
  <main
    style={{
      maxWidth: '820px',
      padding: '0 30px',
      width: '100%',
      marginTop: '100px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    {children}
  </main>
)

export const H1 = ({ children }) => (
  <h1>
    {children}
  </h1>
)

export const GitHubButton = ({ children, ...rest }) => (
  <a
    {...rest}
    style={{
      borderRadius: '4px',
      border: '1px solid black',
      padding: '10px 12px',
      color: 'black',
      textDecoration: 'none',
      marginTop: '20px',
      display: 'grid',
      gap: '14px',
      gridTemplateColumns: 'auto auto',
      alignSelf: 'flex-start'
    }}
  >
    {children}
  </a>
)

export const Seedling = ({ children }) => (
  <div
    style={{
      fontSize: '30px',
      position: 'absolute',
      left: '-10px',
      top: '16px'
    }}
  >
    {children}
  </div>
)

export const H2 = ({ children }) => (
  <main
    style={{
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      fontSize: '16px',
      marginTop: '70px'
    }}
  >
    {children}
  </main>
)

export const FeatureList = ({ children }) => (
  <ul
    style={{
      margin: '18px 0 0 0',
      padding: '0'
    }}
  >
    {children}
  </ul>
)

export const PostList = ({ children }) => (
  <ul
    style={{
      margin: '22px 0 0 0',
      padding: '0',
      listStyleType: 'none'
    }}
  >
    {children}
  </ul>
)

export const ListItem = ({ children }) => (
  <li
    style={{
      fontSize: '21px',
      marginBottom: '16px'
    }}
  >
    {children}
  </li>
)