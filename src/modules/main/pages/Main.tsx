import MainSpecificComponent from '@/modules/main/components/MainSpecificComponent';
import TestComponent from '@/shared/components/TestComponent';

const Main = () => {
  return (
    <div>
      <MainSpecificComponent />
      <TestComponent param1="Welcome!" param2={5}/>
      Main page
    </div>
  );
};

export default Main;
