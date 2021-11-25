import Image from 'next/image';
import Link from 'next/link';
import FacebookLogo from '../public/assets/fb.png';
import InstagramLogo from '../public/assets/ig.png';
import MediumLogo from '../public/assets/med.png';
import RedditLogo from '../public/assets/rdt.png';
import TelegramLogo from '../public/assets/tele.png';
import TwitterLogo from '../public/assets/tw.png';
import YoutubeLogo from '../public/assets/yt.png';
import DiscordLogo from '../public/assets/disc.png';

const Socials = () => {
	return (
		<>
			<Link href="https://www.instagram.com/battlesaga_/">
				<a target="_blank">
					<Image
						src={InstagramLogo}
						objectFit="contain"
						layout="fixed"
						width="52"
					/>
				</a>
			</Link>
			<Link href="https://www.facebook.com/Battle-Saga-106783131809509">
				<a target="_blank">
					<Image
						src={FacebookLogo}
						objectFit="contain"
						layout="fixed"
						width="52"
					/>
				</a>
			</Link>
			<Link href="https://link.medium.com/0yKRgNvCrlb">
				<a target="_blank">
					<Image
						src={MediumLogo}
						objectFit="contain"
						layout="fixed"
						width="52"
					/>
				</a>
			</Link>
			<Link href="https://discord.gg/2KNN6JXSWS">
				<a target="_blank">
					<Image
						src={DiscordLogo}
						objectFit="contain"
						layout="fixed"
						width="52"
					/>
				</a>
			</Link>
			<Link href="https://twitter.com/battle_saga?s=21">
				<a target="_blank">
					<Image
						src={TwitterLogo}
						objectFit="contain"
						layout="fixed"
						width="52"
					/>
				</a>
			</Link>
			<Link href="https://www.reddit.com/user/BattleSagaOfficial">
				<a target="_blank">
					<Image
						src={RedditLogo}
						objectFit="contain"
						layout="fixed"
						width="52"
					/>
				</a>
			</Link>
			{/* <Link href="#">
				<a target="_blank">
					<Image
						src={YoutubeLogo}
						objectFit="contain"
						layout="fixed"
						width="52"
					/>
				</a>
			</Link> */}
			<Link href="https://t.me/BattleSaga_Official">
				<a target="_blank">
					<Image
						src={TelegramLogo}
						objectFit="contain"
						layout="fixed"
						width="52"
					/>
				</a>
			</Link>
		</>
	);
};

export default Socials;
