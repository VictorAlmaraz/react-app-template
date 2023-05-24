import React from 'react'
import { useProduct } from 'vtex.product-context'

const ProductRatingSummary = () => {
    const productContext = useProduct();

    return <div className="konfidency-reviews-summary" data-sku={productContext?.product?.productId}></div>
}

export default ProductRatingSummary