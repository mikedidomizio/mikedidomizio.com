import { ReactNode } from 'react'

export const Pill = ({ children }: { children: ReactNode }) => {
  return (
    <span className="btn-primary px-4 py-1 font-sans text-sm font-semibold no-underline focus:outline-none">
      {children}
    </span>
  )
}
