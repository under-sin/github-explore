import { render } from 'react-dom'
import { App} from './App' // não é necessario passar a extensão pq já estamos passando isso no webpack

render(<App />,  document.getElementById('root'))