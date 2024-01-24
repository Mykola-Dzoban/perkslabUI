import React from 'react';
import '../styles.css';

interface CardProps {}

const Badge: React.FC<CardProps> = () => {
	return <div className="bg-gray-100 p-4 rounded-md shadow-md w-12">Badge</div>;
};

export default Badge;
