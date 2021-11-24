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
		<div className="relative min-h-screen overflow-y-hidden overflow-x-hidden">
			{/* This div is used for the top navbar */}
			<div className="absolute top-0 left-0 h-full w-screen">
				<Image src={Layer675} objectFit="contain" layout="responsive" />
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
			<div className="absolute z-20 left-0 bottom-10 sm:bottom-12 md:bottom-20 lg:bottom-28 xl:bottom-32 w-60 sm:w-72 md:w-80 lg:w-96 xl:w-auto">
				<Image
					src={ElementSide1}
					objectFit="contain"
					alt="Element side 2"
					width={600}
					// layout="responsive"
				/>
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
			<div className="w-full  h-1/2 left-1/2 -translate-x-1/2 absolute bottom-20 sm:bottom-28 md:bottom-32 lg:bottom-40 xl:bottom-52 2xl:bottom-64 z-50">
				<div className="relative h-full w-full">
					<div className="flex absolute bottom-0 lg:-bottom-10 xl:-bottom-32 2xl:-bottom-44 justify-center translate-x-10 sm:translate-x-16 md:translate-x-24 xl:translate-x-32 2xl:translate-x-1/4 w-[400px] sm:w-[450px] md:w-[500px] lg:w-[600px] xl:w-[800px] 2xl:w-[900px]">
						<Image src={Orge} objectFit="contain" />
					</div>

					<div className="absolute z-40 hidden md:flex justify-center w-full -translate-x-10 sm:-translate-x-16 md:-translate-x-48 lg:-translate-x-52 xl:-translate-x-64 bottom-2 sm:-bottom-4 md:-bottom-8 lg:-bottom-28 xl:-bottom-40 2xl:-bottom-40">
						<span className="w-40 sm:w-52 md:w-60 lg:w-72 xl:w-96 2xl:w-auto">
							<Image src={Warrior2} objectFit="contain" />
						</span>
					</div>
					<div className="absolute hidden md:flex justify-center w-full md:-bottom-12 lg:-bottom-36 xl:-bottom-44 2xl:-bottom-48 md:-translate-x-28 lg:-translate-x-28 xl:-translate-x-5 2xl:-translate-x-2 z-40">
						<span className="w-40 sm:w-52 md:w-24 lg:w-28 xl:w-72 2xl:w-96">
							<Image src={Archer1} objectFit="contain" />
						</span>
					</div>
					<div className="absolute hidden md:flex justify-center w-full md:-bottom-10 lg:-bottom-36 xl:-bottom-44 2xl:-bottom-48 md:-translate-x-6 xl:-translate-x-1 2xl:-translate-x-1 z-40">
						<span className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-96">
							<Image src={Warrior1} objectFit="contain" />
						</span>
					</div>
					<div className="absolute hidden md:flex justify-center w-full md:-bottom-10 lg:-bottom-32 xl:-bottom-44 2xl:-bottom-48 md:translate-x-20 lg:translate-x-32 xl:translate-x-40 2xl:translate-x-48 z-30">
						<span className="w-40 sm:w-52 md:w-60 lg:w-72 xl:w-96">
							<Image src={Spartan} objectFit="contain" />
						</span>
					</div>
					<div className="absolute hidden md:flex justify-center w-full md:-bottom-10 lg:-bottom-36 xl:-bottom-44 2xl:-bottom-48 md:translate-x-60 lg:translate-x-72 xl:translate-x-[400px] 2xl:translate-x-[450px] z-20">
						<div className="w-40 sm:w-52 md:w-48 lg:w-60 xl:w-96">
							<Image src={Archer2} objectFit="contain" />
						</div>
					</div>
					<div className="absolute flex justify-center w-full -bottom-6 md:-bottom-20 lg:-bottom-40 xl:-bottom-52 2xl:-bottom-64 z-30">
						<Image src={Shadow} objectFit="contain" />
					</div>
				</div>
			</div>

			{/* Used for the right side element */}
			<div className="absolute z-20 right-0 bottom-10 sm:bottom-12 md:bottom-20 lg:bottom-28 xl:bottom-32 w-60 sm:w-72 md:w-80 lg:w-96 xl:w-auto">
				<Image
					src={ElementSide2}
					objectFit="contain"
					alt="Element side 2"
					width={600}
				/>
			</div>

			{/* Used for the bottom section like Coming soon and copyright logo */}
			<div className="absolute bottom-10 z-50 w-auto left-1/2 -translate-x-1/2">
				<Image src={ComingSoom} objectFit="contain" />
				<div className="w-full scale-125 flex justify-center">
					<Image src={Copyright} objectFit="contain" />
				</div>
			</div>

			{/* Used for the bottom grass section */}
			<div className="absolute bottom-8 left-0 w-screen">
				<Image src={Grass} objectFit="contain" layout="responsive" />
			</div>
			<div className="absolute -bottom-3 w-screen">
				<Image
					src={GrassFront}
					objectFit="contain"
					layout="responsive"
				/>
			</div>
		</div>
	);
};

export default Hero;
