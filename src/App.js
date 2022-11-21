
import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';

function App() {
    let isSignIn = false;
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.layout? (route.layout !== DefaultLayout?route.layout:DefaultLayout):(Fragment);  
                        return <Route key={index} path={route.path} element={<Layout isSignIn={isSignIn}><Page /></Layout>} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
