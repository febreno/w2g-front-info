import React from "react";
import img1 from '../../../img/weddingPlannerPana.png'
import img2 from '../../../img/userflowAmico.png'
import img3 from '../../../img/timelineAmico.png'


import * as Styled from './style.jsx';


export default function  CardHoverText(){
  return (
    <Styled.Wrapper>
        <Styled.Card>
            <Styled.Img src={img1}/>
            <Styled.Info>
                <Styled.Title>Planejamento</Styled.Title>
                <Styled.Text>Pleneje viagens, eventos e destinos de acordo com suas preferências</Styled.Text>
            </Styled.Info>
        </Styled.Card>
        <Styled.Card>
            <Styled.Img src={img2}/>
            <Styled.Info>
                <Styled.Title>Organização</Styled.Title>
                <Styled.Text>A dificuldade com quantidade de opções de viagens e pouco tempo livre são coisas do passado</Styled.Text>
            </Styled.Info>
        </Styled.Card>
        <Styled.Card>
            <Styled.Img src={img3}/>
            <Styled.Info>
                <Styled.Title>Praticidade</Styled.Title>
                <Styled.Text>Um planejamento simplificado e ágil com uma interface intuitiva</Styled.Text>
            </Styled.Info>
        </Styled.Card>
    </Styled.Wrapper>
  )
}
