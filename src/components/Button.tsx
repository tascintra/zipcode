import { Spin } from '@/assets/svg'
import clsx from 'clsx'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode
  loading?: boolean
}

export const Button = ({ children, loading }: ButtonProps) => {
  return (
    <div className="relative">
      <button
        className={clsx(
          'w-full rounded-md bg-gradient-to-t from-primary-200 to-primary-100 px-4 py-2 font-semibold text-white shadow ring-2 ring-transparent transition focus:ring-gray-500',
          { 'saturate-150 hover:saturate-200': !loading },
          { 'cursor-wait grayscale': loading },
        )}
      >
        {children}
      </button>
      {loading && (
        <div className="absolute -right-7 top-0 -translate-x-1/2 -translate-y-1/2">
          <Spin />
        </div>
      )}
    </div>
  )
}
