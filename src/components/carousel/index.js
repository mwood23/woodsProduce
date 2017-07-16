import style from './style';
import { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import CarouselItem from '../carouselItem';

export default class Carousel extends Component {


    render() {

      return (
        <OwlCarousel
            className="owl-theme"
            loop margin={10}
            dots={false}
            autoplay
            autoplayTimeout={3000}
            items={5}
        >
            <CarouselItem image="http://rainierfruit.com/wp-content/themes/rainier/images/rainier-fruit-old.png"></CarouselItem>
            <CarouselItem image="http://www.producegrower.com/FileUploads/image/RedSunFarmsLogo.png?w=736&h=414&mode=crop"></CarouselItem>
            <CarouselItem image="http://woodsproduce.net/img/suppliers/crown-orchard.jpg"></CarouselItem>
            <CarouselItem image="http://woodsproduce.net/img/suppliers/nunes-company.jpg"></CarouselItem>
            <CarouselItem image="http://woodsproduce.net/img/suppliers/fort-boise.jpg"></CarouselItem>
            <CarouselItem image="http://woodsproduce.net/img/suppliers/ta.jpg"></CarouselItem>
            <CarouselItem image="http://woodsproduce.net/img/suppliers/sunglo-of-idaho.jpg"></CarouselItem>
            <CarouselItem image="http://woodsproduce.net/img/suppliers/calavo-growers.jpg"></CarouselItem>
            <CarouselItem image="http://www.cooketrucking.com/wp-content/themes/JointsWP/assets/images/logo.svg"></CarouselItem>
            <CarouselItem image="http://woodsproduce.net/img/suppliers/columbine-vineyards.jpg"></CarouselItem>
            <CarouselItem image="http://woodsproduce.net/img/suppliers/del-monte.jpg"></CarouselItem>
            <CarouselItem image="http://woodsproduce.net/img/suppliers/growers-express.jpg"></CarouselItem>
            <CarouselItem image="http://woodsproduce.net/img/suppliers/wonderful-citrus.jpg"></CarouselItem>
            <CarouselItem image="http://woodsproduce.net/img/suppliers/oso-sweet.jpg"></CarouselItem>
            <CarouselItem image="http://woodsproduce.net/img/suppliers/bolthouse-farms.jpg"></CarouselItem>
        </OwlCarousel>
      );
    }

}
