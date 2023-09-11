import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { NextPage } from 'next';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar: NextPage = () => {
	return (
		<AppBar position='sticky' elevation={0}>
			<Toolbar>
				<IconButton size='large' edge='start'>
					<MenuOutlinedIcon />
				</IconButton>
				<Typography variant='h6'>OpenJira</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
