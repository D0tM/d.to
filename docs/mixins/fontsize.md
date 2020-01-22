# @font-size

Font size will return a value **converted in rem** calculated from the parameter passed in.

```css
@mixin font-size($size,$unit:rem) {
	font-size: calculateRem($size,$unit);
}
```

## Example

```css
.element{
  @include font-size(30px);
}
```