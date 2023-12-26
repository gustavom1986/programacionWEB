var pool = require('./bd');
/* sirve para listar testimonios */
async function getTestimonios() {
   var query = "select * from testimonios";
   var rows = await pool.query(query);
   return rows;
}

/* sirve para borrar testimonio*/
async function deleteTestimoniosById(id) {
   var query = "delete from testimonios where id= ?";
   var rows = await pool.query(query, [id]);
   return rows;
}

//para agregar testimonio
async function insertTestimonio(obj) {
   try {
      var query = "insert into testimonios set ?";
      var rows = await pool.query(query, [obj]);
      return rows;
   }
   catch (error) {
      console.log(error);
      throw error;
   }
}

// traigo el testimonio que quiero modificar
async function getTestimoniosById(id) {
   var query = "select * from testimonios where id=?";
   var rows = await pool.query(query, [id]);
   return rows[0];
}

// modifica el testimonio
//para agregar testimonio
async function modificarTestimonioById(obj, id) {
   try {
      var query = "update testimonios set ? where id=? ";
      var rows = await pool.query(query, [obj, id]);
      return rows;
   }
   catch (error) {
      console.log(error);
      throw error;
   }
}


module.exports = { getTestimonios, deleteTestimoniosById, insertTestimonio, getTestimoniosById, modificarTestimonioById }
