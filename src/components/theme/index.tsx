import React, { ReactNode } from 'react';
import Header from '../Header';
import * as C from './styles';
import {SidebarItem} from '../SidebarItem'

type Props = {
  children: ReactNode;
}

const Theme = ({children}: Props) => {
  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <SidebarItem 
              title="Pessoal"
              description = "Se identifique"
              icon = "profile"
              path = "/"
            />
            <SidebarItem 
              title="Profissional"
              description = "Seu nível"
              icon = "book"
              path = "/form2"
            />
            <SidebarItem 
              title="Contatos"
              description = "Como te achar"
              icon = "email"
              path = "/form3"
            />
          </C.Sidebar>
          <C.Page>
            {children}
          </C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
}

export default Theme;