import './App.css';
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Header from './components/Header';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './contexts/themeContext';

function App() {
	const { isDark, toggleTheme } = useTheme();
	const [currentTime, setCurrentTime] = useState(new Date());
	const [isLoaded, setIsLoaded] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		setTimeout(() => setIsLoaded(true), 100);

		return () => clearInterval(timer);
	}, []);

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

			<div
				className={`fixed inset-0 ${isDark ? 'opacity-100' : 'opacity-0'}`}
				style={{
					background: isDark
						? 'radial-gradient(circle at 30% 20%, rgba(6, 95, 70, 0.3) 0%, transparent 40%, transparent 100%)'
						: 'none',
				}}
			/>

			<div className="fixed inset-0 overflow-hidden pointer-events-none">
				{[...Array(6)].map((_, i) => (
					<div
						key={i}
						className={`absolute w-2 h-2 rounded-full ${
							isDark ? 'bg-emerald-400/20' : 'bg-emerald-600/20'
						} animate-float`}
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${i * 0.5}s`,
							animationDuration: `${3 + Math.random() * 2}s`,
						}}
					/>
				))}
			</div>

			<div className="relative z-10">
				<Header
					isDark={isDark}
					toggleTheme={toggleTheme}
					currentTime={currentTime}
				/>

				<main className="flex items-center justify-center min-h-[calc(100vh-120px)] px-6 lg:px-8">
					<div className="max-w-5xl mx-auto text-center">
						<div className="space-y-8">
							<div
								className={`opacity-0 ${
									isLoaded ? 'animate-fadeInUp' : ''
								}`}
								style={{ animationDelay: '0.2s' }}
							>
								<span
									className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${
										isDark
											? 'bg-emerald-900/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-900/30 hover:border-emerald-500/50'
											: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300'
									}`}
								>
									Software Engineer
								</span>
							</div>

							<div
								className={`opacity-0 ${
									isLoaded ? 'animate-fadeInUp' : ''
								}`}
								style={{ animationDelay: '0.4s' }}
							>
								<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8">
									Building reliable systems
									<br className="hidden sm:block" />
									<span className="block sm:inline"> with precision and purpose
									</span>
								</h1>
							</div>

							<div
								className={`opacity-0 ${
									isLoaded ? 'animate-fadeInUp' : ''
								}`}
								style={{ animationDelay: '0.6s' }}
							>
								<p
									className={`text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto ${
										isDark ? 'text-gray-300' : 'text-gray-600'
									}`}
								>
									I'm <span className="font-semibold">Andrew Laskin</span>, a
									junior software engineer focused on scalable code and shipping
									products that solve meaningful problems.
								</p>
							</div>

							<div
								className={`opacity-0 ${
									isLoaded ? 'animate-fadeInUp' : ''
								} flex flex-col sm:flex-row gap-4 justify-center items-center pt-8`}
								style={{ animationDelay: '0.8s' }}
							>
								<button
									onClick={() => navigate('/work')}
									className={`group cursor-pointer px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
										isDark
											? 'bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-emerald-500/25'
											: 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-600/25'
									}`}
								>
									<span className="flex items-center gap-2">
										View My Work
										<span className="group-hover:translate-x-1 transition-transform">
											→
										</span>
									</span>
								</button>

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

							<div
								className={`opacity-0 ${
									isLoaded ? 'animate-fadeInUp' : ''
								} flex justify-center gap-6 pt-8`}
								style={{ animationDelay: '1s' }}
							>
								{[
									{
										Icon: Github,
										href: 'https://github.com/ASLaskin',
										label: 'GitHub',
									},
									{
										Icon: Linkedin,
										href: 'https://www.linkedin.com/in/aslaskin/',
										label: 'LinkedIn',
									},
									{
										Icon: Mail,
										href: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=andrewlaskin6@gmail.com',
										label: 'Email',
									},
								].map(({ Icon, href, label }, index) => (
									<a
										key={label}
										href={href}
										className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
											isDark
												? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-emerald-400'
												: 'bg-white/50 text-gray-600 hover:bg-white/80 hover:text-emerald-600'
										}`}
										style={{ animationDelay: `${1.2 + index * 0.1}s` }}
									>
										<Icon size={20} />
									</a>
								))}
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

export default App;