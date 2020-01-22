# @hide-text

Hide text hides a text but it can still be ridden from a SR, in fact it's used under the class **.is:sr-only**.

```css
@mixin hide-text {
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute !important;
  height: 1px;
  width: 1px;
  line-height: 1px;
  overflow: hidden;
}
```

## Example

```css
.element{
  @include hide-text;
}
```