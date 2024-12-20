import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeC from './component/homeC';
import Home from './container/home';
import Marketplace from './container/marketplace';
const AppRouter = () => {
    return (
        <BrowserRouter basename={'/'} >
            <Routes>
                <Route exact path={`/`} element={<Home />} />
                <Route exact path={`/marketplace`} element={<Marketplace />} />
                <Route exact path={`/home`} element={<HomeC />} />
                <Route exact path='*' element={() => <div>Page not found</div>} />
            </Routes>
        </BrowserRouter>

    );
}

export default AppRouter;

