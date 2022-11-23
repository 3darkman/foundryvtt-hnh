import factory from "../../utils/factory.mjs";
import {HnhManifestationItem} from "./hnh-manifestation-item.mjs";

const itemTypes = {};
itemTypes.manifestation = HnhManifestationItem;

const itemConstructor = factory(itemTypes, Item);
export default itemConstructor;
