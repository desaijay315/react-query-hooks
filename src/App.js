import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'
import { HomePage } from './components/Home.page'
import { CountriesPage } from './components/CountriesCapital.page'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/countries'>Countries - Capital</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/countries'>
              <CountriesPage />
            </Route>    
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App
