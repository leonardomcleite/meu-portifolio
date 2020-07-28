import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'
import '../../styles/sass/_technology.scss'
import CardTechnology from 'components/CardTechnology'
import { delay } from 'core/scroll.consts'

const Technology = () => {

  const technologies: any[] = [
    {name: 'HTML', icon: 'fab fa-html5', description: 'HTML é uma linguagem de marcação utilizada na construção de páginas web'},
    {name: 'CSS', icon: 'fab fa-css3-alt', description: 'O CSS define como serão exibidos os elementos contidos no código'},
    {name: 'Sass', icon: 'fab fa-sass', description: 'Sass é um pré-processador de CSS que auxilia na produtividade de códigos.'},
    {name: 'JavaScript/ TypeScript', icon: 'fab fa-js', description: 'Uma das linguagens de programação mais utilizadas hoje em dia'},
    {name: 'Angular', icon: 'fab fa-angular', description: 'Framework usado para construção de aplicações SPA (Single Page Application)'},
    {name: 'React JS', icon: 'fab fa-react', description: 'Biblioteca/Framework usada para construção de aplicações SPA (Single Page Application)'},
    {name: 'React Native', icon: 'fab fa-react', description: 'Biblioteca/Framework usada para desenvolvimento de aplicativos para Android e iOS de forma nativa'},
    {name: 'Node.js', icon: 'fab fa-node-js', description: 'Com essa tecnologia podemos criar desde sites até APIs diretamente do servidor'},
    {name: 'Java', icon: 'fab fa-java', description: 'Com essa tecnologia podemos criar desde sites até APIs diretamente do servidor'},
    {name: 'MongoDB', img: './assets/icons/mongodb.svg', description: 'MongoDB é um banco de dados NoSQL orientado a documentos estruturados no formato JSON'},
    {name: 'SQL', icon: 'fas fa-database', description: 'Linguagem de pesquisa declarativa padrão para banco de dados relacionals'},
    {name: 'Ágil', img: './assets/icons/agile.svg', description: 'Desenvolvimento Ágil de Software ou Método ágil consiste em um conjunto de comportamentos, processos, etc, utilizados para a criação de produtos.'},
  ];

  return(
    <ScrollableAnchor id={'technology'}>
      <div className='container'>
        
          <div className='flex col center'>
            <Typography variant='h4' className='title'>
              Tecnologias
            </Typography>
            <Typography variant='h1' className='title after-divider'>
              Confira as tecnologias que trabalho
            </Typography>
          </div>
          <Grid 
            style={{paddingBottom: 24}}
            container 
            spacing={7} 
            direction="row"
            justify="center"
            alignItems="center">
              {technologies.map((item, index) => (
                <Grid key={index} container item xs={3} spacing={3}>
                  <ScrollAnimation animateIn="zoom" duration={0.5} delay={delay} offset={0}>
                    <CardTechnology data={item}/>
                  </ScrollAnimation>
                </Grid>
              ))}
          </Grid>
      </div>
    </ScrollableAnchor>
  )
}

export default Technology