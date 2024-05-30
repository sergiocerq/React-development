import React from "react";
import { cars } from "./data/cars";
import { products } from "./data/products";
import { users } from "./data/users";
import { Carro, Product, User } from "./data/classes";
import { DynamicTable } from "./components/DynamicTable";
import "./index.css";

export const App = () => {
  const carros = cars.map((car) => new Carro(car)) as Carro[];
  const produtos = products.map((product) => new Product(product)) as Product[];
  const usuarios = users.map((user) => new User(user)) as User[];

  return (
    <>
      <h1 className="title">Tabelas Dinâmicas</h1>
      <div className="main-div-tables">
        <DynamicTable
          renderContext={produtos}
        />
        <DynamicTable renderContext={carros} />
        <DynamicTable renderContext={usuarios} />
      </div>
    </>
  );
};
