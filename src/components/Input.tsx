import React from 'react';
import { cn } from 'src/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ className, children, ...props }) => {
	return (
		<label className={cn('text-base leading-none flex items-center gap-2', className)} {...props}>
			{children || 'label'}
		</label>
	);
};

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
	return (
		<input
			className={cn(
				'form-input border-2 border-zinc-950 p-1 pl-2 bg-gray-200 placeholder-gray-500 focus:outline-none ',
				className
			)}
			{...props}
		/>
	);
};

export const Checkbox: React.FC<InputProps> = ({ className, ...props }) => {
	return (
		<input
			type="checkbox"
			className={cn(
				'form-checkbox h-5 w-5 text-gray-500 border-2 border-zinc-950 p-1 pl-2 bg-gray-200 placeholder-gray-500 focus:outline-none',
				className
			)}
			{...props}
		/>
	);
};
