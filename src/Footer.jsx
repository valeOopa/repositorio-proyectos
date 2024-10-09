import wa from './assets/wa.png';
import ig from './assets/ig.png';
import github from './assets/github.png';
function Footer() {
return (
    <footer id="footer">
        <a className='footer__contacts' href='https://wa.me/5493424470926' target="_BLANK">
            <img className='contacts__img' src={wa} alt="WhatsApp" title='WhatsApp'/>
        </a>
        <a className='footer__contacts' href='https://www.instagram.com/valentino_delgadino' target="_BLANK">
            <img className='contacts__img'  src={ig} alt="Instagram" title='Instagram'/>
        </a>
        <a className='footer__contacts' href='https://github.com/valeOopa' target="_BLANK">
            <img className='contacts__img' src={github} alt="GitHub" title='GitHub'/>
        </a>
    </footer>
)
}

export default Footer
