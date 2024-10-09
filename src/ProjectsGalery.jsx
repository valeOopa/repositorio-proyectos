import Project from './Project'

function ProjectsGalery() {
  return (
    <section id='galery-projects'>
        <div id='galery-projects__title-container'>
          <div id='title-container__square-purple'></div>
          <h2 id="title-container__title">MIS PROYECTOS</h2>
        </div>
        <div id='galery-projects__grid'>
            <Project imageName={"game"} url={"https://rock-paper-scissors-4.netlify.app/"} name={"Piedras papel o tijeras"} code={"https://github.com/valeOopa/rock-paper-scissors"}/>
            <Project imageName={"space"} url={"https://website-space-tourism.netlify.app/index.html"} name={"Space web"} code={"https://github.com/valeOopa/website-space-tourism/tree/main"}/>
            <Project imageName={"calculator"} url={"https://calculator-vale.netlify.app/"} name={"Calculadora"} code={"https://github.com/valeOopa/calculator"}/>
            <Project imageName={"age"} url={"https://age-calculator-app-2.netlify.app/"} name={"Calculadora de edad"} code={"https://github.com/valeOopa/age-calculator-app"}/>
            <Project imageName={"countries"} url={"https://countries-vale.netlify.app/"} name={"Paises API"} code={"https://github.com/valeOopa/countries"}/>
        </div>
    </section>
    
  )
}

export default ProjectsGalery
