const PROXY_CONFIG = [
    {
        context:[
            "/api/**",
            "!/api/except"
        ],
        target: "http://localhost:3000",
        secure: false
    },
    {
        context:[
              "/api/except"
        ],
        target: "http://localhost:3001",
        secure: false
    }
]

module.exports = PROXY_CONFIG;