# @hide-block

Hide block hides an element from the sight of the user.

```css
@mixin hide-block {
  margin: -1px;
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip: rect(0, 0, 0, 0);
  position: absolute;
}
```

## Example

```css
.element{
  @include hide-block;
}
```