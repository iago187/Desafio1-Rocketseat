import { StatusBar, TouchableWithoutFeedback }from 'react-native';
import { Home } from './src/screens/home';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)

export default function App() {
  return (
    <>
    <StatusBar 
    barStyle="light-content"
    backgroundColor="transparent"
    translucent
    />
    <Home/>
    </>
  );
}

