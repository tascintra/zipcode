import { useCallback, useEffect, useState } from 'react'
import { AddressProps, FormProps } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { formSchema } from '@/schema'
import { zipCodeMask } from '@/utils/masks'

export const useCep = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: {
        zipCode: '',
        street: '',
        number: '',
        district: '',
        complement: '',
        city: '',
        state: '',
      },
    },
  })

  const zipCode = watch('address.zipCode')

  const formSubmit = (data: FormProps) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      console.table(data)
      setShowModal(true)
    }, 4000)
  }

  const handleSetData = useCallback(
    (data: AddressProps) => {
      setValue('address.city', data.localidade)
      setValue('address.street', data.logradouro)
      setValue('address.state', data.uf)
      setValue('address.district', data.bairro)
      setValue('address.complement', data.complemento)
    },
    [setValue],
  )

  const fetchAddress = useCallback(
    async (zipCode: string) => {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`,
      )

      handleSetData(data)
    },
    [handleSetData],
  )

  useEffect(() => {
    setValue('address.zipCode', zipCodeMask(zipCode))

    if (zipCode.length !== 9) return
    fetchAddress(zipCode)
  }, [fetchAddress, setValue, zipCode])

  return {
    errors,
    register,
    showModal,
    isLoading,
    formSubmit,
    handleSubmit,
  }
}
