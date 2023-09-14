import { useContext } from 'react';
import { UIContext } from '@/context/ui';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {
	Box,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
const menuItems: string[] = ['Inbox', 'Started', 'Send Email', 'Drafts'];
const Sidebar = () => {
	const { sideMenuOpen, closeSideMenu } = useContext(UIContext);

	return (
		<Drawer anchor='left' open={sideMenuOpen} onClose={closeSideMenu}>
			<Box sx={{ width: '250px' }}>
				<Box sx={{ padding: '5px 10px' }}>
					<Typography variant='h4'>Menu</Typography>
				</Box>
				<List>
					{menuItems.map((el, index) => (
						<ListItem button key={el}>
							<ListItemIcon>
								{index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
							</ListItemIcon>
							<ListItemText primary={el} />
						</ListItem>
					))}
				</List>
			</Box>
			<Divider />
			<List>
				{menuItems.map((el, index) => (
					<ListItem button key={el}>
						<ListItemIcon>
							{index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
						</ListItemIcon>
						<ListItemText primary={el} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default Sidebar;
