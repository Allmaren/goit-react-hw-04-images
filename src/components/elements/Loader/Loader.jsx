import { MutatingDots } from 'react-loader-spinner';
import { WraperLoader } from './Loader.styled.js';

const Loader = () => {
  return (
    <WraperLoader>
      <MutatingDots
        height="100"
        width="100"
        color="#FBF016"
        secondaryColor="#0579FF"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </WraperLoader>
  );
};

export default Loader;
