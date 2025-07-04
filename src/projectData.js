import { Hand, Database, Code } from 'lucide-react';

export const projects = [
	{
		title: 'ASL Letter Detector',
		type: 'AI Recognition Tool',
		description:
			'A real-time sign language recognition tool that enables users to type using American Sign Language. Utilizes a rule-based AI system to interpret hand gestures into alphabetic characters directly in the browser via a frontend interface using user webcam',
		tech: ['React', 'MediaPipe', 'TailwindCSS', 'JavaScript'],
		date: '2025',
		team: 'Solo Project',
		icon: Hand,
		github: 'https://github.com/ASLaskin/ASLTyping',
		demo: 'https://asl-typing.vercel.app/',
		featured: true,
	},
	{
		title: 'Note Nectar',
		type: 'Full Stack WebApp',
		description:
			'Tired of digging through 54-slide PowerPoints or dense lecture PDFs? Note Nectar turns your study materials into clean, structured notes in seconds. Just upload a PDF, PPTX, or DOCX file and get instant summaries in a Google Docs-style web editor built to save students hours of note-taking',
		tech: ['React', 'TypeScript', 'MongoDB', 'NextJS', 'GoogleAuth'],
		date: '2025',
		team: 'Solo Project',
		icon: Database,
		github: 'https://github.com/ASLaskin/NoteSummarizer',
		demo: "https://note-nectar.vercel.app",
		featured: true,
	},
	{
		title: 'NetUF',
		type: 'Educational Platform',
		description:
			'Built during a university hackathon, NetUF is an AI-powered academic messaging platform that cuts classroom communication clutter. Trained directly on a course’s syllabus, the AI answers repetitive questions like deadlines, grading policies, and lecture topics so TAs and professors can spend less time replying to emails. Smarter routing ensures only meaningful reach faculty inboxes.',
		tech: ['Vite JS', 'MongoDB', 'Node', 'Python Flask', 'Socket IO', 'BERT Model'],
		date: '2024',
		team: 'Team of 3',
		icon: Code,
		github: 'https://github.com/ASLaskin/NetUF',
		demo: null,
		featured: false,
	},
];