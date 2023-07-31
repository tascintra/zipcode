import { z } from 'zod'
import { formSchema } from '@/schema'

export type FormProps = z.infer<typeof formSchema>

export type AddressProps = {
  bairro: string
  complemento: string
  localidade: string
  uf: string
  logradouro: string
}
