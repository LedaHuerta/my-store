const boom = require('@hapi/boom');
// Middleware dinámico usando closures:
const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
};

module.exports = validatorHandler;
