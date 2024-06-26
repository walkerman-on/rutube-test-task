import { routeConfig } from './providers/router/routeConfig/appRouteConfig';
import { AppRouter } from './providers/router';
import { Header } from 'widgets/header';
import './styles/index.scss';

const App = () => {
  return (
    <div className="app container dark">
      <Header />
      {AppRouter(routeConfig)}
    </div>
  );
};

export default App;
