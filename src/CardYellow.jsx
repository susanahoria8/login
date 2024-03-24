import './LoginPage.css';
import user from './user.png';
function CardYellow() {
	return(
		<>
			 <div className='container-yellow'>
		            <div className='circulo'>
		              <div className='img' style={{ backgroundImage: `url(${user})`}}></div>
		            </div>
		            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum turpis ut massa egestas malesuada.</p>
		          </div>
		</>
		);
}

export default CardYellow;