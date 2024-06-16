import React, {useState, useEffect} from "react"
import axios from 'axios';
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { MdBookmarkAdded } from "react-icons/md"
import { FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdAlternateEmail } from "react-icons/md";


import img from '../../asser/download.jpg'
import img2 from '../../asser/binzart.jpg'
import img3 from '../../asser/djerba.jpg'
import img4 from '../../asser/hammamet.jpg'
import img5 from '../../asser/kairouan.jpg'
import img6 from '../../asser/sousse.jpg'

import image from '../../asser/guide1.jpg'
import image1 from '../../asser/guide2.jpg'
import image2 from '../../asser/guide3.jpg'
import image3 from '../../asser/guide4.jpg'
import image4 from '../../asser/guide5.jpg'
import image5 from '../../asser/guide6.jpg'

import Aos from "aos";
import 'aos/dist/aos.css'
// let me paste the array named data

const Data =[
  {
  id:1,
  imgSrc: img,
  destTitle: 'El Jem',
  location: 'Tunisie',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description: 'El Jem ou El Djem est une ville tunisienne située aux portes de la région du Sahel. Elle constitue une municipalité comptant 21 234 habitants en 2014.'
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Bizerte',
    location: 'Tunisie',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Bizerte est une ville du nord de la Tunisie située entre la mer Méditerranée et le lac de Bizerte. elle est le chef-lieu d un gouvernorat. '
    },
    {
      id:3,
      imgSrc: img3,
      destTitle: 'Djerba',
      location: 'Tunisie',
      grade: 'CULTURAL RELAX',
      fees: '$600',
      description: 'Djerba est une île de la côte tunisienne connue pour ses plages méditerranéennes et ses villes blanches du désert influencées par les cultures berbère, arabe, juive et africaine.'
      },
      {
        id:4,
        imgSrc: img4,
        destTitle: 'Hammamet',
        location: 'Tunisie',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Hammamet est une ville tunisienne située au nord-est, sur la côte sud-est du cap Bon, à une soixantaine de kilomètres au sud de Tunis. '
        },
        {
          id:5,
          imgSrc: img5,
          destTitle: 'Kairouan',
          location: 'Tunise',
          grade: 'CULTURAL RELAX',
          fees: '$600',
          description: 'Kairouan est une ville située dans le désert du nord de la Tunisie. Sous le règne des émirs des Aghlabides, qui ont construit grand nombre de ses monuments. '
          },
          {
            id:6,
            imgSrc: img6,
            destTitle: 'Sousse',
            location: 'Tunisie',
            grade: 'CULTURAL RELAX',
            fees: '$600',
            description: 'Sousse est une ville portuaire de l Est de la Tunisie, située à 143 kilomètres au sud de Tunis, et ouverte sur le golfe d Hammamet.'
            },
  ]
  const Data1 =[
    {
    id:1,
    imgSrc: image,
    name: 'Mehdi Hachani',
    email: 'mehdi.hachani10@gmail.com',
    compétence: 'Je suis un guide touristique professionnel national indépendant disponible pour des excursions et circuits à la carte .',
    langue: 'anglais, français, italien',
    // avis: 'jjnnbh'
    },
    {
      id:2,
      imgSrc: image1,
      name: 'Ahmed Riahi',
      email: 'ahmedkoubi27@gmail.com',
      compétence: 'Titulaire d’une licence en langue et littérature anglais',
      langue: 'français,anglais,Italie',
      avis: 'dfvrv'


      },
      {
        id:3,
        imgSrc: image2,
        name: 'Mrad Ali',
        email: 'mrad.ali2802@gmail.com',
        compétence: 'Je suis guide touristique professionnel depuis bientôt maintenant 20 ans sur tout Le territoire tunisien.',
        langue: 'français,English',
        avis: 'dfvrv'
  
  
        },
        {
          id:4,
          imgSrc: image3,
          name: 'Aïcha Boukari',
          email: 'nanachichou2009@hotmail.com',
          compétence: 'dc d cd ',
          langue: 'anglais, français',
          avis: 'dfvrv'
    
    
          },
          {
            id:5,
            imgSrc: image4,
            name: 'Marwen Gargouri',
            email: 'gargourimarwen@yahoo.com',
            compétence: 'Je suis guide touristique depuis 2019.',
            langue: 'français, russe',
            avis: 'dfvrv'
      
      
            },
            {
              id:6,
              imgSrc: image5,
              name: 'Yousra Barka',
              email: 'yousrabarka@live.fr',
              compétence: 'dc d cd ',
              langue: 'anglais, français, polonais, espagnol',
              avis: 'dfvrv'
        
        
              },
      
   
    ]  

