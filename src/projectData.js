import { Globe, Database, Code } from 'lucide-react';

export const projects = [
	{
		title: 'EcoTracker',
		type: 'Full-Stack Web Application',
		description:
			'A comprehensive carbon footprint tracking application that helps users monitor their environmental impact. Features real-time data visualization, goal setting, and community challenges to promote sustainable living.',
		tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Chart.js'],
		date: '2024',
		team: 'Solo Project',
		icon: Globe,
		github: true,
		demo: true,
		featured: true,
	},
	{
		title: 'TaskFlow API',
		type: 'Backend System',
		description:
			'A robust RESTful API for project management with advanced features like real-time notifications, role-based access control, and automated task scheduling. Built with scalability and performance in mind.',
		tech: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
		date: '2024',
		team: 'Team of 3',
		icon: Database,
		github: true,
		demo: false,
		featured: false,
	},
	{
		title: 'CodeMentor',
		type: 'Educational Platform',
		description:
			'An interactive coding tutorial platform with AI-powered code review and personalized learning paths. Includes a built-in IDE and progress tracking system for students and instructors.',
		tech: ['React', 'TypeScript', 'Firebase', 'Monaco Editor', 'OpenAI API'],
		date: '2023',
		team: 'Solo Project',
		icon: Code,
		github: true,
		demo: true,
		featured: true,
	},
];
