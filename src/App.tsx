import 'bootstrap/dist/css/bootstrap.min.css';

import { Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { Layout, Space, Spin } from 'antd';
import { Route, Routes } from 'react-router-dom';
import AuthRoutes from './components/AuthRoute';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Home from './components/Home';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Layout>
          <NavBar />
          <Layout.Content>
            <Suspense
              fallback={
                <Space size="large" align="center">
                  <Spin size="large" />
                </Space>
              }
            >
              <Routes>
                <Route element={<AuthRoutes />}>
                  <Route path="/" element={<Home />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout.Content>
          {/*    <Footer /> */}
        </Layout>
      </ErrorBoundary>
    </div>
  );
}

export default App;
