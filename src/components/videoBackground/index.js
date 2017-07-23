import style from './style';
import ReactPlayer from 'react-player'
import { h, Component } from 'preact';


export default class VideoBackground extends Component {


	render({}, {timestamp}) {
		return (
      <div className={style.videoWrapper}>
				{/* <iframe src="https://www.youtube.com/embed/HxOwaKulUlM?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=HxOwaKulUlM" frameborder="0" allowfullscreen></iframe> */}

				{/* <iframe src="https://streamable.com/s/lwxwr/hpydia?autoplay=1&loop=1" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe> */}

        <ReactPlayer
            url='https://streamable.com/gws5r'
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
            fileConfig={{ attributes: { autoPlay: true }}} />
        <div className={style.tagline}>
          <h1>FULL LINE PERISHABLE FOODS WHOLESALER</h1>
        </div>
      </div>
		);
	}
}
