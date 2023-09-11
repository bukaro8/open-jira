import { createContext } from 'react';

interface ContextProps {
	side: boolean;
}

export const UIContext = createContext({} as ContextProps);
