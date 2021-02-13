const paymentCycle = require('./paymentcycle');
const _ = require('lodash');

paymentCycle.methods(['get', 'post', 'put', 'delete']);
paymentCycle.updateOptions({new: true, runValidators: true });

paymentCycle.after('post', validateApiErrors).after('put', validateApiErrors);

function validateApiErrors(req, res, next) {
    const bundle = res.locals.bundle;

    if (bundle.errors) {
        var errors = parseErrors(bundle.errors);

        res.status(500).json({errors});
    } else {
        next();
    }
}

function parseErrors(nodeErrors) {
    const errors = [];

    _.forIn(nodeErrors, error => errors.push(error.message));

    return errors;
}

paymentCycle.route('count', function(req, res, next) {
    paymentCycle.count(function(error, value) {
        if (error) {
            res.status(500).json({errors: [error]});
        } else {
            res.json({value});
        }
    });
});

module.exports = paymentCycle;