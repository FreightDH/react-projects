import { CSSProperties, ReactElement } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const styles: CSSProperties = {
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const LoaderCircle = (): ReactElement => {
  return (
    <div style={styles}>
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

export default LoaderCircle;
