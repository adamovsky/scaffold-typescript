import { MaybeRender } from "./types";

const maybeRender: MaybeRender = (items, renderer) =>
    items.map((item, index) => (item ? renderer(item, index) : null));

export default maybeRender;
