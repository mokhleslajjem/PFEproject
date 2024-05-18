import React, {useEffect} from "react"
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { MdBookmarkAdded } from "react-icons/md"
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
  description: 'the epitome of romance , Bora Bora is one of the best travel destinations in the World. This place is know for its luxurious stays and adventurous activities'
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Bizerte',
    location: 'Tunisie',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna Picchu is a mountain in Peru , rising over Machu Picchu, the so called lost city of Incas . Tis place is popular among tourists'
    },
    {
      id:3,
      imgSrc: img3,
      destTitle: 'Djerba',
      location: 'Tunisie',
      grade: 'CULTURAL RELAX',
      fees: '$600',
      description: 'Huayna Picchu is a mountain in Peru , rising over Machu Picchu, the so called lost city of Incas . Tis place is popular among tourists'
      },
      {
        id:4,
        imgSrc: img4,
        destTitle: 'Hammamet',
        location: 'Tunisie',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Huayna Picchu is a mountain in Peru , rising over Machu Picchu, the so called lost city of Incas . Tis place is popular among tourists'
        },
        {
          id:5,
          imgSrc: img5,
          destTitle: 'Kairouan',
          location: 'Tunise',
          grade: 'CULTURAL RELAX',
          fees: '$600',
          description: 'Huayna Picchu is a mountain in Peru , rising over Machu Picchu, the so called lost city of Incas . Tis place is popular among tourists'
          },
          {
            id:6,
            imgSrc: img6,
            destTitle: 'Sousse',
            location: 'Tunisie',
            grade: 'CULTURAL RELAX',
            fees: '$600',
            description: 'Huayna Picchu is a mountain in Peru , rising over Machu Picchu, the so called lost city of Incas . Tis place is popular among tourists'
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
                          DETAILS <MdBookmarkAdded className="icon"/>
                          </button>
                        </Link>
                        <Link to="/client/reservation">
                          <button className="btn flex">
                            RESERVER <MdBookmarkAdded className="icon"/>
                          </button>
                        </Link>



                      </div>  
                    </div>  
                  )
                })
              }
 
            </div>

       </section>
    )
}

export default Main