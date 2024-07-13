import React from 'react';
import { cn } from '../utils';
import './styles.css';

interface BadgeProps extends React.HTMLAttributes<HTMLButtonElement> {
	variant?:
		| 'none'
		| 'standard'
		| 'neutral'
		| 'ghost'
		| 'primary'
		| 'primary-outline'
		| 'secondary'
		| 'secondary-outline'
		| 'accent'
		| 'accent-outline'
		| 'info'
		| 'info-outline'
		| 'warning'
		| 'warning-outline'
		| 'success'
		| 'success-outline'
		| 'error'
		| 'error-outline';
}

const Button: React.FC<BadgeProps> = ({ className, children, variant, ...props }) => {
	const variants: { [key: string]: string } = {
		none: 'bg-white border-2 px-8 py-2 w-fit border-zinc-950',
		standard: 'border-2 w-fit px-8 py-2 border-zinc-950 hover:font-medium bg-gray-200 hover:bg-gray-400',
		neutral: 'bg-neutral-600 text-gray-50 border-2 w-fit px-8 py-2 border-zinc-950 hover:font-medium hover:bg-neutral-700',
		ghost: 'bg-transparent w-fit px-8 py-2 border-zinc-950 hover:font-medium hover:bg-gray-300',
		//
		primary: 'bg-teal-200 border-2 w-fit px-8 py-2 border-zinc-950 hover:font-medium hover:bg-teal-300',
		'primary-outline': 'border-2 border-teal-200 w-fit px-8 py-2 hover:font-medium hover:bg-gray-100',
		//
		secondary: 'bg-purple-100 border-2 w-fit px-8 py-2 border-zinc-950 hover:font-medium hover:bg-purple-200',
		'secondary-outline': 'border-2 border-purple-200 w-fit px-8 py-2 hover:font-medium hover:bg-gray-100',
		//
		accent: 'bg-orange-200 border-2 w-fit px-8 py-2 border-zinc-950 hover:font-medium hover:bg-orange-300',
		'accent-outline': 'border-2 border-orange-200 w-fit px-8 py-2 hover:font-medium hover:bg-gray-100',
		//
		info: 'bg-blue-200 border-2 w-fit px-8 py-2 border-zinc-950 hover:font-medium hover:bg-blue-300',
		'info-outline': 'bg-transparent border-2 w-fit px-8 py-2 border-blue-300 hover:font-medium hover:bg-gray-100',
		//
		warning: 'bg-yellow-200 border-2 w-fit px-8 py-2 border-zinc-950 hover:font-medium hover:bg-yellow-300',
		'warning-outline': 'bg-transparent border-2 w-fit px-8 py-2 border-yellow-300 hover:font-medium hover:bg-gray-100',
		//
		success: 'bg-lime-300 border-2 w-fit px-8 py-2 border-zinc-950 hover:font-medium hover:bg-green-600',
		'success-outline': 'bg-transparent border-2 w-fit px-8 py-2 border-green-600 hover:font-medium hover:bg-gray-100',
		//
		error: 'bg-red-400 border-2 w-fit px-8 py-2 border-zinc-950 hover:font-medium hover:bg-red-500',
		'error-outline': 'bg-transparent border-2 w-fit px-8 py-2 border-red-500 hover:font-medium hover:bg-gray-100',
	};
	return (
		<button
			className={cn(
				'rounded-sm transition-all duration-300',
				variants[variant ? (variants.hasOwnProperty(variant) ? variant : 'none') : 'none'],
				className
			)}
			{...props}>
			{children || 'button'}
		</button>
	);
};

export default Button;
