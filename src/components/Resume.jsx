import React from 'react';

function Resume() {
  return (
    <div className="flex justify-center">
      <button
        className="btn btn-primary mr-2"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/136jZTm-Lmt8Y-HGIwTCGK40gUHHeRpKG/view?usp=sharing",
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
