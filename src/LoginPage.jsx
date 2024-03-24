import React, { useState } from 'react';

import appFirebase from './credenciales';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase);
import './LoginPage.css'

function LoginPage(){
	const [register, setRegister] = useState(false);

	const functAutenticacion= async(e) =>{
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		const name = e.target.name.value;
		const lastname = e.target.lastname.value;

		if(register){
			try {
				await createUserWithEmailAndPassword(auth, name, lastname, email, password);
			} catch(error){
				alert("Asegurese que la contraseña tenga mas de 8 caracteres")
			}
			
		}
		else{
			try{
				await signInWithEmailAndPassword(auth, email, password);
			} catch (error) {
				alert("El correo o la contraseña son incorrectos")
			}
			
		}
	}
	return(
	
		    <div className='margin'>
		      <h1>Welcome</h1>
		      <h2>User Login</h2>
		      <form className='data' onSubmit={functAutenticacion}>
		      	{register && <div className='full-name'>
		      		<input 
			          	className='name' 
			          	type="text" 
			          	name="name" 
			          	id="name" 
			          	placeholder="Name" 
			          />
			          <input 
			          	className='last-name' 
			          	type="text" 
			          	name="lastname" 
			          	id="lastname" 
			          	placeholder="Last Name" 
			          />
		          </div>}
		      	
		          <input 
		          	className='email' 
		          	type="email" 
		          	name="email" 
		          	id="email" 
		          	placeholder="Email" 
		          />
		          <input className='password' type="password" name="password" id="password" placeholder="Password" />
		      </form>
		      <div className='debajo'>
			      <div className='option'>
			         <div>
			         	<input 
			         		type="radio" 
			         		name="remember" 
			         		id="remember" 
			         	/>
			         	<label>Remember me</label>
			         </div>
			            <a className='link' href="#">Forgot Password?</a>
			       </div>
			        <div className='action'>
			            <button 
			            	type="submit" 
			            	variant="primary"
			            >
			            {register ? "SIGN UP"  : "Inicia Sesion"}
			            </button>
			            <div>
				            <h4>
				            	{register ? "Si ya tienes cuenta" : "No tienes cuenta"}
				            </h4>
				            <button
				            	className= 'enlace' 
				            	onClick={()=>setRegister(!register)}
				            >
				            	{register ? "Inicia Sesion" : "Registrate"}
				            </button>
			            </div>
			        </div>
			    </div>
		    </div>
	);
}

export default LoginPage;