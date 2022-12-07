import React, { useRef, useEffect, useState } from 'react';
import WebViewer from '@pdftron/pdfjs-express-viewer';
import './App.css';

const App = () => {
  const viewer = useRef(null);
  
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '',
        licenseKey: "7Yrd99cCi21Cu68XVLND"
      },
      viewer.current,
    ).then((instance) => {
        document.getElementById('localFilepicker').onchange = (e) => {
          const file = e.target.files[0];
          if (file) {
            console.log(file)
            instance.UI.loadDocument(file);
          }
        };
        document.getElementById('inputPDFLink').onchange = (e) => {
          e.preventDefault();
            console.log(e)
            instance.UI.loadDocument(document.getElementById('inputPDFLink').value);
        };
      });
  }, []);



  
  return (
    <div className="App">
      <div className="header">PDF Viewer</div>
      <div className='pdfviewer-container'>
        <div className="filepicker-panel">
          <div className='file-from-link'>
            <label htmlFor='inputPDFLink'>Choose a file to view</label>
            <input type="text" id='inputPDFLink' placeholder='Enter your PDF Link' />
          </div>
          <div className='file-from-local'>
            <label htmlFor='localFilepicker'>Or choose your own</label>
            <input className='custom-file-input' type="file" id='localFilepicker' accept="application/pdf" />
          </div>
        </div>
        <div className="webviewer" ref={viewer}></div>
      </div>
    </div>
  );
};

export default App;
