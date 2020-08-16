const SpacexService = require('./spacex/spacex-service');

const spacexService = new SpacexService({
    baseUrl: 'https://api.spaceXdata.com/v3/launches',
});

module.exports = {
    spacexService,
}
