import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

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

// Esquema de Validação Yup
const checkoutSchema = Yup.object({
  // Entrega
  receiver: Yup.string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .required("O campo é obrigatório"),
  address: Yup.string()
    .min(5, "Endereço muito curto")
    .required("O campo é obrigatório"),
  city: Yup.string().required("O campo é obrigatório"),
  zipCode: Yup.string()
    .matches(/^\d{5}-\d{3}$/, "Formato inválido (00000-000)")
    .required("O campo é obrigatório"),
  number: Yup.string().required("O campo é obrigatório"),
  complement: Yup.string(),

  // Pagamento
  cardName: Yup.string()
    .min(3, "Nome do cartão inválido")
    .required("O campo é obrigatório"),
  cardNumber: Yup.string()
    .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Cartão inválido (16 dígitos)")
    .required("O campo é obrigatório"),
  cardCode: Yup.string()
    .matches(/^\d{3,4}$/, "CVV deve ter 3 ou 4 dígitos")
    .required("O campo é obrigatório"),
  expiresMonth: Yup.string()
    .matches(/^(0[1-9]|1[0-2])$/, "Mês inválido (01-12)")
    .required("O campo é obrigatório"),
  expiresYear: Yup.string()
    .matches(/^\d{2}$/, "Ano inválido (Ex: 26)")
    .required("O campo é obrigatório"),
});

export const Cart: React.FC = () => {
  const [step, setStep] = useState<Step>("cart");
  const [purchase, { isLoading, data }] = usePurchaseMutation();

  const { isOpen, items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  // Configuração única do Formik gerenciando todo o fluxo de formulário
  const form = useFormik({
    initialValues: {
      receiver: "",
      address: "",
      city: "",
      zipCode: "",
      number: "",
      complement: "",
      cardName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: checkoutSchema,
    onSubmit: async (values) => {
      try {
        const res = await purchase({
          products: items.map((item) => ({ id: item.id, price: item.preco })),
          delivery: {
            receiver: values.receiver,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.number),
              complement: values.complement,
            },
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear),
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
    },
  });

  if (!isOpen) return null;

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0);
  };

  const formattedTotal = getTotalPrice().toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleCloseAll = () => {
    dispatch(close());
    setStep("cart");
    form.resetForm();
  };

  // Função para verificar se o campo tem erro e já foi tocado
  const checkInputHasError = (fieldName: keyof typeof form.values) => {
    const isTouched = form.touched[fieldName];
    const isInvalid = form.errors[fieldName];
    return Boolean(isTouched && isInvalid);
  };

  // Funções para formatar e aplicar máscaras nos inputs
  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    }
    form.setFieldValue("zipCode", value.slice(0, 9));
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    form.setFieldValue("cardNumber", value.slice(0, 19));
  };

  const handleNumericChange = (
    fieldName: string,
    maxLength: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value.replace(/\D/g, "");
    form.setFieldValue(fieldName, value.slice(0, maxLength));
  };

  // Validação manual da etapa de Entrega antes de avançar para Pagamento
  const handleGoToPayment = async () => {
    form.setFieldTouched("receiver", true);
    form.setFieldTouched("address", true);
    form.setFieldTouched("city", true);
    form.setFieldTouched("zipCode", true);
    form.setFieldTouched("number", true);

    const errors = await form.validateForm();
    const hasDeliveryErrors =
      errors.receiver ||
      errors.address ||
      errors.city ||
      errors.zipCode ||
      errors.number;

    if (!hasDeliveryErrors) {
      setStep("payment");
    }
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
          <form onSubmit={(e) => e.preventDefault()}>
            <FormTitle>Entrega</FormTitle>

            <InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                id="receiver"
                name="receiver"
                type="text"
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {checkInputHasError("receiver") && (
                <small style={{ color: "#ff8282" }}>
                  {form.errors.receiver}
                </small>
              )}
            </InputGroup>

            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                name="address"
                type="text"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {checkInputHasError("address") && (
                <small style={{ color: "#ff8282" }}>
                  {form.errors.address}
                </small>
              )}
            </InputGroup>

            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                name="city"
                type="text"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {checkInputHasError("city") && (
                <small style={{ color: "#ff8282" }}>{form.errors.city}</small>
              )}
            </InputGroup>

            <Row>
              <InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  placeholder="00000-000"
                  value={form.values.zipCode}
                  onChange={handleZipCodeChange}
                  onBlur={form.handleBlur}
                />
                {checkInputHasError("zipCode") && (
                  <small style={{ color: "#ff8282" }}>
                    {form.errors.zipCode}
                  </small>
                )}
              </InputGroup>

              <InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  id="number"
                  name="number"
                  type="text"
                  value={form.values.number}
                  onChange={(e) => handleNumericChange("number", 10, e)}
                  onBlur={form.handleBlur}
                />
                {checkInputHasError("number") && (
                  <small style={{ color: "#ff8282" }}>
                    {form.errors.number}
                  </small>
                )}
              </InputGroup>
            </Row>

            <InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                id="complement"
                name="complement"
                type="text"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>

            <div style={{ marginTop: "24px" }}>
              <Button type="button" onClick={handleGoToPayment}>
                Continuar com o pagamento
              </Button>
              <Button type="button" onClick={() => setStep("cart")}>
                Voltar para o carrinho
              </Button>
            </div>
          </form>
        )}

        {/* ETAPA 3: PAGAMENTO */}
        {step === "payment" && (
          <form onSubmit={form.handleSubmit}>
            <FormTitle>Pagamento - Valor a pagar {formattedTotal}</FormTitle>

            <InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                id="cardName"
                name="cardName"
                type="text"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {checkInputHasError("cardName") && (
                <small style={{ color: "#ff8282" }}>
                  {form.errors.cardName}
                </small>
              )}
            </InputGroup>

            <Row>
              <InputGroup maxWidth="228px">
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  value={form.values.cardNumber}
                  onChange={handleCardNumberChange}
                  onBlur={form.handleBlur}
                />
                {checkInputHasError("cardNumber") && (
                  <small style={{ color: "#ff8282" }}>
                    {form.errors.cardNumber}
                  </small>
                )}
              </InputGroup>

              <InputGroup>
                <label htmlFor="cardCode">CVV</label>
                <input
                  id="cardCode"
                  name="cardCode"
                  type="text"
                  placeholder="123"
                  value={form.values.cardCode}
                  onChange={(e) => handleNumericChange("cardCode", 4, e)}
                  onBlur={form.handleBlur}
                />
                {checkInputHasError("cardCode") && (
                  <small style={{ color: "#ff8282" }}>
                    {form.errors.cardCode}
                  </small>
                )}
              </InputGroup>
            </Row>

            <Row>
              <InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  id="expiresMonth"
                  name="expiresMonth"
                  type="text"
                  placeholder="MM"
                  value={form.values.expiresMonth}
                  onChange={(e) => handleNumericChange("expiresMonth", 2, e)}
                  onBlur={form.handleBlur}
                />
                {checkInputHasError("expiresMonth") && (
                  <small style={{ color: "#ff8282" }}>
                    {form.errors.expiresMonth}
                  </small>
                )}
              </InputGroup>

              <InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  id="expiresYear"
                  name="expiresYear"
                  type="text"
                  placeholder="AA"
                  value={form.values.expiresYear}
                  onChange={(e) => handleNumericChange("expiresYear", 2, e)}
                  onBlur={form.handleBlur}
                />
                {checkInputHasError("expiresYear") && (
                  <small style={{ color: "#ff8282" }}>
                    {form.errors.expiresYear}
                  </small>
                )}
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
