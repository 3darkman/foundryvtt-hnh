import Logger from "../utils/logger.mjs";
import registerSystemSettings from "./settings.mjs";
import {preloadHandlebarsTemplates} from "./preload-templates.mjs";
import {registerCustomHelpers} from "./handlebars-helpers.mjs";
import itemConstructor from "../documents/items/item-constructor.mjs";
import {migrateData} from "../../migrations/migration.js";

Hooks.once("init", async function() {
    Logger.log(`Initializing HnH System`);

    registerCustomHelpers();

    CONFIG.Item.documentClass = itemConstructor;

    registerSystemSettings();
    await preloadHandlebarsTemplates()
});

Hooks.once("ready", async () => {
    await migrateData();
});
