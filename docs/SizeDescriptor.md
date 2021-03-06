# Quixote API: `SizeDescriptor`

Size descriptors represent width or height.

[Return to the descriptor list.](descriptors.md)

[Return to the API overview.](api.md)

[Return to the overview README.](../README.md)


### Comparisons

```
Stability: 2 - Unstable
```

Size descriptors may be compared to another size descriptor or to a number.

At present, comparisons are artificially limited. It's possible to allow more flexibility, such as comparing sizes to positions. The current approach is an experiment to see if it's more useful to fail fast than to provide flexibility. Please share your opinion about this tradeoff by contributing to [issue #6](https://github.com/jamesshore/quixote/issues/6).


### Common API

Size descriptors implement the following methods. They're useful when you want to compare sizes that aren't exactly the same.


#### descriptor.plus()

```
Stability: 2 - Unstable
```

Create a descriptor that's bigger than this one.

`descriptor.plus(amount)`

* `amount (SizeDescriptor or number)` The number of pixels to increase the size.

Example: "The navbar is 12px taller than the logo."

```javascript
navbar.assert({
  height: logo.height.plus(12)
});
```


#### descriptor.minus()

```
Stability: 2 - Unstable
```

Create a descriptor that's smaller than this one.

`descriptor.minus(amount)`

* `amount (SizeDescriptor or number)` The number of pixels to decrease the size.

Example: "The content area is the same width as the navbar, excluding the sidebar."

```javascript
content.assert({
  width: navbar.width.minus(sidebar.width)
});
```


#### descriptor.times()

```
Stability: 2 - Unstable
```

Create a new descriptor that's a multiple or fraction of the size of this one.

`descriptor.times(multiple)`

* `multiple (number)` The number to multiply the size by.

Example: "The lightbox is half the size of the viewport."

```javascript
var viewport = frame.viewport();
lightbox.assert({
  width: viewport.width.times(1/2),
  height: viewport.height.times(1/2)
});
```
