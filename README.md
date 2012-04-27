Placeholder Polyfil
===================

Add HTML5 placeholder support to older browsers

Usage
=====
Use [Modernizr](http://modernizr.com/) to load this script for browsers that do not have native support

```js
Modernizr.load({
	test: Modernizr.input.placeholder,
	nope: 'placeholder.js'
})
```
