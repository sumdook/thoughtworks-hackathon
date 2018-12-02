import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Card, Col, Row,Collapse, Switch } from 'antd';
import ReactCountryFlag from "react-country-flag";
import Slider from 'react-slick';

import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const { Meta } = Card;
const Panel = Collapse.Panel;
const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };

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
class Search extends Component{

    state={searchDomain:"all"};

    filterItems = (query) => {
        const movieList = Object.keys(this.props.movies);
        return movieList.filter((el) =>
          el.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    }
    onChange =() =>{

    }
    renderCarousel = () => {
        if(Object.keys(this.props.movies).length){
            const searchResult = this.filterItems(this.props.util.query);
            console.log(searchResult);
            return searchResult.map(item=>{
                var image = backdropUri[Math.floor(Math.random()*backdropUri.length)];
                return(
                    <Col span={6} xs={24} sm={24}>
                        <Card
                        hoverable
                        style={{width: 330, margin:'10px', borderColor:'rgba(219, 24, 24, .2)', borderRadius:10}}
                        cover={<img alt="example" style={{borderTopLeftRadius:10, borderTopRightRadius:10}}src={image} />}
                    >
                        <Row>
                            <Col span={4}>
                                <ReactCountryFlag code="us" svg/>
                            </Col>
                            <Col span={20}>
                                <Meta
                                    title={this.props.movies[item].movie_title}
                                    description={this.props.movies[item].language|| "NA"}
                                />
                            </Col>
                        </Row>
                    </Card>
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
            speed: 500,
            autoplay: true,
            autoplaySpeed: 4000,
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
                <h1 className="text-header">Your rearch <span className="text-span">results</span></h1>
                <Collapse bordered={false}>
                    <Panel header="Options" key="1">
                        <p>Sort by popularity: </p> <Switch defaultChecked={false} disabled onChange={this.onChange} />
                        <p>Sort by Title YEar: </p> <Switch defaultChecked={false} disabled onChange={this.onChange} />
                    </Panel>
                </Collapse>
                <Slider {...settings}>
                    {this.renderCarousel()}
                </Slider>
                <br/>
    
            </div>
        );
    }
}

function mapStateToProps({movies,util}){
    return {movies,util};
}

export default connect(mapStateToProps)(Search);