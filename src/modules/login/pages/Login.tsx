import TestComponent from '@/shared/components/TestComponent';
import useUserStore from '@/store/login/store';
import LoginSpecificComponent from '@/modules/login/components/LoginSpecificComponent';

const Login = () => {
  const { coins } = useUserStore();
  return (
    <div>
      Login page
      <TestComponent param1="Hello world!" param2={coins}/>
      <LoginSpecificComponent />
    </div>
  );
};

export default Login;
