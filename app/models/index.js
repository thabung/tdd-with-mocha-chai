let models = function(modelName,mongooseInstance) {
    let model = require(modelName,mongooseInstance);
    return model;
};

module.exports = models;


