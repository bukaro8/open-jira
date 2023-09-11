import { NextPage } from 'next';
import { UIContext, UIReducer } from '.';
import { ReactNode, useReducer } from 'react';

export interface UIState {
	sideMenuOpen: boolean;
	children: ReactNode;
}
const UI_INITIAL_STATE: UIState = {
	sideMenuOpen: false,
};

const UIProvider: NextPage<UIState> = ({ children }) => {
	const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);
	return (
		<UIContext.Provider value={{ sideMenuOpen: false }}>
			{children}
		</UIContext.Provider>
	);
};

export default UIProvider;
