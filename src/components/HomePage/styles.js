export const Wrap = ({ children }) =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 30px',
      fontFamily: `'Lato', sans-serif`
    }}
  >
    {children}
  </div>

export const Main = ({ children }) =>
  <main
    style={{
      maxWidth: '820px',
      padding: '0 30px',
      width: '100%',
      marginTop: '100px'
    }}
  >
    {children}
  </main>

export const H2 = ({ children }) =>
<main
  style={{
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    fontSize: '16px',
    marginTop: '50px'
  }}
>
  {children}
</main>