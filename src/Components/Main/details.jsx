import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const SiteDetail = () => {
    const [site, setSite] = useState("") 

    const { id } = useParams();

    const getSingleSite = async () => {  
      const { data } = await axios.get(`http://127.0.0.1:8000/api/sites/${id}/`);
      console.log(data);
      setSite(data);
    }

    useEffect(() => {
      getSingleSite();
    }, []);
  


     return (
        <div>
          <h2>Detail of Single Site</h2>
          <div className='full-site-detail'>
            <img src={site.image} />
            <div className='site-detail'>
              <p>{site.name}</p>
              <p>{site.price}</p>
              <p>{site.description}</p>
              <p>{site.localisation}</p>
            </div>
            
          </div>
        

         </div>
      );
};

export default SiteDetail;