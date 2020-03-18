// import React, { Component } from 'react';
import React from 'react';

class TextEdit extends Component {
  render() {
    return(
      <div>

        <h3>
          Here's the TextEdit component
        </h3>

        <textarea
          rows="10" cols="50"
          placeholder="Write something ..."
        >
        </textarea>

      </div>
    );
  }
}

export default TextEdit;
