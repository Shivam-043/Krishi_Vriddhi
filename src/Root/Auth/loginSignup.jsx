import React from 'react'
import './auth.css'
import './temp.css'

export const LoginSignup = () => {
  return (
    <div>
        
{/* <!-- 	<a href="https://front.codes/" className="logo" target="_blank">
		<img src="https://assets.codepen.io/1462889/fcy.png" alt="">
	</a> --> */}

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"/>

{/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/> */}

	<div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap ">
										<div className="section text-center ">
											<h4 className="mb-4 pb-3">Log In</h4>
                      
{/* <!-- 											<div className="form-group">
												<input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autocomplete="off">
												<i className="input-icon uil uil-user"></i>
											</div>	 --> */}
                      
											<div className="form-group  loginFormUp">
												<input type="email" name="logemail" className="form-style" placeholder="Your Mobile Number" id="logemail" autocomplete="off"/>
{/* <!-- 												<i className="input-icon uil uil-at"></i> --> */}
											</div>	
											<div className="form-group loginFormDown ">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
											</div>
                      
											<a href="#" className="btn mt-4">submit</a>
{/* <!--                             				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p> --> */}
				      					</div>
			      					</div>
			      				</div>
								<div className="card-back">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Sign Up</h4>
                      <div className="form-group">
												<input type="text" name="logemail" className="form-style" placeholder="Your Full Name" id="name" autocomplete="off"/>
{/* <!-- 												<i className="input-icon uil uil-at"></i> --> */}
											</div>	
											<div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Your Mobile Number" id="mobile" autocomplete="off"/>
{/* <!-- 												<i className="input-icon uil uil-lock-alt"></i> --> */}
											</div>
                      
                      <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Your Address" id="address" autocomplete="off"/>
{/* <!-- 												<i className="input-icon uil uil-lock-alt"></i> --> */}
											</div>
                      
                      <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Your Village Name" id="village" autocomplete="off"/>
{/* <!-- 												<i className="input-icon uil uil-lock-alt"></i> --> */}
											</div>
                      
                      <div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
{/* <!-- 												<i className="input-icon uil uil-lock-alt"></i> --> */}
											</div>
                      
                      
											
{/* <!-- 												<i className="input-icon uil uil-lock-alt"></i> --> */}
											</div>
											<a href="#" className="btn mt-4">submit</a>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
    
  )
}
