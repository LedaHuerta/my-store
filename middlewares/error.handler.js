// Middleware de error para loguear errores
const logErrors = (err, req, res, next) => {
  console.log('logErrors'); //saber orden de ejecución
  console.error(err);
  next(err);
};

// Middleware de error para crear estándar de formato par errores
// Aunque no se use next, se debe agregar para que detecte que es de tipo error
const errorHandler = (err, req, res, next) => {
  console.log('errorHandler'); //saber orden de ejecución
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = { logErrors, errorHandler };
