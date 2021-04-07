import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Input, Image, Sticky } from 'semantic-ui-react';
import logo from '../../images/sampleLogo.png';

export class Nav extends Component {
	contextRef = createRef()

	render() {
		return (
			<div ref={this.contextRef}>
				<Sticky context={this.contextRef}>
						<Menu secondary>
							<Link to="/"> 
								<Image 
									src={logo} 
									width={50} /> 
							</Link>
							<Menu.Item 
								name="Main"
								to="/"> 
								<Link to="/"> 
									The Hang
								</Link>
							</Menu.Item>
							
							<Menu.Item 
								position="right"
								name="About"
								to="/"> 
								<Link to="/about">
									About
								</Link>
							</Menu.Item>
							
							<Menu.Item 
								name="Musicians"
								to="/"> 
								<Link to="/musicians">
									Musicians
								</Link>
							</Menu.Item>
					<Menu.Item position='right'>
					<Input
						transparent
						icon={{ name: 'search', link: true }}
						placeholder='Search users...'
						/>
					</Menu.Item>

						</Menu>
						{/* <Link to="/"> Main</Link>
						<Link to="about"> About</Link>
					<Link to="musicians"> Musicians</Link> */}
				</Sticky>
			</div>
		)
	}
}

export default Nav
