import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { MainLayout } from '~/layouts/MainLayout';
import { Fragment } from 'react';
import { pushData } from './functions';

// fake datas
pushData();

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = MainLayout;

                    if (route.Layout) {
                        Layout = route.Layout;
                    } else if (route.Layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
