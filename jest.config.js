const path = require('path');

module.exports = {
    "verbose": true,
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
    },
    setupFilesAfterEnv: [`${path.resolve(__dirname)}/jest.setup.js`],
};
