import { Layout } from '@/components/layouts';
import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { Inter } from 'next/font/google';

const HomePage: NextPage = () => {
	return (
		<Layout>
			<Typography variant='h1'>Hola mundo</Typography>
		</Layout>
	);
};
export default HomePage;
