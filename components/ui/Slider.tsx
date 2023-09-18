"use client";
import Scroller from "react-slick";
import type { Settings, CustomArrowProps } from "react-slick";
import { ReactNode, useRef } from "react";
import { Button } from "./Button";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";

interface SliderProps {
	children: ReactNode;
	header: string;
}

const Slider = ({ children, header }: SliderProps) => {
	const prevArrow = useRef<HTMLButtonElement>(null);
	const nextArrow = useRef<HTMLButtonElement>(null);

	const PrevArrow = ({ onClick }: CustomArrowProps) => {
		return <button ref={prevArrow} onClick={onClick} />;
	};
	const NextArrow = ({ onClick }: CustomArrowProps) => {
		return <button ref={nextArrow} onClick={onClick} />;
	};

	const settings: Settings = {
		// arrows: false,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const handlePrev = () => prevArrow.current?.click();
	const handleNext = () => nextArrow.current?.click();

	return (
		<>
			<div className="flex justify-between items-center">
				<h3>{header}</h3>
				<div className="space-x-4">
					<Button variant="secondary" onClick={handlePrev}>
						<CaretLeftIcon className="w-6 h-6" />
					</Button>
					<Button variant="secondary" onClick={handleNext}>
						<CaretRightIcon className="w-6 h-6" />
					</Button>
				</div>
			</div>
			<Scroller {...settings}>{children}</Scroller>
		</>
	);
};

export { Slider };
