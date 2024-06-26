import React, {useState, useEffect} from "react"
import axios from 'axios';
// import './sites.css'
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { MdBookmarkAdded } from "react-icons/md"
import { FaPlusCircle } from "react-icons/fa";

import Aos from "aos";
import 'aos/dist/aos.css'
// let me paste the array named data



const Sites = () => {

  const [sites, setSites] = useState([])

  const getSites = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/site_archeologique/');
    // console.log(response.data)
    setSites(response.data)
  }

  // useEffect(()=>{
  //   Aos.init({duration: 2000})
  // },[] )

  
  
  useEffect(() => {
    getSites();
  }, [])

  const goToDetails = () => {
    alert("details page")
}

  return (
    

  <section id="destination" className="main container section">
    <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
              Most visited destinations
        </h3>
    </div>
    {
            sites.map((site, index) => (
    <div className="secContent grid">
        <div className="imageDiv">
               <img src={sites.image} height="200" width="300"/>
          </div>  
        <div className="cardInfo">
          <h4 className="destTiltle">{sites.nom}</h4>
          <span className="continent flex">
            <HiOutlineLocationMarker className='icon' />
            <span className="name">{sites.localisation}</span>
          </span>
          
        </div>
        <div className="desc">
          <p>{sites.description}</p>
        </div>
    </div>
    
))}
  </section>


    /* <div>

        <h1>show all the site</h1>
        {
            sites.map((site, index) => (
                <div>
                    <p>{site.name}</p>
                    <p>{site.description}</p>
                    <p>{site.localisation}</p>
                    <Link className="btn btn-primary mr-2" to={`/Main/details/${site.id}`}>Full Detail</Link>

                </div>

                
            ))

        }
        
       
        
    </div> */
);





    // return (
    //    <section id="destination" className="main container section">
    //         <div className="secTitle">
    //             <h3 data-aos="fade-right" className="title">
    //                   Most visited destinations
    //             </h3>
    //         </div>
    //         <div className="secContent grid">
    //           {
    //             Data.map(({id,imgSrc,destTitle,location,grade,fees,description }) =>{ 
    //               return(
    //                 <div key={id} data-aos="fade-up" className="singleDestination">
    //                   <div className="imageDiv">
    //                     <img src={imgSrc} alt={destTitle} />
    //                   </div>  


    //                   <div className="cardInfo">
    //                     <h4 className="destTiltle">{destTitle}</h4>
    //                     <span className="continent flex">
    //                       <HiOutlineLocationMarker className='icon' />
    //                       <span className="name">{location}</span>
    //                     </span>

    //                     <div className="fees flex">
    //                       <div className="grade">
    //                         <span>{grade}<small>+1</small></span>
    //                       </div>
    //                       <div className="price">
    //                         <h5>{fees}</h5>
    //                       </div>  
    //                     </div>  


    //                     <div className="desc">
    //                       <p>{description}</p>
    //                     </div>

    //                     <Link to="/Main/details">
    //                       <button className="btn flex">
    //                       DETAILS
    //                        {/* <MdBookmarkAdded className="icon"/> */}
    //                       </button>
    //                     </Link>
    //                     <Link to="/client/reservation">
    //                       <button className="btn flex">
    //                         RESERVER 
    //                         {/* <MdBookmarkAdded className="icon"/> */}
    //                       </button>
    //                     </Link>



    //                   </div>  
    //                 </div>  
    //               )
    //             })
    //           }
 
    //         </div>
    //         {/* <center>
    //           <a href="https://tunisiatourism.info/fr/destinations">
    //             <button class="btn plusbtn" type="button">
    //               <p>
    //                 "Plus de destination"
    //                 <FaPlusCircle  className="icon"/>
    //               </p>
    //             </button>
    //           </a>
    //         </center> */}

    //    </section>
       
    // )
}

export default Sites