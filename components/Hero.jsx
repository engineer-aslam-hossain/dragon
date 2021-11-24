import Image from 'next/image';
import GrassFront from '../assets/grass front.png';
import Grass from '../assets/grass.png';
import Layer675 from '../assets/Layer 675.png';
import Base from '../assets/base.png';
import LogoBase from '../assets/logo base.png';
import BattleSaga from '../assets/battle saga.png';
import ElementSide1 from '../assets/element side 1.png';
import ElementSide2 from '../assets/element side 2.png';
import Orge from '../assets/ogre.png';
import Warrior2 from '../assets/warrior 2.png';
import Warrior1 from '../assets/warrior 1.png';
import Archer1 from '../assets/archer 1.png';
import Archer2 from '../assets/archer 2.png';
import Shadow from '../assets/shadow.png';
import Spartan from '../assets/spartan.png';
import DragonFront from '../assets/DRAGON_FRONT copy.png';
import DragonSide from '../assets/DRAGON_SIDE copy.png';
import ComingSoom from '../assets/COMING SOON.png';
import Copyright from '../assets/2021 © Battle Saga.png';

const Hero = () => {
	return (
		// this div is used for full screen
		<div className="relative min-h-screen overflow-y-hidden">
			{/* This div is used for the top navbar */}
			<div className="absolute top-0 left-0 h-screen w-full">
				<Image src={Layer675} objectFit="contain" />
			</div>
			<div className="w-full flex justify-center items-center relative">
				<Image src={Base} objectFit="contain" />
				<div className="absolute">
					<Image src={LogoBase} objectFit="contain" />
					<div className="absolute top-2 w-full flex justify-center items-center">
						<Image src={BattleSaga} objectFit="contain" />
					</div>
				</div>
			</div>

			{/* Used for the left side element */}
			<div className="absolute z-20 left-0 top-20 w-2/5">
				<Image src={ElementSide1} objectFit="contain" />
			</div>
			{/* 
			
			<div className="absolute w-52 left-80 top-20">
				<Image src={DragonFront} objectFit="contain" />
			</div>
			<div className="absolute w-80 right-72 translate-y-2 -translate-x-4 top-16">
				<Image src={DragonSide} objectFit="contain" />
			</div>
			
			*/}

			{/* This div is used for the characters */}
			<div className="w-full h-full left-1/2 -translate-x-1/2 relative mx-auto top-20 z-50">
				<div className="absolute left-56 -top-8 z-30 w-6/12">
					<Image src={Orge} objectFit="contain" />
				</div>
				<div className="absolute left-96 top-6 z-50 w-64">
					<Image src={Warrior2} objectFit="contain" />
				</div>
				<div className="absolute left-[544px] top-24 z-40 w-[99px]">
					<Image src={Archer1} objectFit="contain" className="" />
				</div>
				<div className="absolute left-[544px] top-6 z-50 w-72">
					<Image src={Warrior1} objectFit="contain" />
				</div>
				<div className="absolute right-96 -translate-x-16 top-32 z-40 w-56">
					<Image src={Spartan} objectFit="contain" className="" />
				</div>
				<div className="absolute right-80 top-24 z-30 w-48">
					<Image src={Archer2} objectFit="contain" className="" />
				</div>
				<div className="absolute top-80 left-80 w-[840px] z-30">
					<Image src={Shadow} objectFit="contain" className="" />
				</div>
			</div>

			{/* Used for the right side element */}
			<div className="absolute z-20 right-0 top-20 w-2/5">
				<Image src={ElementSide2} objectFit="contain" />
			</div>

			{/* Used for the bottom section like Coming soon and copyright logo */}
			<div className="absolute bottom-0 z-50 w-96 left-1/2 -translate-x-1/2">
				<Image src={ComingSoom} objectFit="contain" />
				<div className="w-full flex justify-center">
					<Image src={Copyright} objectFit="contain" />
				</div>
			</div>

			{/* Used for the bottom grass section */}
			<div className="absolute bottom-8 left-0">
				<Image src={Grass} objectFit="contain" />
			</div>
			<div className="absolute -bottom-3">
				<Image src={GrassFront} objectFit="contain" />
			</div>
		</div>
	);
};

export default Hero;
