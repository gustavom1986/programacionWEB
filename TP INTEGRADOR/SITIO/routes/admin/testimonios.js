var express = require('express');
var router = express.Router();
var testimoniosModel = require('../../models/testimoniosModel');


router.get('/', async function (req, res, next) {
  var testimonios = await testimoniosModel.getTestimonios();
  res.render('admin/testimonios', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    testimonios
  });
});

// para eliminar testimonio
router.get('/eliminar/:id', async (req, res, next) => {
  const id = req.params.id;
  await testimoniosModel.deleteTestimoniosById(id);
  res.redirect('/admin/testimonios')
});

// para agregar testimonio
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  }) //ciera render
});

//para agregar testimonio
router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.id != "" && req.body.nombre != "" && req.body.ciudad != "" && req.body.cuerpo != "") {
      await testimoniosModel.insertTestimonio(req.body);
      res.redirect('/admin/testimonios')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'El testimonio no fue guardado'
    })
  }
})

// traer diseño y datos cargados
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var testimonio = await testimoniosModel.getTestimoniosById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    testimonio
  });
});


//para modificar testimonio
router.post('/modificar', async (req, res, next) => {
  try {
    var obj = {
      nombre: req.body.nombre,
      ciudad: req.body.ciudad,
      cuerpo: req.body.cuerpo
    }
await testimoniosModel.modificarTestimonioById(obj, req.body.id);
res.redirect('/admin/testimonios');
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'El testimonio no se modificó'
    })
  }
});


module.exports = router;
