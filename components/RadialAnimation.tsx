const RadialAnimation = () => {
	return (
		<div className="w-[45rem] h-[45rem] relative">
			<div className="w-[44rem] absolute bottom-[1.6rem] right-[6.5rem] aspect-square rounded-full bg-radial-3" />
			<div className="w-[35rem] absolute bottom-0 left-[6.4rem] aspect-square rounded-full bg-radial-2" />
			<div className="w-[28rem] absolute right-0 top-[9.5rem] aspect-square rounded-full bg-radial-1" />
		</div>
	);
};

export { RadialAnimation };
