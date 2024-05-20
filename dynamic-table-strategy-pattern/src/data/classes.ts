interface Column  {
  name: string;
  label: string;
}

export interface TableRenderizable {
  getTableColumnsProperties(): Column[];
}

export class User implements TableRenderizable {

  name: string
  email: string
  age: number
  altura: number

  constructor(props: User) {
    this.name = props.name;
    this.age = props.age;
    this.altura = props.altura;
    this.email = props.email;
  }

  getTableColumnsProperties(): Column[] {
    return [
      { name: 'name', label: 'Nome' },
      { name: 'email', label: 'Email'},
      { name: 'age', label: 'Idade' },
      { name: 'altura', label: 'Altura' },
    ];
  }
}

export class Product implements TableRenderizable {

  name: string;
  price: number;
  qtd_estoque: number;

  constructor(props: Product) {
    this.name = props.name;
    this.price = props.price;
    this.qtd_estoque = props.qtd_estoque;
  }

  getTableColumnsProperties(): Column[] {
    return [
      { name: 'name', label: 'Nome' },
      { name: 'price', label: 'Preço' },
      { name: "qtd_estoque", label: "Qtd. em estoque"}
    ];
  }
}

export class Carro implements TableRenderizable {
  
  public marca: string
  public modelo: string
  public ano: number

  constructor(props: Carro) {
    this.marca = props.marca;
    this.modelo = props.modelo;
    this.ano = props.ano;
  }
  
  getTableColumnsProperties(): Column[] {
    return [
      { name: 'modelo', label: 'Modelo' },
      { name: 'marca', label: 'Marca' },
      { name: 'ano', label: 'Ano' },
    ];
  }
}
