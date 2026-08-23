import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { close, remove, clear } from "../../store/reducers/cart";
import { usePurchaseMutation } from "../../services/api";
import {
  Overlay,
  CartContainer,
  CartItem,
  TotalContainer,
  Button,
  FormTitle,
  InputGroup,
  Row,
  ConfirmationContainer,
} from "./styles";

type Step = "cart" | "delivery" | "payment" | "confirmation";

export const Cart: React.FC = () => {
  const [step, setStep] = useState<Step>("cart");
  const [purchase, { isLoading, data }] = usePurchaseMutation();

  const { isOpen, items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  // Form Delivery State
  const [receiver, setReceiver] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");

  // Form Payment State
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCode, setCardCode] = useState("");
  const [expiresMonth, setExpiresMonth] = useState("");
  const [expiresYear, setExpiresYear] = useState("");

  if (!isOpen) return null;

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0);
  };

  const formattedTotal = getTotalPrice().toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleFinishPurchase = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await purchase({
        products: items.map((item) => ({ id: item.id, price: item.preco })),
        delivery: {
          receiver,
          address: {
            description: address,
            city,
            zipCode,
            number: Number(number),
            complement,
          },
        },
        payment: {
          card: {
            name: cardName,
            number: cardNumber,
            code: Number(cardCode),
            expires: {
              month: Number(expiresMonth),
              year: Number(expiresYear),
            },
          },
        },
      }).unwrap();

      if (res.orderId) {
        dispatch(clear());
        setStep("confirmation");
      }
    } catch {
      alert("Ocorreu um erro ao processar o pagamento. Verifique os dados.");
    }
  };

  const handleCloseAll = () => {
    dispatch(close());
    setStep("cart");
  };

  return (
    <>
      <Overlay onClick={handleCloseAll} />
      <CartContainer>
        {/* ETAPA 1: CARRINHO */}
        {step === "cart" && (
          <>
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
                        ✕
                      </button>
                    </CartItem>
                  ))}
                </ul>
                <TotalContainer>
                  <span>Valor total</span>
                  <span>{formattedTotal}</span>
                </TotalContainer>
                <Button type="button" onClick={() => setStep("delivery")}>
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <p style={{ color: "#FFEBD9", textAlign: "center" }}>
                O carrinho está vazio.
              </p>
            )}
          </>
        )}

        {/* ETAPA 2: ENTREGA */}
        {step === "delivery" && (
          <form onSubmit={() => setStep("payment")}>
            <FormTitle>Entrega</FormTitle>
            <InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                id="receiver"
                type="text"
                required
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </InputGroup>
            <Row>
              <InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <input
                  id="zipCode"
                  type="text"
                  required
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  id="number"
                  type="text"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </InputGroup>
            </Row>
            <InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                id="complement"
                type="text"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
            </InputGroup>

            <div style={{ marginTop: "24px" }}>
              <Button type="submit">Continuar com o pagamento</Button>
              <Button type="button" onClick={() => setStep("cart")}>
                Voltar para o carrinho
              </Button>
            </div>
          </form>
        )}

        {/* ETAPA 3: PAGAMENTO */}
        {step === "payment" && (
          <form onSubmit={handleFinishPurchase}>
            <FormTitle>Pagamento - Valor a pagar {formattedTotal}</FormTitle>
            <InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                id="cardName"
                type="text"
                required
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </InputGroup>
            <Row>
              <InputGroup maxWidth="228px">
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  id="cardNumber"
                  type="text"
                  required
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cardCode">CVV</label>
                <input
                  id="cardCode"
                  type="text"
                  required
                  value={cardCode}
                  onChange={(e) => setCardCode(e.target.value)}
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  id="expiresMonth"
                  type="text"
                  required
                  value={expiresMonth}
                  onChange={(e) => setExpiresMonth(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  id="expiresYear"
                  type="text"
                  required
                  value={expiresYear}
                  onChange={(e) => setExpiresYear(e.target.value)}
                />
              </InputGroup>
            </Row>

            <div style={{ marginTop: "24px" }}>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Finalizando..." : "Finalizar pagamento"}
              </Button>
              <Button type="button" onClick={() => setStep("delivery")}>
                Voltar para a edição de endereço
              </Button>
            </div>
          </form>
        )}

        {/* ETAPA 4: CONFIRMAÇÃO DO PEDIDO */}
        {step === "confirmation" && data && (
          <ConfirmationContainer>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button type="button" onClick={handleCloseAll}>
              Concluir
            </Button>
          </ConfirmationContainer>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;
