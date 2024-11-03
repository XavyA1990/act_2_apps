/* eslint-disable react/prop-types */
import { LayoutContainer } from './Layout.style'

const Layout = ({children}) => {
  return (
    <LayoutContainer>
        {children}
    </LayoutContainer>
  )
}

export default Layout
