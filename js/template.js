/*
	Author: Adwin Ong Kok Quan (DIA3)
*/

window.onload = function() {
	start();
}

function start() {
	renderNavigation();
	renderFooter();	
	changeAccIcon();
}

function renderNavigation() {
	const navigationDOM = document.getElementById("navigation");
	const navigationTemplate = `
	<ul class="menu-list">
		<li>
			<a href="index.html"><img class="logo" src="img/logo4.png" alt="OnString Talent Home" title="OnString Talent Home"></a>
		</li>
		<li>
		<div class="dropdown">
		 <button class="dropbtn"><a href="product.html">Instrument</a></button>
			<div class="dropdown-content">
			 <a href="percussion.html">Percussion</a>
			 <a href="string.html">String</a>
			 <a href="brass.html">Brass</a>
			</div>
		</div>
		</li>
		<li>
		<div class="dropdown">
		 <button class="dropbtn"><a href="software.html">Software</a></button>
			<div class="dropdown-content">
			 <a href="fl.html">FL Studio</a>
			 <a href="premiere.html">Premiere Pro</a>
			</div>
		</div>
		</li>
		<li>
			<div class="dropdown">
			  <button class="dropbtn"><a href="about.html">About Us</a></button>
			   <div class="dropdown-content">
				<a href="location.html">Our Shop</a>
				<a href="history.html">Our History</a>
			   </div>
			</div>
		</li>
		<li>
			<a href="cart.html"><img style="height: 25px; border-radius: 20px;" src="img/addtocart.png" title="View Cart" alt="View Cart">  View Cart</a>
		</li>
		<li id="acc-icon">
			<a href="login.html"><img style="height: 25px; border-radius: 20px;" src="img/guest-icon.jpg" title="Login" alt="Login">  Join now!</a>
		</li>
	</ul>
	`;
	navigationDOM.innerHTML = navigationTemplate;

}

function renderFooter() {
	const footerDOM = document.getElementById("footer");
	const navigationTemplate = `
	<div class="big-container">
		<div class="container">
			<h4>About Us</h4>
			<div class="hotlink">
				<h5>Our Address</h5>
				<p>5-18, Ivory Complex<br/>Jalan Cahaya<br/>11350 Pulau Pinang</p>
				<h5>Hiring</h5>
				<p><button class="placeholder" onclick="alertPlaceHolder()">We are looking for more staff!</button></p>
			</div>
		</div>
		<div class="container">
			<h4>Customer Service</h4>
			<div class="hotlink">
				<h5>Frequently Asked Question</h5>
				<p>
				<button class="placeholder" onclick="alertPlaceHolder()">Warranty</button>
				<br/>
				<button class="placeholder" onclick="alertPlaceHolder()">Delivery</button></p>
				<h5>Contact</h5>
				<p>Tel. No: 010-388 1386</p>
				<p>Fax. No: 0362017000@send.flexifax.com.my</p>
				<p><a href="mailto:onstringtalent@hotmail.com">Email: onstringtalent@hotmail.com</a></p>
			</div>
		</div>
		<div class="container">
			<h4>Terms and Conditions</h4>
			<div class="hotlink">
				<p>
				<button class="placeholder" onclick="alertPlaceHolder()">Terms of Use</button>
				<br />
				<button class="placeholder" onclick="alertPlaceHolder()">Privacy Statement</button>
				<br />
				<button class="placeholder" onclick="alertPlaceHolder()">Cookie Preferences</button>
				</p>
			</div>
		</div>
		<div class="container">
			<div class="hotlink">
			<a href="https://www.instagram.com/" target="_blank" rel="external"><img src="img/insta.png" title="Follow us on Instagram" alt="Follow us on Instagram"></a>
			<a href="https://twitter.com/l" target="_blank" rel="external"><img src="img/twitter.png" title="Follow us on Twitter" alt="Follow us on Twitter"></a>
			<a href="https://www.facebook.com/" target="_blank" rel="external"><img src="img/fb.png" title="Follow us on Facebook Page" alt="Follow us on Facebook Page"></a>
			</div>
		</div>
	</div>
	`;
	footerDOM.innerHTML = navigationTemplate;
}

function changeAccIcon(){
	if(localStorage.getItem('user') > 0 && localStorage.getItem('user') < 6)
	document.getElementById("acc-icon").innerHTML = "<a href='acc.html'><img style='height: 25px; border-radius: 20px;' src='img/guest-icon.jpg' title='Login' alt='Login'> View Profile</a>";
}

function alertPlaceHolder(){
	alert("This link serves as a placeholder.");
	return false;
}