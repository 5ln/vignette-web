import { DetailedHTMLProps, HTMLAttributes } from 'react'

// simple container that defines the layout of the whole website.
const Layout: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ children, className, ...rest }) => (
  <section
    {...rest}
    className={`relative w-full overflow-x-hidden ${className}`}
  >
    {children}
  </section>
)

export default Layout
