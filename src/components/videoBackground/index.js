import style from './style';
import ReactPlayer from 'react-player'

const VideoBackground = () => (

<div className={style.videoWrapper}>
    <ReactPlayer
        url='https://www.facebook.com/mwood23/videos/10159144392445571/'
        playing
        loop
        width='100%'
        height='initial'
        fileConfig={{ attributes: { autoPlay: true }}} />
    <div className={style.tagline}>
      <h1>Full line perishable foods facility in the Mid-Atlantic</h1>
    </div>
  </div>
);

export default VideoBackground
