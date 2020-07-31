export const Wrap = ({ children }) => (
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
)

export const Main = ({ children }) => (
  <main
    style={{
      maxWidth: '700px',
      width: '100%'
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
