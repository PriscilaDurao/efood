import sushiImg from "../assets/images/sushi.png";
import massaImg from "../assets/images/massa.png";
import pizzaImg from "../assets/images/pizza.png";

export type MenuItem = {
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
  preco: number;
  foto: string;
};

export type Restaurant = {
  id: number;
  title: string;
  tipo: string;
  rating: number;
  description: string;
  image: string;
  infos: string[];
  cardapio: MenuItem[];
};

export const restaurantsList: Restaurant[] = [
  {
    id: 1,
    title: "Hioki Sushi",
    tipo: "Japonesa",
    rating: 4.9,
    infos: ["Destaque da semana", "Japonesa"],
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    image: sushiImg,
      cardapio: [],
  },
  {
    id: 2,
    title: "La Dolce Vita Trattoria",
    tipo: "Italiana",
    rating: 4.6,
    infos: ["Italiana"],
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: massaImg,
    cardapio: [
      {
        id: 1,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 2,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 3,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 4,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 5,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 6,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
    ],
  },
  {
    id: 2,
    title: "La Dolce Vita Trattoria",
    tipo: "Italiana",
    rating: 4.6,
    infos: ["Italiana"],
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: massaImg,
    cardapio: [
      {
        id: 1,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 2,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 3,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 4,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 5,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 6,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
    ],
  },
  {
    id: 2,
    title: "La Dolce Vita Trattoria",
    tipo: "Italiana",
    rating: 4.6,
    infos: ["Italiana"],
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: massaImg,
    cardapio: [
      {
        id: 1,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 2,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 3,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 4,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 5,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 6,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
    ],
  },
  {
    id: 2,
    title: "La Dolce Vita Trattoria",
    tipo: "Italiana",
    rating: 4.6,
    infos: ["Italiana"],
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: massaImg,
    cardapio: [
      {
        id: 1,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 2,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 3,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 4,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 5,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 6,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
    ],
  },
  {
    id: 2,
    title: "La Dolce Vita Trattoria",
    tipo: "Italiana",
    rating: 4.6,
    infos: ["Italiana"],
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: massaImg,
    cardapio: [
      {
        id: 1,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 2,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 3,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 4,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 5,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
      {
        id: 6,
        nome: "Pizza Marguerita",
        descricao:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        porcao: "de 2 a 3 pessoas",
        preco: 68.9,
        foto: pizzaImg,
      },
    ],
  },
];
