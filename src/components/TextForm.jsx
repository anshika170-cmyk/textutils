
import React, { useState } from 'react';

const TextForm = (props) => {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase', 'success');
  };

  const handleUpClick2 = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      props.showAlert('Text copied successfully', 'success');
    } catch (error) {
      props.showAlert('Unable to copy text', 'danger');
    }
  };

  const [text, setText] = useState('');

  const handleExtraSpaces = () => {
    let newText = text.trim().split(/\s+/).filter(Boolean);
    setText(newText.join(' '));
  };

  const wordCount = text.trim() === ''
    ? 0
    : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          {props.heading}
        </h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary me-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary me-3" onClick={handleUpClick2}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary me-3" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container me-3"
        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
      >
        <h1>Your text Summary</h1>

        <p>{wordCount} words and {text.length} characters</p>

        <p>{wordCount * 0.008} Minutes read</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
