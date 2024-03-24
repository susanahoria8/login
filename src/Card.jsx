import {useState} from 'react';

import appFirebase from '../src/credenciales';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
const auth= getAuth(appFirebase);


import CardYellow from './CardYellow';
import LoginPage from './LoginPage';
import Home from './Home';
import background from './background.png';
import './LoginPage.css';

function Card(){
	const [user, setUser] = useState(null);

  onAuthStateChanged(auth,(userFirebase)=> {
    if (userFirebase){
      setUser(userFirebase)
    }
    else{
      setUser(null)
    }
  })

	return(
		<>
			<div className='container' style={{ backgroundImage: `url(${background})`}}>
		        <div className='flex'>
		         	<CardYellow />
		          	<div className='container-login'>
		          		{user ? <Home emailUser={user.email} /> : <LoginPage/>}		          				          		
		        	</div>
	      		</div>
	      	</div>
		  </>
  );
}

export default Card;
