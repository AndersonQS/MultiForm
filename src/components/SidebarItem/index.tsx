import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as  ProfileIcon} from '../../svgs/profile.svg'

import * as C  from './styles';

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
}
export const SidebarItem = ({title, description, icon,path}: Props) => {
  return (
    <C.Container>
      <Link to = {path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea>
          <ProfileIcon fill = "white" width = {24} height = {24}/>
        </C.IconArea>
        <C.Point></C.Point>
      </Link>
    </C.Container>
  );
}
