import ASSET_PATHS from './asset_paths';

const AUDIO_TAGS = [
  {
    src: `${ASSET_PATHS.audio}iom_speak_to_me_feat_kerri.mp3`,
    controls: false,
    loop: true,
    autoplay: true
  },
  {
    src: `${ASSET_PATHS.audio}iom_a_sea_of_writing.mp3`,
    controls: false,
    loop: true,
    autoplay: true
  },
  {
    src: `${ASSET_PATHS.audio}iom_matryoshka.mp3`,
    controls: false,
    loop: true,
    autoplay: true
  }
]

export default Object.freeze(AUDIO_TAGS);