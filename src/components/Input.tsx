import { forwardRef } from 'react'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, className, label, ...props }: InputProps, ref) => {
    return (
      <div className="relative z-0">
        <input
          type={type}
          name={name}
          id={name}
          ref={ref}
          className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary-100 focus:outline-none focus:ring-0"
          placeholder=" "
          {...props}
        />
        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary-100">
          {label}
        </label>
      </div>
    )
  },
)
