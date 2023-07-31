import { useCep } from '@/hooks/useCep'
import { Button, Input } from '@/components'

export default function App() {
  const { errors, register, formSubmit, handleSubmit } = useCep()

  return (
    <main className="mx-auto my-12 w-full max-w-md rounded-md p-4 xs:border xs:p-8 xs:shadow">
      <h2 className="text-center text-3xl font-semibold text-primary-200">
        Cep
      </h2>
      <div className="mt-1 h-1 w-full rounded-full bg-gradient-to-r from-secondary-100 to-primary-100 shadow" />
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="mt-8 flex w-full flex-col gap-6"
      >
        <Input
          {...register('address.zipCode')}
          type="text"
          label="CEP"
          maxLength={9}
          errorMessage={errors.address?.zipCode?.message}
        />

        <Input
          {...register('address.street')}
          type="text"
          label="Rua"
          errorMessage={errors.address?.street?.message}
        />

        <Input
          {...register('address.number')}
          type="text"
          label="Número"
          errorMessage={errors.address?.number?.message}
        />

        <Input
          {...register('address.district')}
          type="text"
          label="Bairro"
          errorMessage={errors.address?.district?.message}
        />

        <Input
          {...register('address.complement')}
          type="text"
          label="Complemento"
        />

        <Input
          {...register('address.city')}
          type="text"
          label="Cidade"
          errorMessage={errors.address?.city?.message}
        />

        <Input
          {...register('address.state')}
          type="text"
          label="Estado"
          errorMessage={errors.address?.state?.message}
        />

        <Button type="submit">Enviar</Button>
      </form>
    </main>
  )
}
