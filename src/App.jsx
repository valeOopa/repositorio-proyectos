
import Footer from './Footer';
import ProjectsGalery from './ProjectsGalery';
import profileImage from './assets/profile-image.jpg'

function App() {

  return (
    <>
      <header id='header'>
        <div id='header__f-row'>
          <h1 id='header__name'>Delgadino Valentino</h1>
          <img id='header__profileImg' src={profileImage} alt="Imagen de perfil" />
        </div>
        <p id='header__paragraph'>Cada uno de mis proyectos tiene una interfaz agradable para el usuario, respetando las normas de UX/UI y contiene un diseño responsivo.</p>
      </header>
      <ProjectsGalery/>
      <Footer/>
    </>
  )
}

export default App
