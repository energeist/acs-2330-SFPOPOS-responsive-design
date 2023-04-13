import React from 'react';

function NewsLetter() {
  return (
	<form action="" method="get" className="form-example">
		<div className="form-example">
			<label for="name">Enter your name: </label>
			<input type="text" name="name" id="name" required/>
		</div>
		<div className="form-example">
			<label for="email">Enter your email: </label>
			<input type="email" name="email" id="email" required/>
		</div>
			<div className="form-example">
			<input type="submit" value="Subscribe!"/>
		</div>
	</form>
  )
}

export default NewsLetter;

