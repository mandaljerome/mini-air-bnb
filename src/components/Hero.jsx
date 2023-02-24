import './Hero.scss'
import image from '../assets/heroImage.png'

const Hero = () => {
   return (
      <div className='hero section'>
         <img src={image} alt='main-image' />
         <h1>Online Experience</h1>
         <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
         </p>
      </div>
   )
}

export default Hero
