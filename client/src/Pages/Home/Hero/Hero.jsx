import './Hero.css'
import Banner from '../../../assets/banner-img.png'

const Hero = () => {

    return (<div className='hero-wrapper'>
        <div className='hero-container'>
            <div className='hero-content'>
                <h1>Sales</h1>
                <p>Join the revolution of best Music Accessories and get one of our latest product now at your doorsteps.</p>
                <div className='hero-btn'>
                    <button>Read More</button>
                    <button>Shop Now</button>
                </div>
            </div>
            <img src={Banner} alt='banner-logo' />
        </div>
    </div>);
}
export default Hero;