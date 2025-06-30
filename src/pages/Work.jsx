import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../projectData';

function WorkPortfolio() {
	const [isDark, setIsDark] = useState(true);
	const [currentTime, setCurrentTime] = useState(new Date());
	const [isLoaded, setIsLoaded] = useState(false);
	const [showMain, setShowMain] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		setTimeout(() => setIsLoaded(true), 100);

		return () => clearInterval(timer);
	}, []);

	const toggleTheme = () => {
		setIsDark(!isDark);
	};

	const handleDownloadResume = () => {
		//ADD THIS
		console.log('Downloading resume...');
	};

	if (showMain) {
		return (
			<div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-bold mb-4">Back to Main Portfolio</h1>
					<p className="text-gray-400 mb-8">
						This would navigate back to your main landing page
					</p>
					<button
						onClick={() => setShowMain(false)}
						className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors"
					>
						Return to Work Page
					</button>
				</div>
			</div>
		);
	}

	return (
		<div
			className={`min-h-screen transition-all duration-500 ${
				isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
			}`}
		>
			<div
				className={`fixed inset-0 ${
					isDark
						? 'bg-gradient-radial from-emerald-900/40 via-emerald-950/20 to-gray-950'
						: 'bg-gradient-radial from-emerald-100/40 via-gray-50 to-gray-50'
				}`}
				style={{
					background: isDark
						? 'radial-gradient(ellipse at center, rgba(6, 78, 59, 0.4) 0%, rgba(6, 78, 59, 0.2) 30%, rgb(3, 7, 18) 70%)'
						: 'radial-gradient(ellipse at center, rgba(209, 250, 229, 0.4) 0%, rgb(249, 250, 251) 50%, rgb(249, 250, 251) 100%)',
				}}
			/>

			<div className="relative z-10">
				<Header
					isDark={isDark}
					toggleTheme={toggleTheme}
					currentTime={currentTime}
				/>

				<main className="px-6 lg:px-8 pb-12">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-12">
							<div
								className={`animate-fadeInUp ${
									isLoaded ? 'opacity-100' : 'opacity-0'
								}`}
								style={{ animationDelay: '0.2s' }}
							>
								<h1 className="text-4xl lg:text-5xl font-bold mb-6">
									My{' '}
									<span
										className={`animate-glow ${
											isDark ? 'text-emerald-400' : 'text-emerald-600'
										}`}
									>
										Work
									</span>
								</h1>
								<p
									className={`text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-8 ${
										isDark ? 'text-gray-300' : 'text-gray-600'
									}`}
								>
									A collection of projects that showcase my passion for building
									scalable, user-focused applications with modern technologies.
								</p>

								<button
									onClick={handleDownloadResume}
									className={`group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
										isDark
											? 'bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-emerald-500/25'
											: 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-600/25'
									}`}
								>
									<Download size={20} />
									Download Resume
									<span className="group-hover:translate-x-1 transition-transform">
										→
									</span>
								</button>
							</div>
						</div>

						<div className="grid gap-8 md:grid-cols-2">
							{projects.map((project, index) => (
								<ProjectCard
									key={index}
									project={project}
									isDark={isDark}
									delay={`${0.4 + index * 0.1}s`}
								/>
							))}
						</div>

						<div
							className={`text-center mt-16 animate-fadeInUp ${
								isLoaded ? 'opacity-100' : 'opacity-0'
							}`}
							style={{ animationDelay: '1s' }}
						>
							<div
								className={`inline-block p-8 rounded-2xl border ${
									isDark
										? 'bg-gray-900/50 border-gray-700/50'
										: 'bg-white/50 border-gray-200/50'
								} backdrop-blur-sm`}
							>
								<h3
									className={`text-2xl font-bold mb-4 ${
										isDark ? 'text-white' : 'text-gray-900'
									}`}
								>
									Interested in working together?
								</h3>
								<p
									className={`mb-6 ${
										isDark ? 'text-gray-300' : 'text-gray-600'
									}`}
								>
									I'm always open to discussing new opportunities and
									interesting projects.
								</p>
								<button
									onClick={() =>
										window.open(
											'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=andrewlaskin6@gmail.com',
											'_blank'
										)
									}
									className={`px-8 cursor-pointer py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 ${
										isDark
											? 'border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500'
											: 'border-emerald-600/50 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-600'
									}`}
								>
									Get In Touch
								</button>
							</div>
						</div>
					</div>
				</main>
			</div>

			<style jsx>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes fadeInLeft {
					from {
						opacity: 0;
						transform: translateX(-30px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}

				@keyframes fadeInRight {
					from {
						opacity: 0;
						transform: translateX(30px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}

				@keyframes glow {
					0%,
					100% {
						text-shadow: 0 0 20px currentColor;
					}
					50% {
						text-shadow: 0 0 30px currentColor, 0 0 40px currentColor;
					}
				}

				@keyframes float {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					33% {
						transform: translateY(-20px) rotate(120deg);
					}
					66% {
						transform: translateY(10px) rotate(240deg);
					}
				}

				.animate-fadeInUp {
					animation: fadeInUp 0.8s ease-out forwards;
				}

				.animate-fadeInLeft {
					animation: fadeInLeft 0.6s ease-out forwards;
				}

				.animate-fadeInRight {
					animation: fadeInRight 0.6s ease-out forwards;
				}

				.animate-glow {
					animation: glow 3s ease-in-out infinite;
				}

				.animate-float {
					animation: float 4s ease-in-out infinite;
				}
			`}</style>
		</div>
	);
}

export default WorkPortfolio;
