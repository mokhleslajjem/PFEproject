import React, {useState, useEffect} from "react"// import './Client.css';
import { Link } from 'react-router-dom'; 

import image from '../../asser/guide1.jpg'
import image1 from '../../asser/guide2.jpg'
import image2 from '../../asser/guide3.jpg'
import image3 from '../../asser/guide4.jpg'
import image4 from '../../asser/guide5.jpg'
import image5 from '../../asser/guide6.jpg'
import Aos from "aos";
import 'aos/dist/aos.css'
import { MdAlternateEmail } from "react-icons/md";

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
    const ListeGuides = () => {
        useEffect(()=>{
            Aos.init({duration: 2000})
          },[] )
       
    return (
        <section id="destination" className="main container section">
    <div className="secTitle">
        
    <h3 data-aos="fade-right" className="title">
    Guides touristiques Tunisie
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

</section>
      
       
    )
}

export default ListeGuides