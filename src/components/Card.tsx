import React from 'react';
import { cn } from '../utils';
import './styles.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardTitleProps extends React.HTMLAttributes<HTMLSpanElement> {}
interface CardDescriptionProps extends React.HTMLAttributes<HTMLSpanElement> {}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardImageContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardImageProps extends React.HTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
	return (
		<div className={cn('bg-cyan-100 border-2 border-zinc-950 p-4 flex flex-col gap-3', className)} {...props}>
			{children}
		</div>
	);
};

export const CardHeader: React.FC<CardHeaderProps> = ({ className, children, ...props }) => {
	return (
		<div className={cn('flex flex-col gap-3', className)} {...props}>
			{children}
		</div>
	);
};

export const CardTitle: React.FC<CardTitleProps> = ({ className, children, ...props }) => {
	return (
		<span className={cn('font-bold text-2xl leading-none', className)} {...props}>
			{children}
		</span>
	);
};

export const CardDescription: React.FC<CardDescriptionProps> = ({ className, children, ...props }) => {
	return (
		<span className={cn(' text-base leading-none', className)} {...props}>
			{children}
		</span>
	);
};

export const CardContent: React.FC<CardContentProps> = ({ className, children, ...props }) => {
	return (
		<div className={cn('flex', className)} {...props}>
			{children}
		</div>
	);
};

export const CardFooter: React.FC<CardFooterProps> = ({ className, children, ...props }) => {
	return (
		<div className={cn('flex gap-3 items-center', className)} {...props}>
			{children}
		</div>
	);
};

export const CardImageContainer: React.FC<CardImageContainerProps> = ({ className, children, ...props }) => {
	return (
		<div className={cn('w-full h-full', className)} {...props}>
			{children}
		</div>
	);
};

export const CardImage: React.FC<CardImageProps> = ({ className, children, src, alt, ...props }) => {
	return (
		<img src={src} alt={alt} className={cn('w-full h-full', className)} {...props}>
			{children}
		</img>
	);
};
