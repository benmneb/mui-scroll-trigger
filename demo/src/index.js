import * as React from 'react';

import { render } from 'react-dom';

import TypeIt from 'typeit-react';

import ScrollTrigger from '../../src';

import {
	styled,
	AppBar,
	Box,
	Button,
	CssBaseline,
	Drawer,
	FormControlLabel,
	IconButton,
	MenuItem,
	Select,
	Stack,
	Switch,
	TextField,
	Tooltip,
	Typography,
	Toolbar,
	useMediaQuery,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createSvgIcon } from '@mui/material/utils';

import '@fontsource/fira-code';

const theme = createTheme({
	typography: {
		fontFamily: ['Fira Code', 'monospace'].join(','),
	},
	palette: {
		primary: { main: '#2979ff' },
	},
});

const NpmIcon = createSvgIcon(
	<path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />,
	'NpmIcon'
);

const GitHubIcon = createSvgIcon(
	<path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />,
	'GitHubIcon'
);

const CodeIcon = createSvgIcon(
	<path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />,
	'CodeIcon'
);

const CodeOffIcon = createSvgIcon(
	<path d="m19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17 19.17 12zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81 1.39 4.22z" />,
	'CodeOffIcon'
);

const Line = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	'& .MuiTextField-root': {
		margin: '0 8px',
	},
});

const Output = styled('article')({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
	overflow: 'hidden',
});

const DRAWER_WIDTH = 325;
const DEFAULT_IMAGE = 674;

const SHOW_LOADING = false;
const ERROR_ICON = true;
const HEIGHT = '100%';
const WIDTH = '100%';
const SHIFT = false;
const DISTANCE = '100px';
const SHIFT_DURATION = null;
const DURATION = 3000;
const EASING = 'cubic-bezier(0.7, 0, 0.6, 1)';
const FIT = 'cover';
const BG_COLOR = 'inherit';

