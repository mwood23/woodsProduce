import style from './style';

const VideoBackground = () => (
  <div className={style.videoWrapper}>
    <iframe src="https://www.youtube.com/embed/HxOwaKulUlM?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=HxOwaKulUlM" frameborder="0" allowfullscreen></iframe>
    <div className={style.tagline}>
      <h1>Full line perishable foods facility in the Mid-Atlantic</h1>
    </div>
  </div>
);

export default VideoBackground
