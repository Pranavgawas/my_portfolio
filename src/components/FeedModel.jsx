import React from "react";

function FeedModel() {
  const FeedModel = () => {
    const modal = document.getElementById("feed");
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <>
      <button className="btn btn-primary" onClick={FeedModel}>
        Learn More!
      </button>
      <dialog id="feed" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Feed App</h3>
          <p className="py-4">
            <ul>
              <li>
                Developed a personal project, a feed application, that is
                database-driven.
              </li>
              <li>
                Implemented user authentication, requiring users to sign up and
                log in.
              </li>
              <li>
                Users can create text posts, update their posts, and delete
                their posts.
              </li>
              <li>
                When a user adds a post, it goes into a pending state for
                approval by the admin.
              </li>
              <li>
                Users can view all posts they have made, as well as other posts
                approved by the admin.
              </li>
              <li>
                Designed an admin login functionality, accessible only to the
                admin, who can approve or delete posts made by other users.
              </li>
            </ul>
          </p>

          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn mr-2"
                onClick={() => {
                  window.open(
                    "https://github.com/Pranavgawas/Feed_Application",
                    "_blank"
                  );
                }}
              >
                View java Code
              </button>
              <button
                className="btn mr-2"
                onClick={() => {
                  window.open(
                    "https://github.com/Pranavgawas/feeds",
                    "_blank"
                  );
                }}
              >
                View React Code
              </button>
              <button
                className="btn btn-primary mr-2"
                onClick={(e) => {
                  e.preventDefault();
                  const modal = document.getElementById("feed");
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
  );
}

export default FeedModel;
