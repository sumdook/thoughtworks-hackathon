import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Card, Col, Row } from 'antd';
import ReactCountryFlag from "react-country-flag";
import Slider from 'react-slick';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const { Meta } = Card;

const backdropUri=[
    "https://image.tmdb.org/t/p/original/sidkiCLsv34nczGD84LOvb6rlaH.jpg",
    "https://image.tmdb.org/t/p/original/7KEwgUta9tjHG32Pcp5vjoaLql9.jpg",
    "https://image.tmdb.org/t/p/original/y6vaD2MPLEqzvoqWpqlj95Q50DB.jpg",
    "https://image.tmdb.org/t/p/original/5WGAkD2HTvfUWztLDsp4ZaUse88.jpg",
    "https://image.tmdb.org/t/p/original/aVFX6DaXacBdjj2VRbZjHWFRlds.jpg",
    "https://image.tmdb.org/t/p/original/ysM0PbmvxwojAUftlgdb8zjbK0l.jpg",
    "https://image.tmdb.org/t/p/original/22cUd4Yg5euCxIwWzXrL4m4otkU.jpg",
    "https://image.tmdb.org/t/p/original/yRXzrwLfB5tDTIA3lSU9S3N9RUK.jpg"
];
class Genres extends Component{
    state={currentGenre:""};
    
    renderCarousel = () => {
        const {currentGenre} = this.state;
        if(currentGenre){
            const movieList = this.props.util.genres[currentGenre];
            return movieList.map(movie=>{
                var image = backdropUri[Math.floor(Math.random()*backdropUri.length)];
                return(
                    <Col span={6}>
                    <a href={this.props.movies[movie].movie_imdb_link} target="_blank">
                        <Card
                        hoverable
                        style={{width: 350, margin:'10px', borderColor:'rgba(219, 24, 24, .2)', borderRadius:10}}
                        cover={<img alt="example" style={{borderTopLeftRadius:10, borderTopRightRadius:10}}src={image} />}
                    >
                        <Row>
                            <Col span={4}>
                                <ReactCountryFlag code="us" svg/>
                            </Col>
                            <Col span={20}>
                                <Meta
                                    title={this.props.movies[movie].movie_title}
                                    description={this.props.movies[movie].language|| "NA"}
                                />
                            </Col>
                        </Row>
                    </Card>
                    </a>
                </Col>
                );
            })
        }
    }

    renderGenre = () => {
        if(Object.keys(this.props.movies).length){
            const GenreList = this.props.util.genres;
            return Object.keys(GenreList).map(item=>{
                return(
                    <Col span={6}>
                            <Card
                            onClick={()=>{this.setState({currentGenre:item})}}
                            hoverable
                            style={{width: 350, margin:'10px', borderColor:'rgba(219, 24, 24, .2)', borderRadius:10, textAlign:'center'}}
                        >
                            <span className="genre-span">{item}</span>
                            <p>{this.props.util.genres[item].length} movies</p>
                        </Card>
                    </Col>
               ); 
            })
                
        }
    }

    render(){

        var settings = {
            infinite: false,
            lazyLoad: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return(
            <div>
                <h1 className="text-header">Choose your <span className="text-span">genre</span></h1>
                <Slider {...settings}>
                    {this.renderGenre()}
                </Slider>
                <p className="text-header text-span">{this.state.currentGenre}</p>
                <Slider {...settings}>
                    {this.renderCarousel()}
                </Slider>
            </div>
        );
    }
}

function mapStateToProps({movies,util}){
    return {movies,util};
}

export default connect(mapStateToProps)(Genres);