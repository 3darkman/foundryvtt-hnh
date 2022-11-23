import factory from "../utils/factory.js";
import {HnhManifestationItem} from "./types/hnh-manifestation-item.js";

const itemTypes = {};
itemTypes.manifestation = HnhManifestationItem;

const itemConstructor = factory(itemTypes, Item);
export default itemConstructor;
