const bad_request_handler = (error, req, res, next) => {
  if (error.status === 400) {
    return res.status(400).json({
      success: false,
      message: `La petición no corresponde al modelo manejado en la base de datos: ${error.message}`,
    });
  }

  next(error);
};

export default bad_request_handler;
