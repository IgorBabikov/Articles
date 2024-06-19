
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { AppRouter, useTheme } from './providers';
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
		<AppRouter/>
  </div>
	)
}