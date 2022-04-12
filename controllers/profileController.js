const data = require('../db/data');

const profileController = {
    showProfile: function (req, res) {
        return res.render('profile', {
            user: data.user,
            
        })
    }
}