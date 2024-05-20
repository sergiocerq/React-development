import React from 'react'
import { cars } from './data/cars'
import { products } from './data/products'
import { users } from './data/users'
import { Carro, Product, User } from './data/classes'
import { DynamicTable } from './components/DynamicTable'

export const App = () => {
  
  const carros = cars.map(car => new Carro(car)) as Carro[]
  const produtos = products.map(product => new Product(product)) as Product[]
  const usuarios = users.map(user => new User(user)) as User[]

  return (
    <>
      <DynamicTable renderContext={carros}/>
      <DynamicTable renderContext={produtos}/>
      <DynamicTable renderContext={usuarios}/>
    </>
  )
}