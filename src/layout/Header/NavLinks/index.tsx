import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useAuth } from '@/context/AuthContext';
import Spinner from '@/components/Spinner';

const initialNavItems = [
  {
    to: '/',
    content: 'Home',
    end: true,
  },
  {
    to: 'products',
    content: 'Products',
  },
  {
    to: 'signin',
    content: 'Sign in',
  },
  {
    to: 'sell',
    content: 'Sell',
  },
  {
    to: 'register',
    content: 'Register',
  },
];

const NavLinks = ({ $isOpen }) => {
  //@ts-ignore
  const { authenticated, authLoading } = useAuth();
  const [links, setLinks] = useState(initialNavItems);

  useEffect(() => {
    console.log(authenticated)
    if (authenticated) {
      // Create a new array with the updated link
      const updatedLinks = links.map((link) =>
        link.to === 'signin' ? { ...link, to: 'signout', content: 'Sign out' } : link
      );

      // Update the state with the new array
      setLinks(updatedLinks);
      const newlinks = updatedLinks.filter((link) => link.to !== 'register');

    // Update the state with the new array
    setLinks(newlinks);
    }
  }, [authenticated]);

  return (
    <>
      {!authLoading ? (
        <S.NavList $isOpenMenu={$isOpen}>
          {links.map((item, index) => (
            <S.NavItem key={index} to={item.to} end={item.end}>
              {item.content}
            </S.NavItem>
          ))}
          {$isOpen && (
            <S.NavItem to="wishlist">
              Wishlist
            </S.NavItem>
          )}
        </S.NavList>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default NavLinks;