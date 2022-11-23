/* global game */
import LOGGER from "../utils/logger.js";
import {HnhConstants} from "./hnh-constants.js";

/**
 * This file defines user settings for the system module.
 */
const registerSystemSettings = () => {
    game.settings.register(HnhConstants.Settings.SYSTEM_NAME, HnhConstants.Settings.DEBUG_LOGS, {
        name: "CS.settings.debugLogs.name",
        hint: "CS.settings.debugLogs.hint",
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: (value) => {
            LOGGER.log(`Changed ${HnhConstants.Settings.DEBUG_LOGS} to ${value}`);
        },
    });

    game.settings.register(HnhConstants.Settings.SYSTEM_NAME, HnhConstants.Settings.TRACE_LOGS, {
        name: "CS.settings.traceLogs.name",
        hint: "CS.settings.traceLogs.hint",
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: (value) => {
            LOGGER.log(`Changed ${HnhConstants.Settings.TRACE_LOGS} to ${value}`);
        },
    });

    game.settings.register(HnhConstants.Settings.SYSTEM_NAME, HnhConstants.Settings.CURRENT_VERSION, {
        name: "Current Version",
        scope: "world",
        config: false,
        type: String,
        onChange: (value) => {
            LOGGER.log(`Changed ${HnhConstants.Settings.CURRENT_VERSION} to ${value}`);
        },
    });
};

export default registerSystemSettings;
