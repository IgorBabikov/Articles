import { Link, Route, Routes } from 'react-router-dom';
import { MainAsync } from './pages/mainPage/MainAsync';
import { AboutAsync } from './pages/aboutPage/AboutAsync';
import './index.scss';
import { Suspense } from 'react';


export const App = () => {
	return (
		<div className="app">
			<div>
				<Link to={'/'}>Главная</Link>
				<Link to={'/about'}>О сайте</Link>
			</div>
		  <Suspense fallback={<div>Loading...</div>}>
			 <Routes>
				  <Route path={'/about'} element={<AboutAsync />} />
				  <Route path={'/'} element={<MainAsync />} />
			 </Routes>
		 </Suspense>
  </div>
	)
}