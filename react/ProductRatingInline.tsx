import React from 'react'
import { useProduct } from 'vtex.product-context'

const ProductRatingInline = () => {
    const productContext = useProduct();

    return <div className="konfidency-reviews-multi" data-sku={productContext?.product?.productId}></div>
}

export default ProductRatingInline