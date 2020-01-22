# @ellipsis

Ellipsis hides the text inside an element replacing the end of that text with dots, the first argument is the **axis (X or Y)** in this case **(Width or Height)**, the second argument will be the **maximum growth** of an element before it gets truncated.

```css
@mixin ellipsis($axis, $param) {
  overflow: hidden;
	text-overflow: ellipsis;
  white-space: nowrap;
  @if($axis == 'width'){
    max-width: $param;
  } @else if($axis == 'height'){
    max-height: $param;
  }
}
```

## Example

```css
.element{
  @include ellipsis('width', 300px);
}
```