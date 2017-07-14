import style from './style';
import ReactPlayer from 'react-player'
import { h, Component } from 'preact';


export default class VideoBackground extends Component {


	render({}, {timestamp}) {
		return (
      <div className={style.videoWrapper}>
				<iframe src="https://www.youtube.com/embed/HxOwaKulUlM?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=HxOwaKulUlM" frameborder="0" allowfullscreen></iframe>

        {/* <ReactPlayer
            url='https://www.facebook.com/mwood23/videos/10159144392445571/'
            playing
            loop
            preload
            width='100%'
            height='initial'
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={() => this.setState({ playing: true })}
            onPause={() => this.setState({ playing: false })}
            onBuffer={() => console.log('onBuffer')}
            onEnded={() => this.setState({ playing: false })}
            onError={e => console.log('onError', e)}
            fileConfig={{ attributes: { autoPlay: true }}} /> */}
        <div className={style.tagline}>
          <h1>FULL LINE PERISHABLE FOODS WHOLESALER</h1>
        </div>
      </div>
		);
	}
}
