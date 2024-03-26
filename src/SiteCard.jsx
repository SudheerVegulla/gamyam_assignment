import React from 'react'
import Carousel from './Carousel'

const SiteCard = ({images,cardData}) => {
    let imagesUrl = [];
    images.map(el => imagesUrl.push(el.image))
  return (
    <div style={{borderRadius:'8px',width:'calc(33.33% - 20px)',position:'relative',border:'2px solid grey',boxShadow:'0 2px 4px rgba(0, 0, 0, 0.1)'}}>
        <div>
        <Carousel images={imagesUrl} />
        {/* <img src="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg" style={{width:'82%'}} alt="img"/> */}
        </div>
        <div>
            <div><p style={{fontWeight:400}}>{cardData.village_name},{cardData.mandal_name}</p>
            <p style={{fontWeight:400}}>{cardData.district_name}(dt)</p></div>
            <div style={{display:'flex'}}>
                {cardData?.total_land_size_in_acres?.acres > 0 && <p style={{fontWeight:600,marginRight:'4px'}}>{cardData?.total_land_size_in_acres?.acres} Acres </p>}
                {cardData?.total_land_size_in_acres?.guntas > 0 && <p style={{fontWeight:600,marginRight:'4px'}}>{cardData?.total_land_size_in_acres?.guntas} Guntas</p>}
                <p>{cardData?.total_price.toFixed(2)} crores for full property</p>
            </div>
        </div>
        
    </div>
  )
}

export default SiteCard