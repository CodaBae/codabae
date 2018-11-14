import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './App.css';

class MainApp extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <img src={require('./Img/Background.JPG')} alt="logo" className="BgImg" />
        </div>
        <h1 className="BgImgText" >Hi I'M Shalom Mathew... FullStack Developer</h1>
        <div className="AboutDiv">
          <p className="AboutText">jsdnjnjdisdjsjdbcjhjjxajscjcjbajsd
          jchcjkzauhcujdchuhdncjxjascnsduencuishcnuhdsch
          sjsdvdcidsisdcucdhvisdivhidvndicid
          cisdciddvhhsdnkjdkjkdjjsdkdinxkjkdjksd
          dsddidosdkjsijdmmdijmskdkjdk
          ivdhsuhifhfusiofhisdiofdfhofvoe
          svuivijergvjosrvhjfbihokdjijwdecihcehcfciefhcuhiefufcfe
        </p>

          <p className="AboutText">jsdnjnjdisdjsjdbcjhjjxajscjcjbajsd
            jchcjkzauhcujdchuhdncjxjascnsduencuishcnuhdsch
            sjsdvdcidsisdcucdhvisdivhidvndicid
            cisdciddvhhsdnkjdkjkdjjsdkdinxkjkdjksd
            dsddidosdkjsijdmmdijmskdkjdk
            ivdhsuhifhfusiofhisdiofdfhofvoe
            svuivijergvjosrvhjfbihokdjijwdecihcehcfciefhcuhiefufcfe
        </p>





          <div className="AboutSpan"> </div>
        </div>

        <div className="TraitMainDiv">

          <div className="professionalHeaderDiv">
            <h1 className="professionalHeader">Traits & Interest</h1>
          </div>
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
          <p className="professionalP">I am inlove with innovation</p>

        </div>

        <div className="ExperiencesDiv">
          <h1 className="ExperiencesHeader">Experiences</h1>
          <div className="Mcard">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img src={require('./Img/Background.JPG')} alt="logo" className="CardImg" />

                </div>
                <div className="back">
                  Bacasjnjasuhuahsjhjsushuhsuugggghhjjhu
                  juisuasysygugsysyasuygdsuajsuguydddjdbk!
    </div>
              </div>


            </div>
            <div className="card">
              <div className="content">
                <div className="front">
                  <img src={require('./Img/Background.JPG')} alt="logo" className="CardImg" />

                </div>
                <div className="back">
                  Bacasjnjasuhuahsjhjsushuhsuugggghhjjhu
                  juisuasysygugsysyasuygdsuajsuguydddjdbk!
    </div>

              </div>


            </div>
          </div>

          <div className="card1">
            <div className="content1">
              <div className="front1">
                <img src={require('./Img/Background.JPG')} alt="logo" className="CardImg" />

              </div>
              <div className="back1">
                Bacasjnjasuhuahsjhjsushuhsuugggghhjjhu
                juisuasysygugsysyasuygdsuajsuguydddjdbk!
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


        <div>
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
