import { z } from 'zod'

export const formSchema = z
  .object({
    address: z.object({
      zipCode: z.string().min(9, 'Por favor, informe um CEP válido'),
      street: z.string().min(1, 'Por favor, informe uma rua'),
      number: z.string().min(1, 'Por favor, informe um número válido'),
      district: z.string().min(1, 'Por favor, informe um bairro'),
      complement: z.string(),
      city: z.string().min(1, 'Por favor, informe uma cidade'),
      state: z.string().min(1, 'Por favor, informe um estado'),
    }),
  })
  .transform((field) => ({
    address: {
      zipCode: field.address.zipCode,
      street: field.address.street,
      number: field.address.number,
      district: field.address.district,
      complement: field.address.complement,
      city: field.address.city,
      state: field.address.state,
    },
  }))
