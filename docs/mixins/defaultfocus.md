# @default-focus

Default focus will set the style of an element, that is **not supposed** to be focusable, equal to those **focusable by default**, this meand you will see a **blue glowing border** outside the element on focus.

```css
@mixin default-focus(){
  &:focus{
    -webkit-appearance: push-button;
  }
}
```

## Example

```css
.element{
  @include default-focus;
}
```