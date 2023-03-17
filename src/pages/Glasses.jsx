import { useEffect } from "react"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Reserve } from "../components/Reserve"
import { AboutGlasses, AboutGlassesDescrip, AboutGlassesTitle, Intro } from "../styles/StyledGlasses"
import { IntroTitle, Main } from "../styles/StyledHome"


export const Glasses = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return(
        <Main>
            <Navbar />
            <Intro>
                <IntroTitle>Óculos de Escala Micro</IntroTitle>
            </Intro>

            <AboutGlasses>
                <AboutGlassesTitle>Sobre os óculos</AboutGlassesTitle>
                <AboutGlassesDescrip>
                    Já imaginou conseguir enxergar o movimento das partículas de elétrons da sua própria mão? Ou mesmo ver toda a civilização de pugas que podem estar em seu cachorro? Então os Óculos de Escala Micro são perfeitos para você!
                </AboutGlassesDescrip>
                <AboutGlassesDescrip>
                    Contendo uma tecnologia capaz de reduzir o zoom em uma escala micro, com este óculos será possível ver e conhecer os milhares de seres e conceitos minúsculos que existem ao nosso redor, indo das bactérias até as partículas que vieram do começo de nosso universo. E você pode diminuir e aumentar essa escala à sua vontade, quando e onde quiser. Não deixe de testar esta maravilha, reserve já o seu!
                </AboutGlassesDescrip>
                <Reserve />
            </AboutGlasses>
            <Footer />
        </Main>
    )
}