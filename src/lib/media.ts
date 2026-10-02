// Still image instead of video only on touch phones (data and battery).
// Desktop always gets the video.
export const STATIC_QUERIES = [
  "(pointer: coarse) and (max-width: 720px)",
  "(orientation: landscape) and (pointer: coarse) and (max-height: 500px)",
];
