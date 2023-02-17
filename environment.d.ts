declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: int;
            EVT_FEED_INTERVAL: int;
        }
    }
}

export {};
