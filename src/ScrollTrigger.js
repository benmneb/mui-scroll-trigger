import { createElement } from 'react';

import PropTypes from 'prop-types';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import Zoom from '@mui/material/Zoom';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';

export default function ScrollTrigger(props) {
	const {
		appear,
		children,
		disabled,
		ignoreDirection: disableHysteresis,
		onScroll,
		target,
		threshold,
		transition,
		...rest
	} = props;

	const trigger = useScrollTrigger({ threshold, disableHysteresis, target });

	const triggerStatus = onScroll === 'show' ? trigger : !trigger;

	function element() {
		if (transition === 'slide') return Slide;
		if (transition === 'grow') return Grow;
		if (transition === 'zoom') return Zoom;
		if (transition === 'collapse') return Collapse;
		if (transition === 'fade') return Fade;
	}

	return createElement(
		element(),
		{ appear: appear, in: disabled || triggerStatus, ...rest },
		children
	);
}

ScrollTrigger.propTypes = {
	appear: PropTypes.bool,
	children: PropTypes.element.isRequired,
	disabled: PropTypes.bool,
	ignoreDirection: PropTypes.bool,
	onScroll: PropTypes.oneOf(['show', 'hide']),
	target: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
	threshold: PropTypes.number,
	transition: PropTypes.oneOf(['slide', 'grow', 'zoom', 'collapse', 'fade']),
};

ScrollTrigger.defaultProps = {
	appear: false,
	disabled: false,
	ignoreDirection: false,
	onScroll: 'hide',
	target: window,
	threshold: 100,
	transition: 'grow',
};
