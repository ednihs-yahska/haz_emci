

module.exports = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || "development",
    GCM_SENDER_ID: process.env.GCM_SENDER_ID,
    FIREBASE_SERVER_KEY: process.env.FIREBASE_SERVER_KEY,
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN
}

module.exports.product_config = {
    client_title: "HazAdapt",
}