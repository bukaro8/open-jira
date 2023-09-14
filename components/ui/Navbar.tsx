import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { NextPage } from 'next';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from 'react';
import { UIContext } from '@/context/ui';

const Navbar: NextPage = () => {
	const { openSideMenu } = useContext(UIContext);
	return (
		<AppBar position='sticky' elevation={0}>
			<Toolbar>
				<IconButton size='large' edge='start' onClick={openSideMenu}>
					<MenuOutlinedIcon />
				</IconButton>
				<Typography variant='h6'>OpenJira</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
