import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../../frontend/src/pages/Dashboard/Dashboard';
import App from './Layout/App/App';
import Auth from './Layout/Auth/Auth';
import LogonPage from './pages/Logon/LogonPage';
import "./styles/global.css";
import NotFound from './pages/NotFound/NotFound';
import RecoveryPassPage from './pages/recoveryPass/RecoveryPassPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <App /> }>
                <Route index path="/" element={ <Dashboard /> } />
            </Route>
            <Route path='/auth/' element={ <Auth /> }>
                <Route path="login" element={ <LogonPage /> } />
                <Route path="recovery" element={ <RecoveryPassPage /> } />
            </Route>
            <Route path="*" element={ <NotFound /> } />
        </Routes>
    </BrowserRouter>
);