import React from 'react';

import appFirebase from './credenciales';
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(appFirebase);

function Home({emailUser}){
	return (
		<>
			<h2>Bienvenido {emailUser}<button onClick={()=>signOut(auth)}>Logout</button></h2>
		</>
		);
}

export default Home;