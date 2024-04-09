import React from 'react'

function CadScriptModal() {
    const CadScript = () => {
        const modal = document.getElementById("CadScriptId");
        if (modal) {
            modal.showModal();
        }
    };

  return (
        <>
            <button className="btn btn-primary" onClick={CadScript}>
                Learn More!
            </button>
            <dialog id="CadScriptId" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">CadScript</h3>
                    <p className="py-4">
                        <ul>
                        <li>I have created a project that can be utilized in software like SolidWorks and CATIA to automate CAD design processes using VBA (Visual Basic for Applications) macro code.</li> 
                        <li>Users can follow the provided steps, open the macro code, and paste the code to initiate the design of parts using the VBA macro code.</li>
                        </ul>
                    </p>

                    <div className="modal-action">
                        <form method="dialog">
                            <button
                                className="btn mr-2"
                                onClick={() => {
                                    window.open(
                                        "https://cad-script.vercel.app/",
                                        "_blank"
                                    );
                                }}
                            >
                                View Website
                            </button>
                            <button
                                className="btn btn-primary mr-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const modal = document.getElementById("CadScriptId");
                                    if (modal) {
                                        modal.close();
                                    }
                                }}
                            >
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
  )
}

export default CadScriptModal