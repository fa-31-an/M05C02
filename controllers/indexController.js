module.exports = {
    index: function (req, res, next) {
        res.render('index',
            {
                title: 'Sal&Pimienta'
            });
    },
    detail: function (req, res) {
        req.params.id == 1 ? res.render('detalleMenu') : res.send('Plato típico') ;
        /* let id = +req.params.id;
        if (id == 1) {
            res.render('detalleMenu');
        } else {
            res.send('Plato típico');
        }; */
    },
}