import React, {Component} from 'react';
import './App.css';
import Home from './components/Home'
import Popular from './components/Popular'
import Battle from './components/Battle'
import Results from './components/Results'
import Nav from './components/Nav'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/popular' component={Popular} />
                        <Route exact path='/battle' component={Battle} />
                        <Route path='/battle/results' component={Results} />
                        <Route render={() => { return <p>Not found</p>}} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;


{/*<Router>*/
}
{/*<div className='container'>*/
}
{/*<Nav />*/
}
{/*/!*<Switch>*!/*/
}
{/*/!*<Route exact path='/' component={Home} />*!/*/
}
{/*/!*<Route path='/popular' component={Popular} />*!/*/
}
{/*/!*<Route exact path='/battle' component={Battle} />*!/*/
}
{/*/!*<Route path='/battle/results' component={Results} />*!/*/
}
{/*/!*<Route render={function () {*!/*/
}
{/*/!*return <p>Not found</p>;*!/*/
}
{/*/!*}} />*!/*/
}
{/*/!*</Switch>*!/*/
}
{/*</div>*/
}
{/*</Router>*/
}