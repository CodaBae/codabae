import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './App.css';

class Gallerys extends Component {
	render() {
		return (
			<div >
				<div className="galleryDiv">

					<div className="gallery">

						<div className="gallery-item">
							<img src={require('./Img/Background.JPG')} alt="logo" className="gallery-image" />
						</div>

						<div className="gallery-item">
							<img src={require('./Img/Background.JPG')} alt="logo" className="gallery-image" />
						</div>

						<div className="gallery-item">
							<img src={require('./Img/Background.JPG')} alt="logo" className="gallery-image" />
						</div>

						<div class="gallery-item">
							<img src={require('./Img/Background.JPG')} alt="logo" className="gallery-image" />
						</div>

						<div className="gallery-item">
							<img src={require('./Img/Background.JPG')} alt="logo" className="gallery-image" />
						</div>

						<div className="gallery-item">
							<img src={require('./Img/Background.JPG')} alt="logo" className="gallery-image" />
						</div>

						<div className="gallery-item">
							<img src={require('./Img/Background.JPG')} alt="logo" className="gallery-image" />
						</div>

						<div className="gallery-item">
							<img src={require('./Img/Background.JPG')} alt="logo" className="gallery-image" />
						</div>

						<div className="gallery-item">
							<img src={require('./Img/Background.JPG')} alt="logo" className="gallery-image" />
						</div>

					</div>
				</div>

				<div className='footerDiv'>
					<div className="IconsDiv">
						<img src={require('./Img/icons/facebook.png')} alt="logo" className="IconsImg" />
						<img src={require('./Img/icons/twitter.png')} alt="logo" className="IconsImg" />
						<img src={require('./Img/icons/linkedin.png')} alt="logo" className="IconsImg" />
													<img src={require('./Img/icons/google-plus.png')} alt="logo" className="IconsImgG" />

						<img src={require('./Img/icons/skype.png')} alt="logo" className="IconsImg" />
						<img src={require('./Img/icons/instagram.png')} alt="logo" className="IconsImg" />
						<img src={require('./Img/icons/youtube.png')} alt="logo" className="IconsImg" />
						<img src={require('./Img/icons/github.png')} alt="logo" className="IconsImg" />


					</div>
					<p className='footerText'>codabae</p>

				</div>

			</div>
		);
	}
}

export default Gallerys;