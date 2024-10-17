const not_found_handler = (req, res, next) => {
  return res.status(404).json({
    success: false,
    message: `La peticion  con el metodo ${req.method} con la ruta ${req.url} -  ruta no encontrada - Not Found `,
  });
};

export default not_found_handler;

//middleware para controlar errores generales de no encontrado (404)
