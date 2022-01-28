import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import {createClient} from '@supabase/supabase-js';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMyMzI1NiwiZXhwIjoxOTU4ODk5MjU2fQ.yvAyFRJWHBqMofXMGtI0UiBrb95XrJ7BFCUGOqjcEEs';
const SUPABASE_URL =  'https://sneppqmpnqmeoqzgbleo.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function ChatPage() {
    // Sua lógica vai aqui
    // ./Sua lógica vai aqui

    const [mensagem, setMensagem] = React.useState('');
    const [listMensagem, setListMensagem] = React.useState([]);
  
    React.useEffect(()=>{
        supabaseClient
            .from('listMensagem')
            .select('*')
            .order('id', {ascending: false})
            .then(({data})=>{
                setListMensagem(data);
            })
    }, [])


    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            //Pegando Id do supabase
            de: "leonardoAndrad3",
            texto: novaMensagem
        }

        supabaseClient
        .from('listMensagem')
        .insert(mensagem)
        .then(({data})=>{

            setListMensagem([
                data[0],
                ...listMensagem
            ]);
            setMensagem('');
        })
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://www.securityreport.com.br/wp-content/uploads/2021/09/businessman-protecting-data-personal-information-cyber-security-data-concept-padlock-and-internet-te.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listMensagem} />

                    {/* {listMensagem.map((mensagemAtual) =>{
                       return(
                        <li key={mensagemAtual.id}>
                                {mensagemAtual.de}: {mensagemAtual.texto}                         
                        </li>
                       )
                   })}
                     */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'stretch',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event) => {
                                const { value } = event.target;
                                setMensagem(value);
                            }}
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    if(mensagem.length > 0){
                                        event.preventDefault();
                                        handleNovaMensagem(mensagem);
                                    }
                                    event.preventDefault();
                                }                         
                                
                            }}
                            
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px 0px 0px 5px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: 'auto',
                                padding: '6px 10px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                         <Button 
                         onClick={()=>{
                            if(mensagem.length > 0){
                                handleNovaMensagem(mensagem);
                            }
                         }}                         
                         label='Enviar'
                            styleSheet={{
                                height: '44px',
                                padding: '5px 6px',
                                borderRadius: '0 5px 5px 0',
                            }}
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals['000'],
                                mainColor: appConfig.theme.colors.primary['050'],
                                mainColorLight: appConfig.theme.colors.neutrals['050'],
                                mainColorStrong: appConfig.theme.colors.primary[300]
                            }}
                        />   
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(mensagem) {

    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {mensagem.mensagens.map((mensagemAtual) => {
                return (
                    <Text
                        key={mensagemAtual.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px 8px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                alignItems: 'center',
                                display: 'flex',
                                marginBottom: '6px',
                                
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagemAtual.de}.png`}
                            />
                            <Text tag="strong">
                                {mensagemAtual.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                            
                            <Button
                            size='xs'  
                            variant='tertiary'
                            colorVariant='light'
                            styleSheet={{
                                border: '0px',
                                alignItems: 'center',
                                height: '20px',
                                marginLeft: 'auto',
                                width: '0px'
                            }}
                            label='X'
                            onClick={async ()=>{

                                const {data, erro} =  supabaseClient
                                .from('listMensagem')
                                .delete()
                                .match({id: mensagemAtual.id})
                                .then(()=>{                                    
                                                                               
                                    })
                            }}
                            />
                        </Box>
                        {mensagemAtual.texto}
                    </Text>
                )
            })}

        </Box>
    )

}

