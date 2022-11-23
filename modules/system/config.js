import LOGGER from "../utils/logger.js";
import registerSystemSettings from "./settings.js";
import {preloadHandlebarsTemplates} from "./preload-templates.js";
import {registerCustomHelpers} from "./handlebars-helpers.js";
import itemConstructor from "../items/item-constructor.js";
import {migrateData} from "../../migrations/migration.js";

Hooks.once("init", async function() {
    LOGGER.log(`Initializing HnH System`);

    registerCustomHelpers();

    CONFIG.Item.documentClass = itemConstructor;

    registerSystemSettings();
    await preloadHandlebarsTemplates()
});

Hooks.once("ready", async () => {
    await migrateData();
});
