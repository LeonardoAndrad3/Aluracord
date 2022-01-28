function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        ::-webkit-scrollbar {
          width: 3px;
        }
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px grey; 
          border-radius: 1px;
        }
         
        ::-webkit-scrollbar-thumb {
          background: #52B788; 
          border-radius: 2px;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

export default function MyApp({ Component, pageProps }) { 
    return (
    <>
        <Component {...pageProps} /> 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        
        <GlobalStyle/>
    </>
    )
  }