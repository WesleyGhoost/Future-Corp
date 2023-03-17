import { useEffect } from "react"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Reserve } from "../components/Reserve"
import { IntroTitle, Main } from "../styles/StyledHome"
import { AboutIA, AboutIADescrip, AboutIAList, AboutIATitle, Intro } from "../styles/StyledIA"


export const IA = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return(
        <Main>
            <Navbar />
            <Intro>
                <IntroTitle>FCAIIW</IntroTitle>
            </Intro>

            <AboutIA>
                <AboutIATitle>Sobre a IA</AboutIATitle>
                <AboutIADescrip>
                    Agora mais perto do que nunca de surgir, a nossa incrível IA nomeada por nós como 'FCAIIW' (Future Corp Artificial Intelligence In Web) veio para competir com os maiores serviços de inteligência artificial do mercado, com um preço super acessível e absolutamente poderoso.
                </AboutIADescrip>
                <AboutIADescrip>
                    Confira alguns de seus benefícios logo a baixo:
                </AboutIADescrip>
                <AboutIAList>
                    <li>Tradução imediata para todas as línguas existentes, ou até mesmo de línguas já não usadas, como o latim.</li>
                    <li>Geração de qualquer imagem, vídeo, ou até mesmo jogo que for de sua vontade.</li>
                    <li>Possibilidade de treinar a IA para ela fazer recomendações no seu dia a dia, indo de 'o que comer' até 'o que assistir'</li>
                    <li>VoiceCopy: tecnologia que faz com que IA consiga copiar de forma perfeita a voz de qualquer pessoa.</li>
                </AboutIAList>
                <Reserve />
            </AboutIA>
            <Footer />
        </Main>
    )
}