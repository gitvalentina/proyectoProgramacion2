const data = require ('../db/data');


const indexController = {
    showLogin: function(req, res) {
         return res.render('login', { 
           user: data.user,
        
          });
      },
    search: function(req, res, next) {
        res.render('search-results', { title: 'Express' });
      },
}

module.exports=indexController;


/*  

index: function(req, res, next) {
  res.render('index', { products: data.products });
},



*/