let config = {};

config = {
    SHOULD_PRINT_DEBUG_LOGS: (process.env.NODE_ENV !== "production"),
    REDUX_DEBUGGER_OPTIONS: {
        REDUX_LOGGER: "REDUX_LOGGER",
        REDUX_REMOTE_DEVTOOLS: "REDUX_REMOTE_DEVTOOLS"
    },
    WHICH_REDUX_DEBUGGER_TO_USE: "REDUX_REMOTE_DEVTOOLS",
    SHOULD_REDUX_REMOTE_DEVTOOLS_USE_LOCALHOST: true,
    LOCALHOST_REMOTE_REDUX_DEVTOOLS_PORT: 9001,
    ENDPOINTS: {
    },
};

module.exports = config;