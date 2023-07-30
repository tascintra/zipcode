interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="rounded-md bg-gradient-to-t from-primary-200 to-primary-100 px-4 py-2 font-semibold text-white shadow ring-2 ring-transparent saturate-150 transition hover:saturate-200 focus:ring-black">
      {children}
    </button>
  )
}
