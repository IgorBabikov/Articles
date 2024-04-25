import { Link, Route, Routes } from 'react-router-dom';
import { MainAsync } from './pages/mainPage/MainAsync';
import { AboutAsync } from './pages/aboutPage/AboutAsync';
import { Suspense } from 'react';
import { useTheme } from './hooks/useTheme';
import { classNames } from './helpers/classNames';
import './styles/index.scss';

export const App = () => {
	const {theme, toogleTheme} = useTheme()
	return (
		<div className={classNames('app', {hovered: false}, [theme])}>
			<button onClick={toogleTheme}>theme change</button>
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