import React from 'react'
import Button from '../Btn/index'
import * as Styled from './style.jsx';

export default function() {
    function abrirInstagram(){
        window.open('https://where2go.website/SignIn', '_blank');
      };
      
    return(
        <Styled.Content>  
            <Styled.Title>Tenha um planejamento de viagem personalizado</Styled.Title>
            <Styled.SubTitle>Crie experiências de viagens únicas e inesquecíveis</Styled.SubTitle>
            <Styled.Margin>
                <Button text={"Começar Jornada!"} size={"md"} background={"var(--primary-color)"} onClick={abrirInstagram}/>
            </Styled.Margin>
        </Styled.Content>
    )
}