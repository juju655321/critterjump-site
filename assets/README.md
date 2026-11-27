# Asset slots

Drop these files in place. The game already points at these paths. No code change is required. If a file is missing, the game keeps running: the band still shows the SVG poster, and sound effects fall back to short tones generated in the browser.

The shipped `band-poster.svg` and `hills.svg` are placeholders drawn to match the band brief: a fluffy purple Mothman on banjo, Buddy Blue Bear in overalls on log drums, a bald eagle in sunglasses on upright bass, and a red cardinal in a straw hat on guitar, on a mossy log with West Virginia mountains and a river behind them.

| File | Served at | Replace with |
| --- | --- | --- |
| `public/assets/video/band_loop.webm` | `/assets/video/band_loop.webm` | 1280×720 VP9, 30 fps, same 9.1 s loop as the MP4. The menu offers this source first. Not precached; the browser streams it. |
| `public/assets/video/band_loop.mp4` | `/assets/video/band_loop.mp4` | 1280×720, H.264, yuv420p, 30 fps, faststart, 9.1 s seamless loop. The game mutes it. Menu fallback when WebM is unavailable. Streamed, not precached. |
| `public/assets/video/band_raft_loop.webm` | `/assets/video/band_raft_loop.webm` | 1280×400 (16:5) VP9, 9.1 s, 132 BPM, muted. First source on the in-game banner. Streamed, not precached. The film restarts with the banjo and is nudged back if it drifts by more than one beat. |
| `public/assets/video/band_raft_loop.mp4` | `/assets/video/band_raft_loop.mp4` | Same 16:5 strip, H.264 faststart. Fallback after WebM. Streamed, not precached. |
| `public/assets/video/band_raft_loop@2x.mp4` | `/assets/video/band_raft_loop@2x.mp4` | Sharper copy, used only on wide high-DPR screens. Not precached. |
| `public/assets/images/band_raft_loop.png` | `/assets/images/band_raft_loop.png` | Poster under the raft banner. Precached. |
| `public/assets/images/raft-empty.png` | `/assets/images/raft-empty.png` | Transparent yellow CLASS VI raft for the tray. Riders sit inside it. |
| `public/assets/images/band-poster.svg` | `/assets/images/band-poster.svg` | Still frame, viewBox 960×540. Shown only if the PNG and the video both fail. |
| `public/assets/images/band-poster.png` | `/assets/images/band-poster.png` | 1280×720 PNG poster. Used under the video and on its own if the loop cannot play. |
| `public/assets/images/hills.svg` | `/assets/images/hills.svg` | Page background. ViewBox 1440×900. Safe to replace. |
| `public/assets/audio/bouncing-banjo.mp3` | `/assets/audio/bouncing-banjo.mp3` | Background tune. Stereo, 44.1 kHz, 160 kbps CBR, seamless loop, at or under 6 MB. If the source file is named `Bouncing Banio Game.mp3`, save it here under this name. |
| `public/assets/audio/sfx/wood_clack.mp3` | `/assets/audio/sfx/wood_clack.mp3` | Peg pickup clack. A short tone plays if the file is missing. |
| `public/assets/audio/sfx/land_thunk.mp3` | `/assets/audio/sfx/land_thunk.mp3` | Landing. |
| `public/assets/audio/sfx/splash.mp3` | `/assets/audio/sfx/splash.mp3` | River splash into the tray. |
| `public/assets/audio/sfx/raft_bob.mp3` | `/assets/audio/sfx/raft_bob.mp3` | Quiet water under the raft. Played a little softer. |
| `public/assets/audio/sfx/oops.mp3` | `/assets/audio/sfx/oops.mp3` | Invalid hop. |
| `public/assets/audio/sfx/hint_sparkle.mp3` | `/assets/audio/sfx/hint_sparkle.mp3` | Hint sparkle. |
| `public/assets/audio/sfx/color_match_bonus.mp3` | `/assets/audio/sfx/color_match_bonus.mp3` | Color-match chime. |
| `public/assets/audio/sfx/victory_sting.mp3` | `/assets/audio/sfx/victory_sting.mp3` | Win sting. |
| `public/assets/audio/sfx/lose.mp3` | `/assets/audio/sfx/lose.mp3` | Stuck / loss. The game plays this one at 0.6 volume, because the file is mastered louder than the others. |
| `public/assets/audio/critters/<critter>_<pickup\|jump>_<1\|2>.mp3` | `/assets/audio/critters/` | Two pickup takes and two jump takes for cardinal, bee, bear, and mothman. One take is chosen at random. |
| `public/assets/audio/voice/<key>.mp3` | `/assets/audio/voice/<key>.mp3` | Spoken lines. Keys: `welcome`, `splash`, `mothman`, `victory`, `color_bonus`, `trailblazer`, `happy_hiker`, `hint`, `stuck`, `how_to_meadow_hop`, `how_to_spruce_knob`, `how_to_honeycomb`, `bear_hey_buddy_1`, `bear_hey_buddy_2`, `bear_win`. A second voice line does not start while one is already playing. If a file is missing, the game speaks the line on the device. No network calls. |
| `public/assets/images/mascot/miner-full.svg` | `/assets/images/mascot/miner-full.svg` | Full miner. PNG sits beside it. |
| `public/assets/images/mascot/miner-portrait.svg` | `/assets/images/mascot/miner-portrait.svg` | Coach portrait on How to Play and level cards. |
| `public/assets/images/mascot/miner-wave.svg` | `/assets/images/mascot/miner-wave.svg` | Welcome pose. |
| `public/assets/images/mascot/miner-point.svg` | `/assets/images/mascot/miner-point.svg` | Hint pose. |
| `public/assets/images/mascot/miner-cheer.svg` | `/assets/images/mascot/miner-cheer.svg` | Victory pose. |
| `public/assets/images/mascot/miner-oops.svg` | `/assets/images/mascot/miner-oops.svg` | Stuck or illegal hop. |
| `public/assets/images/mascot/miner-token.svg` | `/assets/images/mascot/miner-token.svg` | Level 5 host token beside the coach line. |
| `public/assets/images/mascot/layers/` | `/assets/images/mascot/layers/` | Layered miner. The body bobs once per beat (455 ms) around the torso pivot. |
| `public/assets/levels/` | `/assets/levels/` | Per-level backdrop, title card, host, and board previews (`L1-cardi` through `L5-miner`). |

Icons in `public/icons/` are PNG at their exact pixel sizes (192 and 512) so they stay sharp. Pegs and the poster are SVG.

Music starts only after the first tap or key press. The Music button and the Settings screen share one saved on/off switch.
