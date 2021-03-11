const path = require('path')

require('dotenv').config()

module.exports = {
    env: {
        API_URL: process.env.API_URL
    },

    webpack: config => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')

        return config
    },

    // images: {
    //     deviceSizes: [320, 420, 768, 1024, 1200],
    //     domains: ["https://res.cloudinary.com/"],
    //     loader: 'cloudinary'  
    //   }
}