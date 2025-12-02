import React, { useState, useEffect } from 'react';
import { Download, MapPin, Calendar, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import { useTheme } from '../contexts/themeContext';

function Experience() {
	const { isDark, toggleTheme } = useTheme();
	const [currentTime, setCurrentTime] = useState(new Date());
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		setTimeout(() => setIsLoaded(true), 100);

		return () => clearInterval(timer);
	}, []);

	const handleDownloadResume = () => {
		const link = document.createElement('a');
		link.href = '/Resume2025.pdf';
		link.download = 'Andrew_Laskin_Resume.pdf';
		link.click();
	};

	const experiences = [
		{
			title: 'Software Engineer',
			company: 'Roleo - Adjunct Faculty Matching Platform',
			period: 'June 2025 – Present',
			location: 'Gainesville, FL',
			highlights: [
				'Built and deployed a fullstack web application in a 3 person team using Next.js, React, and TypeScript, currently supporting 40+ active users',
				'Designed a vector embedding-based matching algorithm to solve user-job mismatch, increasing match relevancy and reducing manual filtering',
				'Migrated deployment from Vercel to AWS, setting up CI/CD pipelines with GitHub Actions and automating infrastructure with Terraform'
			]
		},
		{
			title: 'IT Intern',
			company: 'Purvis, Gray and Company',
			period: 'July 2025 – Present',
			location: 'Gainesville, FL',
			highlights: [
				'Automated laptop setup using Python, Playwright, and Chocolatey, reducing device setup time by 2 hours per laptop',
				'Documented the automation process for easy adoption across the IT team, improving onboarding efficiency and lowering error rates',
				'Maintained Windows Server and Active Directory environments, integrating Azure services and Atera RMM'
			]
		},
		{
			title: 'Teaching Assistant – Programming Fundamentals 1',
			company: 'University of Florida',
			period: 'Jan. 2023 – May 2023',
			location: 'Gainesville, FL',
			highlights: [
				'Led instructional sessions on Python programming concepts and algorithms to audiences, achieving 95% satisfaction rate',
				'Facilitated hands-on coding workshops for 30 students, providing technical support'
			]
		}
	];

	return (
		<div
			className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
				}`}
		>
			<div
				className={`fixed inset-0 ${isDark
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
								className={`opacity-0 ${isLoaded ? 'animate-fadeInUp' : ''
									}`}
								style={{ animationDelay: '0.2s' }}
							>
								<h1 className="text-4xl lg:text-5xl font-bold mb-6">
									Experience
								</h1>
								<p
									className={`text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'
										}`}
								>
									My professional journey building impactful software solutions and supporting teams through technology.
								</p>

								<button
									onClick={handleDownloadResume}
									className={`group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${isDark
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

						<div className="space-y-8">
							{experiences.map((experience, index) => (
								<div
									key={index}
									className={`opacity-0 ${isLoaded ? 'animate-fadeInUp' : ''}`}
									style={{ animationDelay: `${0.4 + index * 0.15}s` }}
								>
									<div
										className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${isDark
												? 'bg-gray-900/50 border-gray-700/50 hover:border-emerald-500/50'
												: 'bg-white/50 border-gray-200/50 hover:border-emerald-600/50'
											} backdrop-blur-sm`}
									>
										<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
											<div>
												<h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
													{experience.title}
												</h3>
												<p className={`text-lg font-semibold mb-2 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
													{experience.company}
												</p>
											</div>
											<div className="flex flex-col items-start md:items-end gap-2">
												<div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
													<Calendar size={16} />
													<span className="text-sm">{experience.period}</span>
												</div>
												<div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
													<MapPin size={16} />
													<span className="text-sm">{experience.location}</span>
												</div>
											</div>
										</div>

										<ul className="space-y-3">
											{experience.highlights.map((highlight, idx) => (
												<li
													key={idx}
													className={`flex gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
												>
													<ChevronRight
														size={20}
														className={`flex-shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}
													/>
													<span>{highlight}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>

						<div
							className={`opacity-0 ${isLoaded ? 'animate-fadeInUp' : ''
								} text-center mt-16`}
							style={{ animationDelay: '1s' }}
						>
							<div
								className={`inline-block p-8 rounded-2xl border ${isDark
										? 'bg-gray-900/50 border-gray-700/50'
										: 'bg-white/50 border-gray-200/50'
									} backdrop-blur-sm`}
							>
								<h3
									className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
										}`}
								>
									Interested in working together?
								</h3>
								<p
									className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'
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
									className={`px-8 cursor-pointer py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 ${isDark
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

				.animate-fadeInUp {
					animation: fadeInUp 0.8s ease-out forwards;
				}
			`}</style>
		</div>
	);
}

export default Experience;