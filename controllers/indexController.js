const controlador={
    index: function(req, res, next) {
        res.render('index', { title: 'Francisca' });
      },
    search: function(req, res, next) {
        res.render('search-results', { title: 'Express' });
      }
}

module.exports=controlador;
