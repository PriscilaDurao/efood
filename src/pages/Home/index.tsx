import React from "react";
import { Header } from "../../components/Header";
import { CardList } from "../../components/CardList";
import { Footer } from "../../components/Footer";

export const Home: React.FC = () => (
  <>
    <Header />
    <CardList />
    <Footer />
  </>
);
