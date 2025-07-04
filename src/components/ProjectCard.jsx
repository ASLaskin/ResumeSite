import React, { useState } from 'react';
import { Star, Calendar, Users, Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, isDark, isLoaded, delay }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${
				isDark
					? 'bg-gray-900/50 border-gray-700/50 hover:bg-gray-800/50 hover:border-emerald-500/30'
					: 'bg-white/50 border-gray-200/50 hover:bg-white/80 hover:border-emerald-300/50'
			} backdrop-blur-sm opacity-0 ${isLoaded ? 'animate-fadeInUp' : ''}`}
			style={{ animationDelay: delay }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
					isDark
						? 'bg-gradient-to-br from-emerald-900/20 via-transparent to-emerald-900/10'
						: 'bg-gradient-to-br from-emerald-100/40 via-transparent to-emerald-50/20'
				}`}
			/>

			<div className="relative p-6 lg:p-8">
				<div className="flex items-start justify-between mb-4">
					<div className="flex items-center gap-3">
						<div
							className={`p-2 rounded-lg ${
								isDark ? 'bg-emerald-900/30' : 'bg-emerald-100'
							}`}
						>
							<project.icon
								size={20}
								className={isDark ? 'text-emerald-400' : 'text-emerald-600'}
							/>
						</div>
						<div>
							<h3
								className={`text-xl font-semibold ${
									isDark ? 'text-white' : 'text-gray-900'
								}`}
							>
								{project.title}
							</h3>
							<p
								className={`text-sm ${
									isDark ? 'text-gray-400' : 'text-gray-600'
								}`}
							>
								{project.type}
							</p>
						</div>
					</div>

					<div className="flex items-center gap-2">
						{project.featured && (
							<div
								className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
									isDark
										? 'bg-emerald-900/30 text-emerald-400'
										: 'bg-emerald-100 text-emerald-700'
								}`}
							>
								<Star size={12} />
								Featured
							</div>
						)}
					</div>
				</div>

				<p
					className={`text-sm leading-relaxed mb-6 ${
						isDark ? 'text-gray-300' : 'text-gray-700'
					}`}
				>
					{project.description}
				</p>

				<div className="flex items-center gap-4 mb-6">
					<div className="flex items-center gap-1">
						<Calendar
							size={14}
							className={isDark ? 'text-gray-400' : 'text-gray-600'}
						/>
						<span
							className={`text-xs ${
								isDark ? 'text-gray-400' : 'text-gray-600'
							}`}
						>
							{project.date}
						</span>
					</div>
					{project.team && (
						<div className="flex items-center gap-1">
							<Users
								size={14}
								className={isDark ? 'text-gray-400' : 'text-gray-600'}
							/>
							<span
								className={`text-xs ${
									isDark ? 'text-gray-400' : 'text-gray-600'
								}`}
							>
								{project.team}
							</span>
						</div>
					)}
				</div>

				<div className="flex flex-wrap gap-2 mb-6">
					{project.tech.map((tech, index) => (
						<span
							key={index}
							className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
								isDark
									? 'bg-gray-800/50 text-gray-300 group-hover:bg-gray-700/50'
									: 'bg-gray-100/50 text-gray-700 group-hover:bg-gray-200/50'
							}`}
						>
							{tech}
						</span>
					))}
				</div>

				<div className="flex gap-3">
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
								isDark
									? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-emerald-400'
									: 'bg-gray-100/50 text-gray-700 hover:bg-gray-200/50 hover:text-emerald-600'
							}`}
						>
							<Github size={16} />
							Code
						</a>
					)}
					{project.demo && (
						<a
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
							className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
								isDark
									? 'bg-emerald-600/80 text-white hover:bg-emerald-500'
									: 'bg-emerald-600 text-white hover:bg-emerald-700'
							}`}
						>
							<ExternalLink size={16} />
							Live Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;