import { FC, useMemo, useState } from 'react'
import { IThemeContext, LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/Theme'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({children}) => {
const [theme, setTheme] = useState<Theme>(defaultTheme)

const defaultProps: IThemeContext = useMemo(() => ({
	setTheme,
	theme
}), [theme])


	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}