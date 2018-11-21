import React, { Component } from 'react';

import './App.css';

class MainApp extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <img src={require('./Img/Laptop.jpg')} alt="logo" className="BgImg" />

        </div>

        <div className='BgTextDiv'>
          <span className="BgImgS1" >CO</span>
          <span className="BgImgS2" >DA</span>
          <span className="BgImgS3" >BA</span>
          <span className="BgImgS4" >E.</span>

        </div>

        <h1 className="BgImgText" >Hi I'M Shalom Mathew or CodaBae... A JavaScript Developer</h1>
        <div className="AboutDiv">
          <p className="AboutText">
          I Believe That There is more to Life than anyone can ever TELL....
Nobody has gone through the Experience iv gone through... Experience's either Build you or Break you....  Its what made me Who I Am "ME"!.
<p>I grew up in a JavaScript family and iv been living there since the past 6 months, I do Web, Mobile & Desktops development.</p>



<p className="AboutText">Background Bio</p>


Am Shalom Mathew, A 20 years old beautiful girl Am From Abia State,  Bende Local Government Area,
I have two elder brothers and A kid sister.


<p>Passion</p>
Am passionate about Solving Problems, Touching Lives,  Technology,  Innovations, Creativity,  Adventures And Social Entrepreneurship

<p>Me</p>
Christ Personified, Rep BLW, Leader, Traveler,  Friendly, Kind, TechShaper, loveable,  ALifeGiver, Cheerful, Founder of iRecycle. TripleC,

<p>Colors</p>
Favorite colors are.... Light yellow, lemon Green, White and  all shed of Ash to Black,

<p>Food</p>
Chicken.... Pastries... Ice-Cream.... Popcorn.... Indomie with suya....

<p>Dislikes</p> 
LIES... Its better u tell and let the roof fall... Than to lie to my face...
        </p>

       
          <div className="AboutSpan"> </div>
        </div>

        <div className="TraitMainDiv">

          <div className="professionalHeaderDiv">
            <h1 className="professionalHeader">Traits & Interest</h1>
          </div>

          <div className='TraitMainDIv'>


          <div className="Trait">

            <div className="TraitDiv" >
              <h3 className="TraitText">Excellence</h3>
            </div>

            <div className="TraitDiv" >
              <h3 className="TraitText">Friendly</h3>
            </div>

            <div className="TraitDiv" >
              <h3 className="TraitText">Intergrity</h3>
            </div>

            <div className="TraitDiv" >
              <h3 className="TraitText">Collaboration</h3>
            </div>

            <div className="TraitDiv" >
              <h3 className="TraitText">Patience</h3>
            </div>

            <div className="TraitDiv" >
              <h3 className="TraitText"> Honesty</h3>
            </div>

            <div className="TraitDiv" >
              <h3 className="TraitText">Passionate</h3>
            </div>
          </div>


          <div className="Trait1">

            <div className="TraitDiv" >
              <h3 className="TraitText">Innovation</h3>
            </div>

            <div className="TraitDiv" >
              <h3 className="TraitText">Creativity</h3>
            </div>

            <div className="TraitDiv" >
              <h3 className="TraitText">Humanity</h3>
            </div>

            <div className="TraitDiv" >
              <h3 className="TraitText">Technologies</h3>
            </div>

            <div className="TraitDiv" >
              <h3 className="TraitText">Startups</h3>
            </div>

            <div className="TraitDiv" >
              <h3 className="TraitText"> Recycling</h3>
            </div>

            <div className="TraitDiv" >
              <h3 className="TraitText">Adventure</h3>
            </div>
          </div>


          </div>


          <p className="professionalP">I am inlove with innovation</p>

        </div>

        <div className="ExperiencesDiv">
          <h1 className="ExperiencesHeader">Experiences</h1>
          <div className="Mcard">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img src={require('./Img/kir.png')} alt="logo" className="CardImg" />

                </div>
                <div className="back">
                <h2> At 2015 i had just finished secondary school, so i started
                   working for the first time at KIRF as an operation 
                  intern...that was were i did my first humanitairn service.
                KIR Foundation exists to transform the lives of 
                 vulnerable children, youth, persons with disabilities, prison inmates, women
                 and our local communities through Education, Advocacy, Capacity and Sustainable Development. 
                  </h2>
                <a href='www.kirfoundation.org'>Learn More</a>

    </div>
              </div>


            </div>
            <div className="card">
            <div className="content">
                <div className="front">
                  <img src={require('./Img/waste.jpeg')} alt="logo" className="CardImg" />

                </div>
                <div className="back">
                <h2>                LearnFactory Nigeria was created
                   with 2 main objectives: to Groom the 21st Century 
                   Software Engineer and to Provide a conducive environment for technology innovation, collaboration and growth of technical startups in Nigeria.
                </h2>


                  <a href='https://web.facebook.com/IRecycle-176511833074403/'>Learn More</a>
    </div>

              </div>


            </div>
          </div>

          <div className="card1">
            <div className="content1">
              <div className="front1">
              <img src={require('./Img/lf.png')} alt="logo" className="CardImg" />

              </div>
              <div className="back1">
              <h2>  
               You know that moment in your life were your just standing there and your thinking of what
               exactly to do with your life...well i was there and then  LearnFactory came... 
                At 2018 I started a 6 months intership in 
               LearnFactory Nigeria a
                   Software Engineering Company that Provide a
                    conducive environment for technology innovation, 
                   collaboration and growth of technical startups in Nigeria.
                </h2>


                  <a href='http://learnfactory.com.ng/'>Learn More</a>
    </div>

            </div>



          </div>


          <p className="ExperiencesP">experiences build you... they make you who you are!</p>

        </div>


        <div className="professionalMainDiv">

          <div className="professionalHeaderDiv">
            <h1 className="professionalHeader">Professional</h1>
          </div>
          <div className="professional">

            <div className="professionalDIv" >
              <h3 className="professionalText">Html & Css</h3>
              <div className="professionalLine"><div className="professionalSpan1"></div></div>
            </div>

            <div className="professionalDIv" >
              <h3 className="professionalText">JavaScript</h3>
              <div className="professionalLine"><div className="professionalSpan2"></div></div>
            </div>

            <div className="professionalDIv" >
              <h3 className="professionalText">React.Js</h3>
              <div className="professionalLine"><div className="professionalSpan3"></div></div>
            </div>

            <div className="professionalDIv" >
              <h3 className="professionalText">React Native App</h3>
              <div className="professionalLine"><div className="professionalSpan4"></div></div>
            </div>

            <div className="professionalDIv" >
              <h3 className="professionalText">Electrons.Js</h3>
              <div className="professionalLine"><div className="professionalSpan5"></div></div>
            </div>

            <div className="professionalDIv" >
              <h3 className="professionalText">Node.Js</h3>
              <div className="professionalLine"> <div className="professionalSpan6"></div></div>
            </div>
          </div>
          <p className="professionalP">My knowlege level in Software</p>

        </div>


        <div className='WorksMainDiv'>
          <h1 className='WorksHeader'>My Lastest Works</h1>
          <div className='Worksdiv'>
            <img src={require('./Img/Background.JPG')} alt="logo" className="CardImg" />
            <img src={require('./Img/Background.JPG')} alt="logo" className="CardImg" />
            <img src={require('./Img/Background.JPG')} alt="logo" className="CardImg" />


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

export default MainApp;
