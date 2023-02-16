declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: int;
        }
    }
}

export {};
