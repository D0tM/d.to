# @after

After generates a **media query** that will be valid for the element, **only after** the viewport reaches a **minimum width**, dictated by the breakpoints defined into the **config** file.

```css
@mixin after($breakpoint){
  @media screen and (max-width: map-get($breakpoints, $breakpoint)){
    @content;
  }
}
```

## Example

```css
.element{
  @include after('tablet'){
    background: yellow;
  };
}
```