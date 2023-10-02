import React from "react";
import Planet from '../../Planet/index'
import * as Styled from './style.jsx';


const CardApresentation = React.forwardRef((props, ref) => {
  return (
    <>
      <Styled.Card ref={ref}>
      <Styled.Align>
          <Styled.CardHeaderLeft/>
          <Styled.CardHeader>
            {props.text}
          </Styled.CardHeader>
          <Styled.CardHeaderRight/>
      </Styled.Align>
      <Styled.Content>
        <Styled.Text>Planeje viagens e explore o mundo do seu jeito</Styled.Text>
        <Planet/>
      </Styled.Content>
      </Styled.Card>
      
    </>
  )
})

export default CardApresentation;