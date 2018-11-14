import React, { Component } from 'react';

import './App.css';

class Connect extends Component {
  render() {
    return (
<div>
<form>
    <div class="form-group">
      <input type="text" required="required"/>
      <label for="input" class="control-label">Textfield</label><i class="bar"></i>
    </div>
    <div class="form-group">
      <textarea required="required"></textarea>
      <label for="textarea" class="control-label">Textarea</label><i class="bar"></i>
    </div>
 
 
   
   
  </form>

</div>
      );
    }
  }
  
  export default Connect;