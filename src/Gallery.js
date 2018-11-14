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
				
 <a href="https://web.facebook.com/Shalom.Mathew40" class="Link">

            <img src={require('./Img/icons/facebook.png')} alt="logo" className="IconsImg" />
            </a>                       
             <a href="https://twitter.com/ijeoma_s_mathew" class="Link">
                                                                                                                                                                   
            <img src={require('./Img/icons/twitter.png')} alt="logo" className="IconsImg" />
                        </a>                       

             <a href="https://www.linkedin.com/in/shalom-ijeoma-mathew-82124b16b/
" class="Link">
            <img src={require('./Img/icons/linkedin.png')} alt="logo" className="IconsImg" />
                        </a>                       

             <a href="https://plus.google.com/u/0/108117543672886147456" class="Link">

            <img src={require('./Img/icons/google-plus.png')} alt="logo" className="IconsImgG" />
                        </a>                       

             <a href="https://plus.google.com/u/0/108117543672886147456" class="Link">


            <img src={require('./Img/icons/skype.png')} alt="logo" className="IconsImg" />
                                    </a>                       

             <a href="https://www.instagram.com/shalli.mat/" class="Link">

            <img src={require('./Img/icons/instagram.png')} alt="logo" className="IconsImg" />
                                    </a>                       

             <a href="https://www.youtube.com/channel/UC7zntyTNDRf2HMinWgjJSog" class="Link">

						<img src={require('./Img/icons/youtube.png')} alt="logo" className="IconsImg" />
                                    </a>                       

             <a href="https://github.com/CodaBae" class="Link">

            <img src={require('./Img/icons/github.png')} alt="logo" className="IconsImg" />
            </a>                                                                                                                                                                                          

					</div>
					<p className='footerText'>codabae</p>

				</div>

			</div>
		);
	}
}

export default Gallerys;