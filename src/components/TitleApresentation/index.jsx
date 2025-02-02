import React from 'react'
import Button from '../Btn/index'
import * as Styled from './style.jsx';

export default function() {
    function openLink(){
        window.open('https://w2g-website.vercel.app/sign-in', '_blank');
      };
      
    return(
        <Styled.Content>  
            <Styled.Title>Tenha um planejamento de viagem personalizado</Styled.Title>
            <Styled.SubTitle>Crie experiências de viagens únicas e inesquecíveis</Styled.SubTitle>
            <Styled.Margin>
                <Button text={"Começar Jornada! (em manutenção)"} size={"md"} background={"var(--primary-color)"} onClick={openLink}/>
            </Styled.Margin>
        </Styled.Content>
    )
}