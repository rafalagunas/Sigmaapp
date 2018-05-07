import Main from './index';
import {StackNavigator} from 'react-navigation';
import Calificar from './calificar';
const App = StackNavigator({
    Home: { screen: Main },
    Rate: { screen: Calificar}
  });


export default App;