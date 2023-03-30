/** @jsxImportSource @emotion/react */
import React from 'react';
import { Navigation } from 'react-minimal-side-navigation/lib';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { BsCardChecklist } from 'react-icons/bs';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const MainAside = () => {
    const navigate = useNavigate();

    return (
        <aside css={S.style}>
            <Navigation
            activeItemId="/"
            onSelect={({ itemId }) => {
                navigate(itemId);
            }}
            items={[
              {
                title: 'Home',
                itemId : '/home'
              },
              {
                title: 'TodoList',
                itemId: '/todo',
                elemBefore: () => <BsCardChecklist />
              }
            
            ]}
          />
        </aside>
        
    );
};

export default MainAside;