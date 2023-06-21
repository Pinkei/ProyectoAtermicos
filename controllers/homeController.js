exports.index = function(req, res) {
    res.render('home', {title: 'Placas atermicas', body: 'Contenido de mi página'});
  };