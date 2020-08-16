const axios = require('axios');

class SpacexService {
    constructor(config) {
        if (!config || !config.baseUrl) {
            throw new Error('SpacexService Error init: expected 1 param in constructor: Config:{baseUrl}');
        }
        this.config = config;
    }

    /**
     * @function getLaunches get successful spaceX launches
     */
    async getLaunches(filter = {}) {
        let response;
        let url = this.config.baseUrl;
        try {

            response = await axios.get(url, {
                params: filter,
            });
            return response.data;
        } catch (error) {
            throw new Error(`SpacexService: getSuccessfulLaunches failed to get data, error: ${error}`);
        }
    }
};

module.exports = SpacexService;
