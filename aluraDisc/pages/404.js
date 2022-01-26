import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import axios, {AxiosRequestConfig} from "axios";
import React from 'react';


export default function pageErro404(){

        axios.get('https://api.github.com/users/leonardoAndrad3')
        .then( teste =>{
             console.log(teste.data);  
        });        
    
    return(
        <>
        Teste
        </>
    );
}