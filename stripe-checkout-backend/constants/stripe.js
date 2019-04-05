const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_WxAM1qwUpABQMCVEpaMMvMw500zjN0BbfG'
    : 'sk_test_WxAM1qwUpABQMCVEpaMMvMw500zjN0BbfG';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;