# @colWidth

this function returns the width of an element in %, calculated by getting the maximum columns from the configuration file.

```css
@function colWidth($colWidth) {
  @return $colWidth / $columns * 100%;
}
```

## Example

```css
.element{
  width: colWidth(4);
}
```

The above element will have the width of:

- **41.7%** if we are working on a **12 columns layout**
- **40%** if we are working on a **10 columns layout**