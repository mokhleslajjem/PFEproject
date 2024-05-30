import React, {useEffect} from "react"
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { MdBookmarkAdded } from "react-icons/md"
import { FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

import img from '../../asser/download.jpg'
import img2 from '../../asser/binzart.jpg'
import img3 from '../../asser/djerba.jpg'
import img4 from '../../asser/hammamet.jpg'
import img5 from '../../asser/kairouan.jpg'
import img6 from '../../asser/sousse.jpg'

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

const Main = () => {
  //lets create a react book to add a scroll animation ...
  useEffect(()=>{
    Aos.init({duration: 2000})
},[] )




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

                        <Link to="/client/visites">
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