import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import {
  Overlay,
  CartContainer,
  CartItem,
  TotalContainer,
  CheckoutButton,
} from "./styles";

export const Cart: React.FC = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.preco;
    }, 0);
  };

  const formattedTotal = getTotalPrice().toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <Overlay onClick={() => dispatch(close())} />
      <CartContainer>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>
                      {item.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => dispatch(remove(item.id))}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 4H14M5 4V2C5 1.44772 5.44772 1 6 1H10C10.5523 1 11 1.44772 11 2V4M12.5 4V13.5C12.5 14.0523 12.0523 14.5 11.5 14.5H4.5C3.94772 14.5 3.5 14.0523 3.5 13.5V4"
                        stroke="#E66767"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </CartItem>
              ))}
            </ul>
            <TotalContainer>
              <span>Valor total</span>
              <span>{formattedTotal}</span>
            </TotalContainer>
            <CheckoutButton type="button">
              Continuar com a entrega
            </CheckoutButton>
          </>
        ) : (
          <p style={{ color: "#FFEBD9", textAlign: "center" }}>
            O carrinho está vazio.
          </p>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;
