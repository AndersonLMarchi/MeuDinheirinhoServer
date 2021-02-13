const express = require('express');

module.exports = function(server) {
    const router = express.Router();
    server.use('/api', router);

    const paymentCycle = require('../api/paymentcycleservice');
    paymentCycle.register(router, '/payment-cycle');

    const paymentCycleSumary = require('../api/paymentcyclesumary');
    router.route('/payment-sumary').get(paymentCycleSumary.getSumary);

};