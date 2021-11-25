import Head from 'next/head';
import Hero from '../components/Hero';
import Socials from '../components/Socials';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Battle Saga</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			{/* <Socials className="absolute h-full top-0" /> */}
		</div>
	);
}
