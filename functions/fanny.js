const link = "https://fanny-hbb.herokuapp.com";

exports.fannyRedirect = (request, response) => {
  console.log(request.path, link);

  response.redirect(302, link);
};
