import React from 'react'

function EmployeeDetailsModal() {
  const EmployeeDetailsModal = () => {
    const modal = document.getElementById("EmpDetailId");
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      <>
        <button className="btn btn-primary" onClick={EmployeeDetailsModal}>
          Learn More!
        </button>
        <dialog id="EmpDetailId" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Employee Details Management</h3>
            <p className="py-4">
              <ul>
                <li>I have developed this project using the MERN stack, which includes React, JavaScript, MongoDB for the database, and Express.js along with Node.js.</li>
                <li>In this application, you can add user information, update existing records, and delete entries as needed.</li>
              </ul>
            </p>

            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn mr-2"
                  onClick={() => {
                    window.open(
                      "https://employee-details-management.onrender.com/",
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
                    const modal = document.getElementById("EmpDetailId");
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
    </div>
  )
}

export default EmployeeDetailsModal
