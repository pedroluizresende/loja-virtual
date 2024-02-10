import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import IProductInCart from '../interfaces/IProductInCart'
import { CartList, CartSection, CustomMain, ResumeSection } from '../styles/shopCart'
import { Button } from './products'
import CartItem from '../components/CartItem'

function ShopCart() {
  const [cart, setCart] = useState([]as IProductInCart[])

  const fetchCart = () => {
    const productsFromLocalStorage = localStorage.getItem('products')
    const productsInCart: IProductInCart[] = productsFromLocalStorage ? JSON.parse(productsFromLocalStorage) : []
    setCart(productsInCart)
  }

  const calculateTotal = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  }

  const calculateTotalProducts = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0)
  }

  const removeProductFromCart = (id: number) => {
    const productsFromLocalStorage = localStorage.getItem('products')
    const products: IProductInCart[] = productsFromLocalStorage ? JSON.parse(productsFromLocalStorage) : []
    const newProducts = products.filter((product: IProductInCart) => product.id !== id)
    localStorage.setItem('products', JSON.stringify(newProducts))
    setCart(newProducts)
  }

  const finishiBuying = () => {
    alert('Compra finalizada')
  }

  useEffect(() => {
    fetchCart()
  }, [])
  return (
    <>
      <Header />

      <CustomMain>
        <h1>Carrinho</h1>

        {
          cart.length === 0 ? <h2>Seu Carrinho está vazio 😢</h2> 
          : (
            <CartSection>

            <CartList>
  
            {cart.map((product: IProductInCart) => (
              <CartItem
                key={ product.id }
                id={ product.id }
                image={ product.image }
                name={ product.name }
                price={ product.price }
                quantity={ product.quantity }
                removeProductFromCart={ removeProductFromCart }
              />
            ))}
            </CartList>
            <ResumeSection>
              <h2>Resumo da compra</h2>
              <p>{`Produtos: (${calculateTotalProducts()})`}</p>
              <h2><strong>{`Total: R$ ${calculateTotal().toFixed(2)}`}</strong></h2>
              <Button onClick={ finishiBuying }>Comprar</Button>
            </ResumeSection>
          </CartSection>
          )
        }        
      </CustomMain>
    </>
  )
}

export default ShopCart