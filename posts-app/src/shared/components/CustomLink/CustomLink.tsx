import { FC, ReactElement, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';
import cl from './CustomLink.module.scss';

interface CustomLinkProps {
  children: ReactNode;
  to: string;
}

const CustomLink: FC<CustomLinkProps> = ({ children, to }): ReactElement => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  const linkClasses = [cl.link];
  if (match) linkClasses.push(cl.active);

  return (
    <li>
      <Link to={to} className={linkClasses.join(' ')}>
        <span>{children}</span>
      </Link>
    </li>
  );
};

export default CustomLink;
