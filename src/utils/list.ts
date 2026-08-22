import sushiImg from "../assets/images/sushi.png";
import massaImg from "../assets/images/massa.png";

export type Restaurant = {
  id: number;
  title: string;
  rating: number;
  description: string;
  image: string;
  infos: string[];
};

export const restaurantsList: Restaurant[] = [
  {
    id: 1,
    title: "Hioki Sushi",
    rating: 4.9,
    infos: ["Destaque da semana", "Japonesa"],
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    image: sushiImg,
  },
  {
    id: 2,
    title: "Taverna",
    rating: 4.7,
    infos: ["Italiana"],
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: massaImg,
  },
    {
    id: 2,
    title: "Taverna",
    rating: 4.7,
    infos: ["Italiana"],
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: massaImg,
  },
    {
    id: 2,
    title: "Taverna",
    rating: 4.7,
    infos: ["Italiana"],
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: massaImg,
  },
    {
    id: 2,
    title: "Taverna",
    rating: 4.7,
    infos: ["Italiana"],
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: massaImg,
  },
    {
    id: 2,
    title: "Taverna",
    rating: 4.7,
    infos: ["Italiana"],
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: massaImg,
  },
];
