// Still image instead of video only on touch phones/tablets and reduced-motion.
// Narrow desktop windows keep the video.
export const STATIC_QUERIES = [
  "(pointer: coarse) and (max-width: 900px)",
  "(orientation: portrait) and (pointer: coarse)",
  "(orientation: landscape) and (pointer: coarse) and (max-height: 560px)",
  "(prefers-reduced-motion: reduce)",
];
