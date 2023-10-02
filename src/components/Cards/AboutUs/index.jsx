import React from "react";
import Felipe from '../../../img/felipe.png'
import Vinicius from '../../../img/vinicius.png'
import Leandro from '../../../img/leandro.png'
import Gabriel from '../../../img/gabriel.png'
import Yujin from '../../../img/yujin.png'
import * as Styled from './style.jsx';


export default function AboutUs() {
  return (
      <Styled.Cards>
        <Styled.Card>
          <Styled.UserImage src={Felipe}/>
          <div>
            <Styled.Content>
              <Styled.Name>Felipe Sugisawa</Styled.Name>
              <Styled.Experience>Fullstack</Styled.Experience>
              <Styled.Icons>
              <a href="https://www.linkedin.com/in/felipe-sugisawa/" target="_blank" rel="noopener noreferrer">
                <Styled.LinkedinIcon/>
              </a>
              <a href="https://github.com/febreno" target="_blank" rel="noopener noreferrer">
                <Styled.GitHubIcon/>
              </a>
              </Styled.Icons>
            </Styled.Content>
          </div>
        </Styled.Card>
        <Styled.Card>
          <Styled.UserImage src={Gabriel}/>
          <div>
            <Styled.Content>
              <Styled.Name>Gabriel da Silva</Styled.Name>
              <Styled.Experience>Fullstack</Styled.Experience>
              <Styled.Icons>
                <a href="https://www.linkedin.com/in/seu-perfil-do-linkedin" target="_blank" rel="noopener noreferrer">
                  <Styled.LinkedinIcon/>
                </a>
                <a href="https://github.com/gjoao98" target="_blank" rel="noopener noreferrer">
                  <Styled.GitHubIcon/>
                </a>
              </Styled.Icons>
            </Styled.Content>
          </div>
        </Styled.Card>
        <Styled.Card>
          <Styled.UserImage src={Leandro}/>
          <div>
            <Styled.Content>
              <Styled.Name>Leandro Alves</Styled.Name>
              <Styled.Experience>Fullstack</Styled.Experience>
              <Styled.Icons>
                <a href="https://www.linkedin.com/in/seu-perfil-do-linkedin" target="_blank" rel="noopener noreferrer">
                  <Styled.LinkedinIcon/>
                </a>
                <a href="https://github.com/bragaLeandro" target="_blank" rel="noopener noreferrer">
                  <Styled.GitHubIcon/>
                </a>
              </Styled.Icons>
            </Styled.Content>
          </div>
        </Styled.Card>
        <Styled.Card>
          <Styled.UserImage src={Vinicius}/>
          <div>
            <Styled.Content>
              <Styled.Name>Vinicius Torres</Styled.Name>
              <Styled.Experience>QA & PO</Styled.Experience>
              <Styled.Icons>
                <a href="www.linkedin.com/in/vinicius-alves-torres" target="_blank" rel="noopener noreferrer">
                  <Styled.LinkedinIcon/>
                </a>
                <a href="https://github.com/ViniciusAlvesTorres" target="_blank" rel="noopener noreferrer">
                  <Styled.GitHubIcon/>
                </a>
              </Styled.Icons>
            </Styled.Content>
          </div>
        </Styled.Card>
        <Styled.Card>
          <Styled.UserImage src={Yujin}/>
          <div>
            <Styled.Content>
              <Styled.Name>Vinicius Yuji</Styled.Name>
              <Styled.Experience>Fullstack</Styled.Experience>
              <Styled.Icons>
                <a href="https://www.linkedin.com/in/seu-perfil-do-linkedin" target="_blank" rel="noopener noreferrer">
                  <Styled.LinkedinIcon/>
                </a>
                <a href="https://github.com/yujinishioka" target="_blank" rel="noopener noreferrer">
                  <Styled.GitHubIcon/>
                </a>
              </Styled.Icons>
            </Styled.Content>
          </div>
        </Styled.Card>
      </Styled.Cards>
  )
}
