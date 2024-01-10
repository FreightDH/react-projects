import { CSSProperties, ReactElement } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const LoaderDots = (): ReactElement => {
  return (
    <div style={styles}>
      <ThreeDots height="60" width="60" radius="9" color="#adb5bd" visible={true} />
    </div>
  );
};

export default LoaderDots;