const Main = () => {
  //lets create a react book to add a scroll animation ...
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[] )
  // const [sites, setSites] = useState([])

  // const getSites = async () => {
  //     const result = await axios.get('http://127.0.0.1:8000/api/sites/');

  //     console.log(result.data)
  //     setSites(result.data)
  // }
  // useEffect(() => {
  //   getSites();
  // }, [])




    return (
       <section id="destination" className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                      Most visited destinations
                </h3>
            </div>
            <div className="secContent grid">
              {
                Data.map(({id,imgSrc,destTitle,location,grade,fees,description }) =>{ 
                  return(
                    <div key={id} data-aos="fade-up" className="singleDestination">
                      <div className="imageDiv">
                        <img src={imgSrc} alt={destTitle} />
                      </div>  


                      <div className="cardInfo">
                        <h4 className="destTiltle">{destTitle}</h4>
                        <span className="continent flex">
                          <HiOutlineLocationMarker className='icon' />
                          <span className="name">{location}</span>
                        </span>

                        <div className="fees flex">
                          <div className="grade">
                            <span>{grade}<small>+1</small></span>
                          </div>
                          <div className="price">
                            <h5>{fees}</h5>
                          </div>  
                        </div>  


                        <div className="desc">
                          <p>{description}</p>
                        </div>

                        <Link to="/Main/details">
                          <button className="btn flex">
                          DETAILS
                           {/* <MdBookmarkAdded className="icon"/> */}
                          </button>
                        </Link>
                        <Link to="/client/reservation">
                          <button className="btn flex">
                            RESERVER 
                            {/* <MdBookmarkAdded className="icon"/> */}
                          </button>
                        </Link>



                      </div>  
                    </div>  
                  )
                })
              }
 
            </div>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                Most Guides
                </h3>
            </div>
            <div className="secContent1 grid">
              {
                Data1.map(({id,imgSrc,name,email,compétence,langue, avis}) =>{ 
                  return(
                    <div key={id} data-aos="fade-up" className="singleDestination1">
                      <div className="imageDiv1">
                        <img src={imgSrc} alt={name} />
                      </div>  


                      <div className="cardInfo1">
                        <h4 className="destTiltle1">{name}</h4>
                        


                        <span className="continent flex">
                          <MdAlternateEmail  className='icon' />
                          <span className="name">{email}</span>
                        
                        </span>

                        <div className="desc1">
                          <h2>compétence :</h2><p>{compétence}</p>
                        </div>
                        <div className="desc1">
                        
                          <h2>Langue :</h2><p>{langue}</p>
                        </div>
                        {/* <div className="desc1">
                          <h2>Avis :</h2><p>{avis}</p>
                        </div> */}

                        <Link to="/Main/details">
                          <button className="btn flex">
                          voir plus
                           {/* <MdBookmarkAdded className="icon"/> */}
                          </button>
                        </Link>
                       



                      </div>  
                    </div>  
                  )
                })
              }
 
            </div>
    
            {/* <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1433ac5" data-id="1433ac5" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-15a4af4 elementor-widget elementor-widget-heading" dara-id="15a4af4" data-element_type="widget" data-widget_type="heading.default" >
                  <div class="elementor-widget-container">
                    <h2 class="elementor-heading-title elementor-size-default">Nos derniers articles</h2>
                  </div>
                </div>
                <div class="elementor-element elementor-element-6f2d482 elementor-widget elementor-widget-jet-listing-grid" data-id="6f2d482" data-element_type="widget" data-widget_type="jet-listing-grid.default" >
                  <div class="elementor-widget-container">
                    <div class="jet-listing-grid jet-listing">
                      <div class="jet-listing-grid__items grid-col-desk-4 grid-col-tablet-4 grid-col-mobile-1 jet-listing-grid--7131 jet-equal-columns__wrapper" data-queried-id="13|WP_Post"  data-nav="{&quot;enabled&quot;:false,&quot;type&quot;:null,&quot;more_el&quot;:null,&quot;query&quot;:[],&quot;widget_settings&quot;:{&quot;lisitng_id&quot;:7131,&quot;posts_num&quot;:4,&quot;columns&quot;:4,&quot;columns_tablet&quot;:4,&quot;columns_mobile&quot;:1,&quot;is_archive_template&quot;:&quot;&quot;,&quot;post_status&quot;:[&quot;publish&quot;],&quot;use_random_posts_num&quot;:&quot;&quot;,&quot;max_posts_num&quot;:9,&quot;not_found_message&quot;:&quot;No data was found&quot;,&quot;is_masonry&quot;:false,&quot;equal_columns_height&quot;:&quot;yes&quot;,&quot;use_load_more&quot;:&quot;&quot;,&quot;load_more_id&quot;:&quot;&quot;,&quot;load_more_type&quot;:&quot;click&quot;,&quot;load_more_offset&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;use_custom_post_types&quot;:&quot;&quot;,&quot;custom_post_types&quot;:[],&quot;hide_widget_if&quot;:&quot;&quot;,&quot;carousel_enabled&quot;:&quot;&quot;,&quot;slides_to_scroll&quot;:&quot;1&quot;,&quot;arrows&quot;:&quot;true&quot;,&quot;arrow_icon&quot;:&quot;fa fa-angle-left&quot;,&quot;dots&quot;:&quot;&quot;,&quot;autoplay&quot;:&quot;true&quot;,&quot;pause_on_hover&quot;:&quot;true&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;true&quot;,&quot;center_mode&quot;:&quot;&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500,&quot;inject_alternative_items&quot;:&quot;&quot;,&quot;injection_items&quot;:[],&quot;scroll_slider_enabled&quot;:&quot;&quot;,&quot;scroll_slider_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;custom_query&quot;:false,&quot;custom_query_id&quot;:&quot;&quot;,&quot;_element_id&quot;:&quot;&quot;}}" data-page="1" data-pages="13" data-listing-source="posts" data-listing-id="7131"  data-query-id>
                        <div class="jet-listing-grid__item jet-listing-dynamic-post-25239 jet-equal-columns" data-post-id="25239" >
                          <div data-elementor-type="jet-listing-items" data-elementor-id="7131" class="elementor elementor-7131" data-elementor-post-type="jet-engine">
                            <div class="elementor-element elementor-element-d52b1bc e-con-full e-flex e-con e-parent" data-id="d52b1bc" data-element_type="container" >
                              <div class="elementor-element elementor-element-95aec1b e-con-full e-flex e-con e-child" data-id="95aec1b" data-element_type="container" >
                                <div class="elementor-element elementor-element-9e146cd img-blog elementor-widget elementor-widget-image" data-id="9e146cd" data-element_type="widget" data-widget_type="image.default" >
                                  <div class="elementor-widget-container" >
                                    <a href="https://guideyourtrip.com/blog-voyageurs/visite-amerique-nord/escale-a-philadelphie">
                                      <img decoding="async" title="Visiter Philadelphie" width="480" height="50" src="https://guideyourtrip.com/wp-content/uploads/2024/04/blog-vignette-visiter-philadelphie.jpg" class="attachment-full size-full wp-image-26159 entered lazyloaded" alt="Visiter Philadelphie" data-lazy-srcset="https://guideyourtrip.com/wp-content/uploads/2024/04/blog-vignette-visiter-philadelphie.jpg 480w, https://guideyourtrip.com/wp-content/uploads/2024/04/blog-vignette-visiter-philadelphie-300x219.jpg 300w" data-lazy-sizes="(max-width: 480px) 100vw, 480px" data-lazy-src="https://guideyourtrip.com/wp-content/uploads/2024/04/blog-vignette-visiter-philadelphie.jpg"  data-ll-status="loaded" sizes="(max-width: 480px) 100vw, 480px" srcset="https://guideyourtrip.com/wp-content/uploads/2024/04/blog-vignette-visiter-philadelphie.jpg 480w, https://guideyourtrip.com/wp-content/uploads/2024/04/blog-vignette-visiter-philadelphie-300x219.jpg 300w" ></img>

                                    </a>
                                  </div>

                                </div>
                                <div class="elementor-element elementor-element-f0fd2dc elementor-widget-mobile__width-inherit entry-title elementor-widget elementor-widget-heading" data-id="f0fd2dc" data-element_type="widget" data-widget_type="heading.default">
                                  <div class="elementor-widget-container">
                                    <h2 class="elementor-heading-title elementor-size-default">
                                      <a href="https://guideyourtrip.com/blog-voyageurs/visite-amerique-nord/escale-a-philadelphie">Découvrir l’Amérique avec une escale à Philadelphie</a>

                                    </h2>

                                  </div>

                                </div>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
                
              </div>

            </div> */}
            {/* <center>
              <a href="https://tunisiatourism.info/fr/destinations">
                <button class="btn plusbtn" type="button">
                  <p>
                    "Plus de destination"
                    <FaPlusCircle  className="icon"/>
                  </p>
                </button>
              </a>
            </center> */}

       </section>
      
       
    )
}

export default Main