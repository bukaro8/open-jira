import { NextPage } from 'next';
import { UIContext, UIReducer } from './';
import { ReactNode, useReducer } from 'react';

export interface UIState {
	sideMenuOpen: boolean;
	children?: ReactNode;
}
const UI_INITIAL_STATE: UIState = {
	sideMenuOpen: false,
};

const UIProvider: NextPage<UIState> = ({ children }) => {
	const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);
	const openSideMenu = () => {
		dispatch({ type: 'UI - Open Sidebar' });
	};
	const closeSideMenu = () => {
		dispatch({ type: 'UI - Close Sidebar' });
	};

	return (
		<UIContext.Provider
			value={{
				...state,
				//?methods
				openSideMenu,
				closeSideMenu,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};

export default UIProvider;
