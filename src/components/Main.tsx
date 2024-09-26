import {StatsTable} from '@/components/StatsTable';

const Main = () => {
  return (
    <div>
      <StatsTable variant="defence" />
      <StatsTable variant="attack" />
    </div>
  );
}

export default Main;