export default function Demo() {
	const [currentPhoto, setCurrentPhoto] = React.useState(DEFAULT_IMAGE);
	const [showPhoto, setShowPhoto] = React.useState(true);

	const [showLoading, setShowLoading] = React.useState(SHOW_LOADING);
	const [errorIcon, setErrorIcon] = React.useState(ERROR_ICON);
	const [height, setHeight] = React.useState(HEIGHT);
	const [width, setWidth] = React.useState(WIDTH);
	const [shift, setShift] = React.useState(SHIFT);
	const [distance, setDistance] = React.useState(DISTANCE);
	const [shiftDuration, setShiftDuration] = React.useState(SHIFT_DURATION);
	const [duration, setDuration] = React.useState(DURATION);
	const [easing, setEasing] = React.useState(EASING);
	const [fit, setFit] = React.useState(FIT);
	const [bgColor, setBgColor] = React.useState(BG_COLOR);

	function getNewPhoto() {
		if (mobileOpen) setMobileOpen(false);
		const newPhoto = Math.floor(Math.random() * 1051);
		setShowPhoto(false);
		setCurrentPhoto(newPhoto);
		setTimeout(() => {
			setShowPhoto(true);
		}, 100);
	}

	function refreshPhoto() {
		if (mobileOpen) setMobileOpen(false);
		setShowPhoto(false);
		setTimeout(() => {
			setShowPhoto(true);
		}, 100);
	}

	function resetDefaults() {
		setShowLoading(SHOW_LOADING);
		setErrorIcon(ERROR_ICON);
		setHeight(HEIGHT);
		setWidth(WIDTH);
		setShift(SHIFT);
		setDistance(DISTANCE);
		setShiftDuration(SHIFT_DURATION);
		setDuration(DURATION);
		setEasing(EASING);
		setFit(FIT);
		setBgColor(BG_COLOR);
	}

	const [mobileOpen, setMobileOpen] = React.useState(false);

	const mobile = useMediaQuery('@media (max-width: 900px)');

	function handleDrawerToggle() {
		setMobileOpen(!mobileOpen);
	}

	return (
		<Box sx={{ display: 'flex', height: '100vh' }}>
			<CssBaseline />
			<AppBar
				elevation={0}
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { md: 'none' } }}
					>
						{mobileOpen ? <CodeOffIcon /> : <CodeIcon />}
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', md: 'inline-block' } }}
					>
						<TypeIt
							getBeforeInit={(instance) => {
								instance
									.pause(3500)
									.type('npm install mui-scroll-trigger')
									.pause(1500)
									.delete()
									.type("import ScrollTrigger from 'mui-scroll-trigger'");

								return instance;
							}}
							options={{ speed: 120, cursor: false }}
						/>
					</Typography>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'inline-block', md: 'none' } }}
					>
						mui-scroll-trigger
					</Typography>
					<Box display="flex">
						<IconButton
							onClick={() =>
								window.open('https://npmjs.com/package/mui-scroll-trigger')
							}
							color="inherit"
						>
							<NpmIcon fontSize="large" color="inherit" />
						</IconButton>
						<IconButton
							onClick={() =>
								window.open('https://github.com/benmneb/mui-scroll-trigger')
							}
							color="inherit"
						>
							<GitHubIcon fontSize="large" color="inherit" />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer
				variant={mobile ? 'temporary' : 'permanent'}
				open={mobile ? mobileOpen : true}
				onClose={handleDrawerToggle}
				ModalProps={{ keepMounted: true }}
				sx={{
					width: DRAWER_WIDTH,
					maxWidth: '100vw',
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: DRAWER_WIDTH,
						maxWidth: '100vw',
						boxSizing: 'border-box',
					},
				}}
			>
				<Toolbar />
				<Stack
					spacing={2}
					component="section"
					padding={2}
					sx={{ minWidth: '100%' }}
				>
					<Box component="div" variant="h6">
						{'<ScrollTrigger'}
					</Box>
					<Stack spacing={1} sx={{ pl: 2 }}>
						<Line component="div">
							src="https://picsum.photos/id/{currentPhoto}/2000"
						</Line>
						<Tooltip title="Any valid CSS `height` property" placement="right">
							<Line component="div">
								height="
								<TextField
									variant="standard"
									value={height}
									onChange={(e) => setHeight(e.target.value)}
								/>
								"
							</Line>
						</Tooltip>
						<Tooltip title="Any valid CSS `width` property" placement="right">
							<Line component="div">
								width="
								<TextField
									variant="standard"
									value={width}
									onChange={(e) => setWidth(e.target.value)}
								/>
								"
							</Line>
						</Tooltip>
						<Tooltip
							title="Any valid CSS `object-fit` property"
							placement="right"
						>
							<Line component="div">
								fit=
								<Select
									variant="standard"
									value={fit}
									onChange={(e) => setFit(e.target.value)}
									sx={{ minWidth: 100 }}
								>
									<MenuItem value="fill">"fill"</MenuItem>
									<MenuItem value="contain">"contain"</MenuItem>
									<MenuItem value="cover">"cover"</MenuItem>
									<MenuItem value="none">"none"</MenuItem>
									<MenuItem value="scale-down">"scale-down"</MenuItem>
								</Select>
							</Line>
						</Tooltip>
						<Tooltip title="Number of milliseconds" placement="right">
							<Line component="div">
								duration={'{'}
								<TextField
									variant="standard"
									value={duration}
									onChange={(e) => setDuration(e.target.value)}
								/>
								{'}'}
							</Line>
						</Tooltip>
						<Tooltip
							title="Any valid CSS `transition-timing-function` property"
							placement="right"
						>
							<Line component="div">
								easing=
								<Select
									variant="standard"
									value={easing}
									onChange={(e) => setEasing(e.target.value)}
									sx={{ minWidth: 100 }}
								>
									<MenuItem value="cubic-bezier(0.7, 0, 0.6, 1)">
										"cubic-bezier(0.7, 0, 0.6, 1)"
									</MenuItem>
									<MenuItem value="ease">"ease"</MenuItem>
									<MenuItem value="ease-in">"ease-in"</MenuItem>
									<MenuItem value="ease-out">"ease-out"</MenuItem>
									<MenuItem value="ease-in-out">"ease-in-out"</MenuItem>
									<MenuItem value="linear">"linear"</MenuItem>
								</Select>
							</Line>
						</Tooltip>
						<Tooltip
							title="Once installed you can add a custom loading indicator"
							placement="right"
						>
							<Line component="div">
								showLoading=
								<FormControlLabel
									sx={{ ml: 0 }}
									control={
										<Switch
											checked={showLoading}
											onChange={(e) => setShowLoading(e.target.checked)}
										/>
									}
									label={`{ ${showLoading} }`}
									labelPlacement="start"
								/>
							</Line>
						</Tooltip>
						<Tooltip
							title="Once installed you can add a custom error icon"
							placement="right"
						>
							<Line component="div">
								errorIcon=
								<FormControlLabel
									sx={{ ml: 0 }}
									control={
										<Switch
											checked={errorIcon}
											onChange={(e) => setErrorIcon(e.target.checked)}
										/>
									}
									label={`{ ${errorIcon} }`}
									labelPlacement="start"
								/>
							</Line>
						</Tooltip>
						<Tooltip
							title="Direction to shift image after it loads"
							placement="right"
						>
							<Line component="div">
								shift=
								<Select
									variant="standard"
									value={shift || 'null'}
									onChange={(e) => setShift(e.target.value)}
									sx={{ minWidth: 100 }}
								>
									<MenuItem value={'null'}>{'{ null }'}</MenuItem>
									<MenuItem value="top">"top"</MenuItem>
									<MenuItem value="right">"right"</MenuItem>
									<MenuItem value="bottom">"bottom"</MenuItem>
									<MenuItem value="left">"left"</MenuItem>
								</Select>
							</Line>
						</Tooltip>
						<Tooltip title="Any valid CSS `length` property" placement="right">
							<Line component="div">
								distance="
								<TextField
									variant="standard"
									value={distance}
									onChange={(e) => setDistance(e.target.value)}
								/>
								"
							</Line>
						</Tooltip>
						<Tooltip
							title="Number of milliseconds the shift takes"
							placement="right"
						>
							<Line component="div">
								shiftDuration={'{'}
								<TextField
									variant="standard"
									value={shiftDuration || duration * 0.3}
									onChange={(e) => setShiftDuration(e.target.value)}
								/>
								{'}'}
							</Line>
						</Tooltip>
						<Tooltip
							title="Color the image transitions in from"
							placement="right"
						>
							<Line component="div">
								bgColor="
								<TextField
									variant="standard"
									value={bgColor}
									onChange={(e) => setBgColor(e.target.value)}
								/>
								"
							</Line>
						</Tooltip>
					</Stack>
					<Box component="div" variant="h6">
						{'/>'}
					</Box>
					<Button
						disabled={showPhoto === 'refresh'}
						variant="contained"
						onClick={refreshPhoto}
						disableElevation
					>
						Refresh photo
					</Button>
					<Button
						disabled={showPhoto === 'new'}
						variant="outlined"
						onClick={getNewPhoto}
					>
						Random photo
					</Button>
					<Button onClick={resetDefaults}>Reset defaults</Button>
				</Stack>
			</Drawer>
			<Box component="section" sx={{ flexGrow: 1, backgroundColor: bgColor }}>
				<Toolbar />
				<Output
					sx={{
						maxHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
					}}
				>
					{showPhoto && (
						<ScrollTrigger
							threshold={threshold}
							disableHysteresis={disableHysteresis}
							target={target}
							transition={transition}
							onScroll={onScroll}
							disabled={disabled}
						/>
					)}
				</Output>
			</Box>
		</Box>
	);
}

render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Demo />
	</ThemeProvider>,
	document.querySelector('#demo')
);
