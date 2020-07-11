const functions = require("firebase-functions");
const { fannyRedirect } = require("./fanny");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const providers = {
  facebook: "https://www.facebook.com/abd.orabi/",
  instagram: "https://www.instagram.com/abd_aarabi/",
  linkedin: "https://www.linkedin.com/in/abdulrahman-aarabi-abed-543422140/",
};

exports.redirect = functions.https.onRequest((request, response) => {
  const link = request.path.split("/").pop();
  redirectLink = providers[link];

  if (redirectLink) {
    response.redirect(302, redirectLink);
  } else {
    response.send(
      " <h1> please use one of the following social plateforms <h1>" +
        Object.keys(providers).join(", ")
    );
  }
});

exports.fannyRedirect = functions.https.onRequest(fannyRedirect);
