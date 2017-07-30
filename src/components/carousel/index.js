import style from './style';
import { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import CarouselItem from '../carouselItem';

export default class Carousel extends Component {


    render() {

      // Shows the video or header image depending on device width
      const mq = window.matchMedia( "(min-width: 500px)" );
      let items
      if (mq.matches) {
        // window width is at least 500px
        items = 5
      } else {
        // window width is less than 500px
        items = 3
      }

      return (
        <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            dots={false}
            autoplay
            autoplayTimeout={3000}
            items={items}
        >
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501368912/Bolthouse%20Farms.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_177/v1501368912/Bolthouse%20Farms.jpg 177w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_135/v1501368912/Bolthouse%20Farms.jpg 135w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_95/v1501368912/Bolthouse%20Farms.jpg 95w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501368912/Bolthouse%20Farms.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501368912/Bolthouse%20Farms.jpg"
    alt="Bolthouse Farms"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372284/Herndon%20Farms.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_173/v1501372284/Herndon%20Farms.jpg 173w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_145/v1501372284/Herndon%20Farms.jpg 145w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_103/v1501372284/Herndon%20Farms.jpg 103w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372284/Herndon%20Farms.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372284/Herndon%20Farms.jpg"
    alt="Herndon Farms"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372284/IPC.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_177/v1501372284/IPC.jpg 177w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_137/v1501372284/IPC.jpg 137w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_98/v1501372284/IPC.jpg 98w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372284/IPC.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372284/IPC.jpg"
    alt="IPC"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372284/Wonderful%20Citrus.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_173/v1501372284/Wonderful%20Citrus.jpg 173w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_130/v1501372284/Wonderful%20Citrus.jpg 130w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_93/v1501372284/Wonderful%20Citrus.jpg 93w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372284/Wonderful%20Citrus.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372284/Wonderful%20Citrus.jpg"
    alt="Wonderful Citrus"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372284/Calavo.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_160/v1501372284/Calavo.jpg 160w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_127/v1501372284/Calavo.jpg 127w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_83/v1501372284/Calavo.jpg 83w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372284/Calavo.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372284/Calavo.jpg"
    alt="Calavo"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372284/Sunglo.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_165/v1501372284/Sunglo.jpg 165w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_127/v1501372284/Sunglo.jpg 127w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_92/v1501372284/Sunglo.jpg 92w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372284/Sunglo.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372284/Sunglo.jpg"
    alt="Sunglo Potatoes"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372284/Form%20Boise.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_150/v1501372284/Form%20Boise.jpg 150w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_120/v1501372284/Form%20Boise.jpg 120w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_89/v1501372284/Form%20Boise.jpg 89w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372284/Form%20Boise.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372284/Form%20Boise.jpg"
    alt="Fort Boise Onions"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372284/Del%20Monte.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_167/v1501372284/Del%20Monte.jpg 167w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_134/v1501372284/Del%20Monte.jpg 134w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_87/v1501372284/Del%20Monte.jpg 87w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372284/Del%20Monte.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372284/Del%20Monte.jpg"
    alt="Del Monte"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372284/Dutch%20Valley.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_176/v1501372284/Dutch%20Valley.jpg 176w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_137/v1501372284/Dutch%20Valley.jpg 137w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_98/v1501372284/Dutch%20Valley.jpg 98w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372284/Dutch%20Valley.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372284/Dutch%20Valley.jpg"
    alt="Dutch Valley"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372285/Tanimura%20and%20Antle.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_176/v1501372285/Tanimura%20and%20Antle.jpg 176w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_137/v1501372285/Tanimura%20and%20Antle.jpg 137w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_98/v1501372285/Tanimura%20and%20Antle.jpg 98w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372285/Tanimura%20and%20Antle.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372285/Tanimura%20and%20Antle.jpg"
    alt="Tanimura and Antle"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 736) 100vw, 736"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372284/Red%20Sun.png 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_152/v1501372284/Red%20Sun.png 152w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_121/v1501372284/Red%20Sun.png 121w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_91/v1501372284/Red%20Sun.png 91w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372284/Red%20Sun.png 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372284/Red%20Sun.png"
    alt="Red Sun"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372285/River%20Ranch.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_167/v1501372285/River%20Ranch.jpg 167w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_136/v1501372285/River%20Ranch.jpg 136w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_98/v1501372285/River%20Ranch.jpg 98w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372285/River%20Ranch.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372285/River%20Ranch.jpg"
    alt="River Ranch"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372285/Boskovich%20Farms.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_183/v1501372285/Boskovich%20Farms.jpg 183w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_131/v1501372285/Boskovich%20Farms.jpg 131w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_96/v1501372285/Boskovich%20Farms.jpg 96w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372285/Boskovich%20Farms.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372285/Boskovich%20Farms.jpg"
    alt="Boskovich Farms"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372287/Columbine.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_171/v1501372287/Columbine.jpg 171w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_137/v1501372287/Columbine.jpg 137w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_96/v1501372287/Columbine.jpg 96w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372287/Columbine.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372287/Columbine.jpg"
    alt="Columbine Farms"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372286/Dole.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_167/v1501372286/Dole.jpg 167w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_133/v1501372286/Dole.jpg 133w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_97/v1501372286/Dole.jpg 97w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372286/Dole.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372286/Dole.jpg"
    alt="Dole"
  />}></CarouselItem>
            <CarouselItem image={<img sizes="(max-width: 500) 10vw, (max-width: 1500) 18vw, 210"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372287/Crown%20Orchards.jpg 200w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_167/v1501372287/Crown%20Orchards.jpg 167w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_134/v1501372287/Crown%20Orchards.jpg 134w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_95/v1501372287/Crown%20Orchards.jpg 95w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_50/v1501372287/Crown%20Orchards.jpg 50w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372287/Crown%20Orchards.jpg"
    alt="Crown Orchards"
  />}></CarouselItem>
        </OwlCarousel>
      );
    }

}
