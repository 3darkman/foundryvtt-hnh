import SystemUtils from "./system-utils.mjs";

export default function factory(entities, baseClass) {
    return new Proxy(baseClass, {
        construct: (target, args) => {
            const [data, options] = args;
            const constructor = entities[data.type];
            if (!constructor) {
                // emit error
                const error = `${SystemUtils.localize("HNH.messages.unsupportedEntityError")}: ${data.type}`;
                SystemUtils.displayMessage("error", error);
                throw new Error(error);
            }
            return new constructor(data, options);
        },
        get: (target, prop) => {
            switch (prop) {
                case "create":
                    // Calling the class' create() static function
                    return (data, options) => {
                        const constructor = entities[data.type];
                        if (!constructor) {
                            const error = `${SystemUtils.localize("HNH.messages.unsupportedEntityError")}: ${data.type}`;
                            SystemUtils.displayMessage("error", error);
                            throw new Error(error);
                        }
                        return constructor.create(data, options);
                    };
                case Symbol.hasInstance:
                    // Applying the "instanceof" operator on the instance object
                    return (instance) => {
                        const constr = entities[instance.type];
                        if (!constr) {
                            return false;
                        }
                        return instance instanceof constr;
                    };
                default:
                    // Just forward any requested properties to the base Actor class
                    return baseClass[prop];
            }
        },
    });
}
