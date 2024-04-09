import React from 'react'

function CertifyMeModal() {
    const CertifyMe = () => {
        const modal = document.getElementById("CertifyMe");
        if (modal) {
            modal.showModal();
        }
    };
    return (
        <>
            <button className="btn btn-primary" onClick={CertifyMe}>
                Learn More!
            </button>
            <dialog id="CertifyMe" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">CertifyMe</h3>
                    <p className="py-4">
                        <ul>
                            <li>I have created a website using React and JavaScript that generates certificates, which you can download as image files.</li>
                            <li>To get started, you need to enter your name and the event name. Once the image is generated, please allow a few minutes before downloading the PDF.</li>
                        </ul>
                    </p>

                    <div className="modal-action">
                        <form method="dialog">
                            <button
                                className="btn mr-2"
                                onClick={() => {
                                    window.open(
                                        "https://certify-me-liart.vercel.app/",
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
                                    const modal = document.getElementById("CertifyMe");
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

export default CertifyMeModal