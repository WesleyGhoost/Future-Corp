import IA from '../imgs/IA.png'
import Glasses from '../imgs/virtual-glasses.jpg'
import Chip from '../imgs/chip.jfif'

import Map from '../imgs/mapa.png'
import Colaborations from '../imgs/rocket.jpg'
import Team from '../imgs/team.jpg'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Main, IntroTitle, Intro, AboutUs, AboutUsTitle, AboutUsDescrip, Projects, ProjectsTitle, ProjectsDescrip, ProjectsImg, Corp, CorpTitle, CorpInfos, CorpImage, CorpInfo, IntroSubTitle } from '../styles/StyledHome'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
     
    const goToChip = useNavigate()
    const goToGlasses = useNavigate()
    const goToIA = useNavigate()
    
    return(
        <Main>
            <Navbar />
            <Intro>
                <IntroTitle>Future Corp</IntroTitle>
                <IntroSubTitle>Venha conhecer a empresa de tecnologia mais ambiciosa do mundo!</IntroSubTitle>
            </Intro>

            <AboutUs>
                <AboutUsTitle>Sobre nós</AboutUsTitle>
                <AboutUsDescrip>
                    A Future Corp foi fundada nos anos 2000, e desde sua criação ela sempre fica um passo a frente, se preocupando com o que o futuro pode trazer a todo o nosso planeta. E por conta deste mesmo pensamento, a nossa corporação se encontra com o mais alto nível de tecnologia do mercado, criando projetos de alto orçamento que buscam revolucionar o mundo.
                </AboutUsDescrip>
            </AboutUs>

            <Projects>
                <ProjectsTitle>Projetos</ProjectsTitle>
                <ProjectsDescrip>
                    Estes são os projetos nos quais estamos trabalhando arduamente para torná-los realidade! E se for de sua vontade, você pode ajudar doando ou também financiando-os, desta forma, eles serão alcançados de forma mais rápida e eficaz.
                </ProjectsDescrip>
                <ProjectsDescrip>
                    É possível conferir suas nomeações e descrições clicando nas imagens a baixo ou nos links presentes na barra de navegação.
                </ProjectsDescrip>
                <ProjectsImg src={Chip} onClick={() => goToChip('/chip')}/>
                <ProjectsImg src={Glasses} onClick={() => goToGlasses('/glasses')}/>
                <ProjectsImg src={IA} onClick={() => goToIA('/ia')}/>
            </Projects>

            <Corp>
                <CorpTitle>Corporação</CorpTitle>
                <CorpInfos>
                    <CorpImage src={Map}/>
                    <CorpInfo>
                        A Future Corp está presente em diversas regiões do mundo, em lugares como: Estados Unidos, Canadá, Alemanha, Suíça, Brasil, e agora com uma nova instalação no Japão, abrindo portas para o mercado oriental. E muito em breve, em instalações da América do Norte, teremos nosso espaço aberto para visitantes.
                    </CorpInfo>
                    <CorpImage src={Colaborations}/>
                    <CorpInfo>
                        Até o presente momento, nós já fizemos colaborações com diversos nomes gigantes da tecnologia, entre eles estão Microsoft, Apple, Meta e até mesmo para a NASA, onde ajudamos na construção de novas tecnologias para os seus tão avançados foguetes espaciais.
                    </CorpInfo>
                    <CorpImage src={Team}/>
                    <CorpInfo>
                        A nossa equipe é escolhida com total cautela, já que para trazermos o melhor desempenho nos nossos resultados, precisamos selecionar as pessoas mais capacitadas no mundo da tecnologia.
                    </CorpInfo>
                </CorpInfos>
            </Corp>
            <Footer />
        </Main>
    )
}