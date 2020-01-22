# @until

Until generates a **media query** that will be valid for the element, **until** the viewport reaches a **maximum width**, dictated by the breakpoints defined into the **config** file.

```css
@mixin until($breakpoint){
  @media screen and (max-width: map-get($breakpoints, $breakpoint)){
    @content;
  }
}
```

## Example

```css
.element{
  @include until('tablet'){
    border: 1px solid red;
  };
}
```