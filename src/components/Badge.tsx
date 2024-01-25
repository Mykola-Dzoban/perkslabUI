import React, { ReactNode } from 'react';
import './styles.css';


interface BadgeProps {
	type: string;
	className?: string;
	children?: ReactNode;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Badge: React.FC<BadgeProps> = ({ className, children, onClick, type }) => {
	const types: { [key: string]: string } = {
		none: 'bg-white border-2 px-2 w-fit border-zinc-950',
		standard: 'bg-white border-2 w-fit px-2 border-zinc-950 hover:font-medium hover:bg-gray-200',
		primary: 'bg-green-200 border-2 w-fit px-2 border-zinc-950 hover:font-medium hover:bg-green-300',
		neutral: 'bg-neutral-600 text-gray-50 border-2 w-fit px-2 border-zinc-950 hover:font-medium hover:bg-neutral-700',
		destructive: 'bg-red-400 border-2 w-fit px-2 border-zinc-950 hover:font-medium hover:bg-red-500',
	};

	const badgeClasses = `${types[type]} ${className ?? ''}`;

	return (
		<div className={badgeClasses} onClick={onClick}>
			{children || 'badge'}
		</div>
	);
};
export default Badge;
