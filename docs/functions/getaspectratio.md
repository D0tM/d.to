# @get-aspect-ratio

This function ensure to keep the aspect ratio of an image equal on any device.

```css
@function get-aspect-ratio($width,$height,$round:round) {
	$aspect: false;

	@if $round == round {
		$ratio: $width / $height;
		$aspect: (1 / $ratio) * 100%;
	} @else {
		$ratio: decimal-round($width / $height,2,$round);
		$aspect: (1 / decimal-round($ratio,2,$round)) * 100%;
	}

	@return decimal-round($aspect,2);
}
```

## Example

```css
.element{
  padding-bottom: get-aspec-ratio(300, 400);
}
```

The above element will keep the aspcet ratio of 300x400 pixels.