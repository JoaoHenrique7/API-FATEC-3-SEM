import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import App from './Layout/App/App';
import Auth from './Layout/Auth/Auth';
import LogonPage from './pages/Logon/LogonPage';
import "./styles/global.css";

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
            </Route>
        </Routes>
    </BrowserRouter>
);