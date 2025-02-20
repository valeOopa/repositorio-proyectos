import PropTypes from 'prop-types';
import game from './assets/game.jpg';
import space from './assets/space.jpg';
import calculator from './assets/calculator.jpg';
import age from './assets/age.jpg';
import countries from './assets/countries.jpg';

const images = {
  game,
  space,
  calculator,
  age,
  countries,
};

function Project({ imageName, url, name, code }) {
  const imageSrc = images[imageName];

  if (!imageSrc) {
    return <p>Imagen no encontrada</p>;
  }

  return (
    <a className="project" href={url} target="_BLANK" rel="noopener noreferrer">
        <span className='project__name'>{name}</span>
        <a className='project__code-link' href={code}>Código</a>
        <a className='project__code-link-mobile' href={code}>Código</a>
      <img className="project__image" src={imageSrc} alt={imageName} />
    </a>
  );
}

Project.propTypes = {
  imageName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};

export default Project;