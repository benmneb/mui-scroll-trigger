<div align="center">
    <h1><code>mui-scroll-trigger</code></h1>
</div>
<p align="center">
  Simple and convenient scroll-based transitions for React apps using MUI v5. 
</p>
<p align="center">
  <img src="https://img.shields.io/npm/v/mui-scroll-trigger?style=for-the-badge" />
  <img src="https://img.shields.io/bundlephobia/minzip/mui-scroll-trigger?style=for-the-badge" />
</p>
<p align="center">
<strong>Demo Sandboxes:</strong><br />
  <strong><a href="https://codesandbox.io/s/mui-scroll-trigger-backtotop-demo-wpozl?file=/demo.js">"Back to Top" Button</a></strong>  |  
  <strong><a href="https://codesandbox.io/s/mui-scroll-trigger-hideappbar-demo-0rsy8?file=/demo.js:311-358">Hide App Bar</a></strong>  |  
  <strong><a href="https://codesandbox.io/s/mui-scroll-trigger-elevateappbar-demo-wxlx5?file=/demo.js">Elevate App Bar</a></strong>
</p>

### Basically, this component turns this...

```
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Grow from '@mui/material/Grow

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({ threshold: 400 });

  return (
    <Grow in={!trigger}>
      {children}
    </Grow>
  );
}

export default function App() {
  return (
    <HideOnScroll>
      <div>Hello</div>
    </HideOnScroll>
  )
}
```

### ...into this...

```
import ScrollTrigger from 'mui-scroll-trigger'

export default function App() {
  return (
    <ScrollTrigger threshold={400}>
      <div>Hello</div>
    </ScrollTrigger>
  )
}
```

### 🎉 🥳 👯‍♀️

### ...but with _more options_.

Want to use a different transition? The `transition` prop accepts any of the [MUI v5 transitions](https://mui.com/components/transitions/) as lowercase strings.

```
<ScrollTrigger transition="zoom">
  <div>Zoomed Hello</div>
</ScrollTrigger>
```

You can control whether the child element will transition in or out once the threshold is met with the `onScroll` prop. It accepts either "hide" or "show" and defaults to "hide".

```
<ScrollTrigger onScroll="show">
  <div>I will appear once the scroll threshold is met</div>
</ScrollTrigger>
```

You can conditionally disable the transition (ie. when a modal is open) and preserve it's current state with the `disabled` prop.

```
<ScrollTrigger disabled={someCondition}>
  <div>I will not transition while `someCondition` is true</div>
</ScrollTrigger>
```

## Props

| Name            | Type    | Default | Description                                                                                                                                          |
| --------------- | ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| children\*      | element |         | Element that shall be transitioned... **_required_**                                                                                                 |
| disabled        | bool    | false   | Whether or not to disable the transition.                                                                                                            |
| ignoreDirection | bool    | false   | Ignore the scroll direction when determining whether to apply the transition. Maps to MUI useScrollTrigger `disableHysteresis` option.               |
| onScroll        | string  | 'hide'  | Whether to 'show' or 'hide' (transition in or out) at the scroll `threshold`.                                                                        |
| target          | node    | window  | Target to base scroll distance on. You normally won't need to use this, unless in iframes or similar.                                                |
| threshold       | number  | 100     | Apply the chosen transition when the vertical scroll strictly crosses this threshold (exclusive).                                                    |
| transition      | string  | 'grow'  | MUI [transition](https://mui.com/components/transitions/) to apply at the `threshold`. Accepts one of 'slide', 'grow', 'zoom', 'collapse' or 'fade'. |

\* required prop

Any other props (eg. `easing`, `timeout`) will be passed directly to the chosen [MUI transition component](https://mui.com/components/transitions/#api). This means you can also use any of the props of the [Transition](https://reactcommunity.org/react-transition-group/transition#Transition-props) component from react-transition-group.

The `ignoreDirection` (disableHysteresis), `target` and `threshold` props work just like in the [MUI useScrollTrigger hook](https://mui.com/components/app-bar/#usescrolltrigger-options-trigger).

## License

© [benmneb](https://github.com/benmneb)

[ISC License](https://choosealicense.com/licenses/isc/)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

<!-- THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE. -->
