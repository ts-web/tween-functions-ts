[![npm version](https://img.shields.io/npm/v/tween-functions-ts.svg)](https://www.npmjs.com/package/tween-functions-ts)
[![Downloads](https://img.shields.io/npm/dm/tween-functions-ts.svg)](https://www.npmjs.com/package/tween-functions-ts)

# tween-functions-ts

<img src="./media/ease.svg" alt="sample easing functions">
<br>
<small>Sample easing functions from <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function">MDN</a></small>
<br>
<br>

A drop-in replacement for [tween-functions](https://github.com/chenglou/tween-functions/tree/e3d5f1edf2cdb9b7b623be4d1064f886136a70b3).

These are Robert Penner's tweening functions. The same as those used in [react-tween-state](https://github.com/chenglou/react-tween-state) and [react-state-stream](https://github.com/chenglou/react-state-stream).

Note: Penner's original functions used the incremental change in time rather than the absolute cumulative time difference between the start time and the current time. For greater precision, these functions use the latter.


## Usage
```ts
import { easeOutQuad } from 'tween-functions-ts';

const currentValue = easeOutQuad(elapsedTime, fromValue, toValue, duration);
```

Direct imports are also supported, for maximum performance:
```ts
import { easeOutQuad } from 'tween-functions-ts/easeOutQuad';
```


## Functions available
- `linear`
- `easeInBack`
- `easeInBounce`
- `easeInCirc`
- `easeInCubic`
- `easeInElastic`
- `easeInExpo`
- `easeInOutBack`
- `easeInOutBounce`
- `easeInOutCirc`
- `easeInOutCubic`
- `easeInOutElastic`
- `easeInOutExpo`
- `easeInOutQuad`
- `easeInOutQuart`
- `easeInOutQuint`
- `easeInOutSine`
- `easeInQuad`
- `easeInQuart`
- `easeInQuint`
- `easeInSine`
- `easeOutBack`
- `easeOutBounce`
- `easeOutCirc`
- `easeOutCubic`
- `easeOutElastic`
- `easeOutExpo`
- `easeOutQuad`
- `easeOutQuart`
- `easeOutQuint`
- `easeOutSine`


# Comparison to other libraries
- This library is a clone of [chenglou/tween-functions](https://github.com/chenglou/tween-functions/tree/e3d5f1edf2cdb9b7b623be4d1064f886136a70b3), with these differences:
  - written in typescript
  - adds JSDoc
  - modern packaging
- [@environment-safe/tween](https://www.npmjs.com/package/@environment-safe/tween) is roughly the same, but has a dependency.
- [d3-ease](https://www.npmjs.com/package/d3-ease) only deals with values of the range 0..1, so you must do additional calculations.
