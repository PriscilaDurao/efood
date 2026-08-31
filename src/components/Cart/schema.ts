// src/components/Cart/schema.ts
import * as Yup from "yup";

export const checkoutSchema = Yup.object().shape({
  receiver: Yup.string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .required("O nome é obrigatório"),

  address: Yup.string()
    .min(5, "Endereço muito curto")
    .required("O endereço é obrigatório"),

  city: Yup.string()
    .min(3, "A cidade deve ter pelo menos 3 caracteres")
    .matches(
      /^[a-zA-A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
      "A cidade deve conter apenas letras",
    )
    .required("O campo é obrigatório"),

  zipCode: Yup.string()
    .matches(/^\d{5}-\d{3}$/, "CEP inválido. Use o formato: 00000-000")
    .required("O CEP é obrigatório"),

  number: Yup.string().required("O número é obrigatório"),

  cardName: Yup.string()
    .min(3, "Nome no cartão inválido")
    .required("O nome no cartão é obrigatório"),

  cardNumber: Yup.string()
    .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "O cartão deve conter 16 dígitos")
    .required("O número do cartão é obrigatório"),

  cardCode: Yup.string()
    .matches(/^\d{3,4}$/, "CVV inválido")
    .required("O CVV é obrigatório"),

  expiresMonth: Yup.string()
    .matches(/^(0[1-9]|1[0-2])$/, "Mês inválido (01 a 12)")
    .required("Mês é obrigatório"),

  expiresYear: Yup.string()
    .matches(/^\d{2}$/, "Ano inválido (Ex: 26)")
    .required("Ano é obrigatório"),
});
