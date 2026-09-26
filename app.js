console.log("=== Application Startup ===");

const appName = process.env.APP_NAME;
const appEnv = process.env.APP_ENV;
const port = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL;

let errors = [];

if (!appName) {
    errors.push("APP_NAME is missing");
}

if (appEnv !== "production") {
    errors.push(
        `APP_ENV is '${appEnv}', but 'production' is required`
    );
}

if (!port || isNaN(port) || Number(port) < 1024 || Number(port) > 65535) {
    errors.push(
        `PORT '${port}' is invalid. It must be between 1024 and 65535`
    );
}

if (!databaseUrl) {
    errors.push("DATABASE_URL is missing");
}

if (errors.length > 0) {
    console.error("\nCONFIGURATION VALIDATION FAILED");

    errors.forEach((error, index) => {
        console.error(`${index + 1}. ${error}`);
    });

    console.error("\nDeployment cannot continue.");
    process.exit(1);
}

console.log("Application Name:", appName);
console.log("Environment:", appEnv);
console.log("Port:", port);
console.log("Database configuration found");

console.log("\nHealth Check: PASSED");
console.log("Application deployed successfully");