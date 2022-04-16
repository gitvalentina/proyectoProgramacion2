const data = require ('../db/data');


<<<<<<< HEAD
const controlador= {
    index: function(req, res, next) {
          res.render('index', {  title: 'Express' });
=======
const controlador = {
    index: function(req, res, next) {
        res.render('index', { title: 'Express' });
>>>>>>> parent of ea75869 (OrdenPaki)
      },
    search: function(req, res, next) {
        res.render('search-results', { title: 'Express' });
      }
}

module.exports=controlador;


/*  

index: function(req, res, next) {
  res.render('index', { products: data.products });
},



*/