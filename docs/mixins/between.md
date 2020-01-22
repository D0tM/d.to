# @between

Between generates a **media query** that will be valid for the element, **only between** a range of breakpoints.

```css
@mixin between($start, $end){
  @media screen and (min-width: map-get($breakpoints, $start)) and (max-width: map-get($breakpoints, $end)){
    @content;
  }
}
```

## Example

```css
.element{
  @include between('mobile', 'desktop'){
    display:none;
  };
}
```

<!-- tabs:start -->

#### ** English **

Hello!

#### ** French **

Bonjour!

#### ** Italian **

Ciao!

<!-- tabs:end -->