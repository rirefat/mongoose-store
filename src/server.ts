import mongoose from 'mongoose';
import config from "./app/config";
import app from './app';

async function main() {
    try {
        if (!config.db_url) {
            throw new Error("Database URL not defined in configuration");
        }
        await mongoose.connect(config.db_url as string);

        app.listen(config.port, () => {
            console.log(`app listening on port ${config.port}`);
        });
    } catch (err) {
        console.error(err);
    }
}

main();
