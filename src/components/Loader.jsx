import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  console.log('Loader component executed');
  const { progress } = useProgress();
  return (
    <Html>
      <h2>HELOOO</h2>
      <span className='canvas-load'></span>
      <p
        style={{
          fontSize: 74,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%{' '}
      </p>
    </Html>
  );
};

export default CanvasLoader;
