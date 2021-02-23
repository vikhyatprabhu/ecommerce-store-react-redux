import React, { useState } from 'react'
import SHOP_DATA from '../../utils/ShopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

export const ShopPage = (props) => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className='shop-page'>
      {
        collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)
      }
    </div>
  )
}

export default ShopPage;

