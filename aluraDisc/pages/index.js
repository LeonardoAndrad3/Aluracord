import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { useRouter } from 'next/router';

function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
  // const username = 'LeonardoAndrad3';

  const [username, setUsername] = React.useState("leonardoAndrad3");
  const pagesRouter = useRouter();
  const [img, setImg] = React.useState(username);

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[600],
          backgroundImage: 'url(https://www.securityreport.com.br/wp-content/uploads/2021/09/businessman-protecting-data-personal-information-cyber-security-data-concept-padlock-and-internet-te.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '8px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.primary[900],
          }}
        >
          {/* Formulário */}
       
          <Box
            as="form"
            onSubmit={(event)=>{
              event.preventDefault();
              pagesRouter.push("/chat");
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Image
              styleSheet={{
                width: "50px",
                minHeight: "50px",
              }}
              src='https://cdn-icons.flaticon.com/png/512/2592/premium/2592258.png?token=exp=1643205182~hmac=12b2baaa947ab2b7d677e3105eb9c4b7'
            />

            <Titulo tag="h2">Welcome everyone</Titulo> 
            
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

{/* 
              <input
                type="text"
                value={username}
                onChange={(event) => {
                  console.log("usuario digitou", event)

                  //Onde está?
                  console.log(event.target.value);

                  //mudar váriavel pelo useState do react

                  const value = event.target.value;

                  setUsername(value);
                }}

              /> */}
      
            <TextField
              value={username}
              
              onChange={(event)=>{
                const {value} = event.target;
                setUsername(value);
                console.log(value);
                if(value.length > 2){
                  setImg(value);
                }else{
                  setImg();
                }
              }}

              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[100],
                  mainColor: appConfig.theme.colors.neutrals[400],
                  mainColorHighlight: appConfig.theme.colors.primary['050'],
                  backgroundColor: appConfig.theme.colors.neutrals[700],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[200],
                mainColorLight: appConfig.theme.colors.primary[100],
                mainColorStrong: appConfig.theme.colors.primary['050'],
              }}
            />
          </Box>
          {/* Formulário */}

              {/* <Box
                styleSheet={{
                  backgroundColor: appConfig.theme.colors.neutrals["100"],
                  border: '1px solid',
                  borderColor: appConfig.theme.colors.neutrals["200"],
                  minHeight: "120px",
                }}
              /> */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals["800"],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[0],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              
              src={`https://github.com/${img}.png`}  
            />

            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>  
    </>
  );
}