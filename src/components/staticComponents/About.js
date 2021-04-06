import React, { Component } from 'react'
import QRCode from '../../images/paypalQRCode.png';

export class About extends Component {
	render() {
		return (
			<div className="about">
				<h2> This is about the About Page. </h2>
				<div className="description" align='center'>
					<p>This will be the description of the site. A collection of musicians throughout the world. The ultimate rollidex!</p>
				</div>
				<br/>
				<div className="donations" align='center'>
					Please consider donating to help offset our costs.
					<form action="https://www.paypal.com/donate" method="post" target="_top">
					<br/>
						<input type="hidden" name="hosted_button_id" value="ZMFAUDELBR7P6" />
						<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
						<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
						<br/>
						<br/>
						<img src={QRCode} alt="paypal donation" />
					</form>


				</div>

			</div>
		)
	}
}

export default About
