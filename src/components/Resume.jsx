import React from 'react';

function Resume() {
  return (
    <div className="flex justify-center">
      <button
        className="btn btn-primary mr-2"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1JaLrd995W4eKhudC_pJvZaLMj8kJAMpg/view",
            "_blank"
          );
        }}
      >
        View My Resume
      </button>
    </div>
  );
}

export default Resume;