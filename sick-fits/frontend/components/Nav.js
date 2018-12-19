import React from 'react';
import Link from 'next/link';

const Nav = (props) => {
  return (
    <div>
    <Link href="/">
      <a>Hey!</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    </div>
  )
}

export default Nav;
