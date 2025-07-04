import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import WorkPortfolio from './pages/Work.jsx';
import { ThemeProvider } from './contexts/themeContext.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/work" element={<WorkPortfolio />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
);
