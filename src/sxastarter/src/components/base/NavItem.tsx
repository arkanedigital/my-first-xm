import React from 'react';
import Link from 'next/link';

type NavItemProps = {
  href: string;
  value: string;
};

export default function NavItem(props: NavItemProps): JSX.Element {
  return (
    <Link href={props.href}>
      <a className="nav-item">{props.value}</a>
    </Link>
  );
}
