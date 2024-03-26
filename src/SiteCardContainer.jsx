import React from 'react'
import SiteCard from './SiteCard'

const SiteCardContainer = ({data}) => {
  return (
    <div style={{display:'flex',flexWrap:"wrap",gap:'20px'}}>
        {data &&
        data.length > 0 &&
        data.map((item) => (
          <SiteCard images={item?.land_media} cardData={item} />
        ))}
    </div>
  )
}

export default SiteCardContainer