import { ReactElement } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import cl from './Loader.module.scss';

const Loader = (): ReactElement => {
  return (
    <div className={cl.loader}>
      <RotatingLines
        strokeColor="#353535"
        strokeWidth="4"
        animationDuration="0.75"
        width="70"
        visible={true}
      />
    </div>
  );
};

export default Loader;
