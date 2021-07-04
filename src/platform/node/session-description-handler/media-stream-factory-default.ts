import { MediaStreamFactory } from "./media-stream-factory";
import { MediaStream, getUserMedia } from "wrtc";

/**
 * Function which returns a MediaStreamFactory.
 * @public
 */
export function defaultMediaStreamFactory(): MediaStreamFactory {
    return (constraints: MediaStreamConstraints): Promise<MediaStream> => {
        // if no audio or video, return a media stream without tracks
        if (!constraints.audio && !constraints.video) {
            return Promise.resolve(new MediaStream());
        }
        // comments that were here are no longer relevant
        return getUserMedia(constraints);
    };
}
