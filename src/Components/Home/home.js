import React, { useState, useEffect } from 'react';
import './home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from "react-router-dom";
import Homeproduct from "./home_product";
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Home = ({addtocart}) => {
    const[newProduct, setNewProduct] = useState([]);
    const [featuredProduct, setFeaturedProduct] = useState([]);
    const [topProduct, setTopProduct] = useState([]);
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
    const filterB = (x) => {
      const filterproduct = Homeproduct.filter((curElm)=>{
        return curElm.type === x
      })
      setTrendingProduct(filterproduct)
    }
    const allTrendingProduct = () => {
      setTrendingProduct(Homeproduct)
    }
    useEffect (()=>{
      productcategory()
    })
    const productcategory = () =>
  {
    const newcategory = Homeproduct.filter((x)=>{
      return x.type === 'new'
    })
    setNewProduct(newcategory)

    const featuredcategory = Homeproduct.filter((x)=>{
      return x.type === "featured"
    })
    setFeaturedProduct(featuredcategory)

    const topcategory = Homeproduct.filter((x)=>{
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
    };
  return (
      <>
        < Slider {...settings}>
            <div className='a2'/>
            <div className='a3'/>
            <div className='a4'/>
            <div className='a5'/>
        </Slider>
        <div className='trending'>
            <div className='container'>
              <div className='left_box'>
                <div className='header'>
                  <div className='heading'>
                    <h6>Trending Product</h6>
                  </div>
                  <div className='uiv'>
                      <h3 onClick={()=> filterB ('new')}>New</h3>
                      <h3 onClick={()=> filterB ('featured')}>Featured</h3>
                      <h3 onClick={()=> filterB ('top')}>Top Selling</h3>
                  </div>
                </div>
                <div className='products'>
                  <div className='container'>
                    {
                      trendingProduct.map((curElm)=>{
                        return(
                          <>
                          <div className='box'>
                            <div className='img_box'>
                              <img src={curElm.Image} alt=''></img>
                              <div className='icon'>
                                <div className='icon_box'>
                                  <AiFillEye />
                                </div>
                              </div>
                            </div>
                            <div className='info'>
                              <h3>{curElm.Name}</h3>
                              <p>Kshs {curElm.price}</p>
                              <button className='btn' onClick={()=> addtocart (curElm)}>Add to Cart</button>
                            </div>
                          </div>
                          </>
                        )
                      })
                    }
                  </div>
                  <button>Show More</button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home