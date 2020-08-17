const withSass = require('@zeit/next-sass');
const withPwa = require('next-pwa');

module.exports = withPwa(withSass({
    pwa: {
        dest: "public"
    }
}));
