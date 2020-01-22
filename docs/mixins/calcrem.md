# @calc-rem

Calc rem hels us to calculate any value into rem and returns **2 properties**: One in **rem** and one in **pixels** for older browsers. The first argument will be the **CSS property** to set, the second will be the **property value**, the third will be an **optional parameter**, that could be **(true or important)**, this sets a property to **!important**.

```css
@mixin calc-rem($property, $value, $important: false) {

	$remSize: $value / $font-size;
	$hasImportant: null;

	@if $important == true or $important == important {
		$hasImportant: !important;
	}

	#{$property}: $value $hasImportant;
	#{$property}: #{$remSize}rem $hasImportant;
}
```

## Example

```css
.element{
  @include calc-rem('width', 200px, true);
  @include calc-rem('height', 200px);
}
```