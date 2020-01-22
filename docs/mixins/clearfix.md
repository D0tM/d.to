# @clearfix

The clearfix mixin helps us to set any element as a holder for it's **float children**, by creating a pseudo element **:after** to clear any float.

```css
@mixin clearfix {
  &:after {
    content: '';
    display: block;
    clear: both;
  }
}
```

## Example

```css
.element{
  @include clearfix();
}
```