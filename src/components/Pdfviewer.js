import React from 'react';
import resumePdf from '../Assets/pre.svg';

const Pdfviewer = () => {
  return (
    <div className="">
      <a href={resumePdf} target="_blank" rel="noopener noreferrer">Open Resume</a>
    </div>
  );
}

export default Pdfviewer;