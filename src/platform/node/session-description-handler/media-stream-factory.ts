import { SessionDescriptionHandler } from "./session-description-handler";
import { MediaStream, MediaStreamConstraints } from "wrtc";
/**
 * Interface of factory function which produces a MediaStream.
 * @public
 */
export type MediaStreamFactory = (
    constraints: MediaStreamConstraints,
    sessionDescriptionHandler: SessionDescriptionHandler
) => Promise<MediaStream>;
