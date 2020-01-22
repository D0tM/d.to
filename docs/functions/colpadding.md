# @colPadding

This function sets a padding, left or right based on the amount of columns passed.

```css
@function colPadding($value) {
    @return 100% / $columns * $value;
}
```

## Example

```css
.element{
  padding: 0 colPadding(5);
}
```

The above element will have a padding left and right equal to 5 columns out of 10/12: