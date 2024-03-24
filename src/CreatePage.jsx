import React, { useState } from 'react';



function CreatePage(){
	
	return(

			<div className='margin'>
				<h1>Create Account</h1>
				<h2>Sign Up</h2>
				<form className='data'>
					<div className='full-name'>
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
			          	name="last-name" 
			          	id="last-name" 
			          	placeholder="Last Name" 
			          />
		          	</div>
		          	<input 
		          		className='email' 
		          		type="email" 
		          		name="email" 
		          		id="email" 
		          		placeholder="Email" 
		          	/>
		          	<input 
			          	className='password' 
			          	type="password" 
			          	name="password" 
			          	id="password" 
			          	placeholder="Password" 
		          	/>
		          	<input 
		          		className='password' 
		          		type="password" 
		          		name="confirm-password" 
		          		id="confirm-password" 
		          		placeholder="Confirm Password" 
		          	/>
			    </form>
		         <div className='action'>
		            <button type="submit" variant="primary">{register ? "SIGN UP" : "Inicia Sesion"}</button>
		            <h4>{register ? "Si ya tienes cuenta" : "No tienes cuenta"}</h4><a className='link' href='/login'>{register ? "Inicia Sesion" : "Registrate"}</a>
		         </div>
		    </div>


		);
}

export default CreatePage;