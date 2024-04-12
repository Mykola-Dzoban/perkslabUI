import React from 'react';
import { cn } from 'src/utils';

interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {}

interface SheetTriggerProps extends React.HTMLAttributes<HTMLDivElement> {}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
	position?: 'left' | 'right';
}

interface SheetContextProps {
	expanded: boolean;
	toggleExpanded: () => void;
	sheetContentRef?: React.RefObject<HTMLDivElement>;
}

const SheetContext = React.createContext<SheetContextProps | undefined>(undefined);

export const Sheet: React.FC<SheetProps> = ({ className, children, ...props }) => {
	const [expanded, setExpanded] = React.useState(false);
	return (
		<div className={cn('', className)} {...props}>
			<SheetContext.Provider
				value={{
					expanded,
					toggleExpanded: () => {
						setExpanded((prev) => !prev);
					},
				}}>
				{children}
			</SheetContext.Provider>
		</div>
	);
};

export const SheetTrigger: React.FC<SheetTriggerProps> = ({ className, children, ...props }) => {
	const { toggleExpanded } = React.useContext(SheetContext) || {};

	return (
		<div className={cn('w-fit flex items-center justify-between cursor-pointer', className)} onClick={toggleExpanded} {...props}>
			{children}
		</div>
	);
};

export const SheetCloseButton: React.FC<SheetTriggerProps> = ({ className, children, ...props }) => {
	const { toggleExpanded, expanded } = React.useContext(SheetContext) || {};

	return (
		<div
			className={cn(
				'w-fit flex items-center justify-between cursor-pointer',
				expanded ? `visible opacity-100 w-fit` : ' invisible opacity-0 w-0',
				className
			)}
			onClick={toggleExpanded}
			{...props}>
			{children}
		</div>
	);
};

export const SheetActionButton: React.FC<SheetTriggerProps> = ({ className, children, onClick, ...props }) => {
	const { toggleExpanded, expanded } = React.useContext(SheetContext) || {};

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (onClick) {
			onClick(event);
		}
		if (toggleExpanded) {
			toggleExpanded();
		}
	};

	return (
		<div
			className={cn(
				'w-fit flex items-center justify-between cursor-pointer',
				expanded ? `visible opacity-100 w-fit` : ' invisible opacity-0 w-0',
				className
			)}
			onClick={handleClick}
			{...props}>
			{children}
		</div>
	);
};

export const SheetContent: React.FC<SheetContentProps> = ({ className, children, position, ...props }) => {
	const { expanded } = React.useContext(SheetContext) || {};

	return (
		<div
			className={cn(
				`absolute top-0 animate-in fade-in-0 transition-all duration-300 z-[9999] border bg-slate-50 border-zinc-950`,
				expanded ? `visible opacity-100 w-80 h-screen` : ' invisible opacity-0 mt-0 w-0 h-0',
				position === 'right' ? 'right-0' : 'left-0',
				className
			)}
			{...props}>
			{expanded ? children : null}
		</div>
	);
};
