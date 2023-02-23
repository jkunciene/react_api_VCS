import React from 'react'

const OneProduct = (props) => {
   // console.log(props.items)
    
  return (
    <div>
      {
        props.items.map((one_product, index)=> (
            <div key={index}>
                <h3>{one_product.title}</h3>
                <p>{one_product.description}</p>
            </div>
        ))
      }
    </div>
  )
}

export default OneProduct
