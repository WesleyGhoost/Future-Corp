import { useEffect } from "react"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Reserve } from "../components/Reserve"
import { AboutChip, AboutChipDescrip, AboutChipTitle, Intro } from "../styles/StyledChip"
import { Main, IntroTitle } from '../styles/StyledHome'


export const Chip = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return(
        <Main>
            <Navbar />
            <Intro>
                <IntroTitle>Chips Neurais</IntroTitle>
            </Intro>

            <AboutChip>
                <AboutChipTitle>Sobre os chips</AboutChipTitle>
                <AboutChipDescrip>
                    Com mais de 3 anos de vida, o projeto dos chips neurais da Future Corp vão revolucionar a mente humana. O que era somente possível fazer através dos celulares, TVs, vídeogames, ou em qualquer outro dispositivo com a perspectiva de visão através da tela, agora também será possível fazer com o nosso chip.
                </AboutChipDescrip>
                <AboutChipDescrip>
                    Após a inserção do chip em seu cérebro, a sua percepção sobre o entretenimento nunca mais será a mesma. Filmes, séries e jogos poderão ser acessados com apenas um clique! Após tal ação, você será teletransportado para qualquer mundo que desejar, isso sem sair do conforto da sua casa!
                </AboutChipDescrip>
                <AboutChipDescrip>
                    Sem contar na tecnologia de "Imersão Sentida", onde o produto que tiver tal sistema poderá fazer com que você sinta, e não só veja. Toques, vibrações, cheiros, tudo isso pode se tornar realidade. Então tá esperando o que? Reserve já o chip!
                </AboutChipDescrip>
                <Reserve />
            </AboutChip>
            <Footer />
        </Main>
    )
}