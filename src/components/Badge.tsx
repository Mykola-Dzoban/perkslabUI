import React from 'react';
import { cn } from '../utils';
import './styles.css';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	variant: 'none' | 'standard' | 'primary' | 'neutral' | 'destructive';
}

const Badge: React.FC<BadgeProps> = ({ className, children, variant, ...props }) => {
	const types: { [key: string]: string } = {
		none: 'bg-white border-2 px-2 w-fit border-zinc-950',
		standard: 'bg-white border-2 w-fit px-2 border-zinc-950 hover:font-medium hover:bg-gray-200',
		primary: 'bg-green-200 border-2 w-fit px-2 border-zinc-950 hover:font-medium hover:bg-green-300',
		neutral: 'bg-neutral-600 text-gray-50 border-2 w-fit px-2 border-zinc-950 hover:font-medium hover:bg-neutral-700',
		destructive: 'bg-red-400 border-2 w-fit px-2 border-zinc-950 hover:font-medium hover:bg-red-500',
	};

	return (
		<div
			className={cn('rounded-md transition-all duration-300', types[types.hasOwnProperty(variant) ? variant : 'none'], className)}
			{...props}>
			{children || 'badge'}
		</div>
	);
};

export default Badge;
