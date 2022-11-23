import {HnhConstants} from "../system/hnh-constants.js";

export default class LOGGER {
    static log(msg) {
        console.log(`CS LOG | ${msg}`);
    }

    static debug(msg) {
        if (game.settings.get(HnhConstants.Settings.SYSTEM_NAME, HnhConstants.Settings.DEBUG_LOGS)) {
            console.debug(`CS DBG | ${msg}`);
            if (typeof msg === "object" && msg !== null) {
                console.log(msg);
            }
        }
    }

    static debugObject(obj) {
        if (game.settings.get(HnhConstants.Settings.SYSTEM_NAME, HnhConstants.Settings.DEBUG_LOGS)) {
            console.debug(obj);
        }
    }

    static warn(msg) {
        console.warn(`CS WRN | ${msg}`);
    }

    static trace(msg) {
        if (game.settings.get(HnhConstants.Settings.SYSTEM_NAME, HnhConstants.Settings.TRACE_LOGS)) {
            console.log(`CS TRC | ${msg}`);
        }
    }

    static error(msg) {
        console.error(`CS ERR | ${msg}`);
    }

    static credits() {
        console.log("SPECIAL THANKS TO MOO MAN FOR HIS PATIENCE AND HELP!");
    }
}
