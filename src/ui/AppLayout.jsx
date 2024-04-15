import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Form from './FormTrigger.jsx'

const AppContainer = styled.div`
    min-height: 100dvh;
    /* display: grid;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    minmax(6rem, 1fr) [full-end];
  grid-template-rows: 100dvh;
  grid-auto-rows: max-content; */
`

function AppLayout() {
    return (
        <AppContainer>
            <Header></Header>
            <Outlet></Outlet>
        </AppContainer>
    )
}

export default AppLayout
