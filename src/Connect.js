import React, { Component } from 'react';

import './App.css';

class Connect extends Component {
  render() {
    return (
<div className="formDiv">
<h3 className='formHeader'>Send me a message</h3>
<form>
    <div className="form-group">
      <input type="text" required="required"/>
      <label for="input" class="control-label">Full Name</label><i className="bar"></i>
    </div>
    <div className="form-group">
      <textarea required="required"></textarea>
      <label for="textarea" className="control-label">Message</label><i className="bar"></i>
    </div>

  <button className="button">
  Connect
  </button>
    </form>

 <div className="formIconDiv">
 			
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
           
             <a href="https://www.youtube.com/channel/UC7zntyTNDRf2HMinWgjJSog" class="Link">

						<img src={require('./Img/icons/youtube.png')} alt="logo" className="IconsImg" />
                                    </a>                       

             <a href="https://github.com/CodaBae" class="Link">

            <img src={require('./Img/icons/github.png')} alt="logo" className="IconsImg" />
            </a>          
 
 </div>

 
 
   
     <span className="formSpanF">Call Me</span>

  <span className="formSpanB">+2348093546694</span>


</div>
      );
    }
  }
  
  export default Connect;