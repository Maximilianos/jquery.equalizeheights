# jquery.equalizeheights

## NOTICE:
This script is just a jQuery wrapper for [eqheights](https://github.com/Maximilianos/eqheights). You probably want to be using that directly.

---


A jQuery plugin to equalize the heights of a group of elements. Allows for and correctly handles box-sizing: border-box being set on the elements it handles

##Usage

**Simple**
```javascript
$('.equal').equalizeHeights();
```

**Resize for RWD (Responsive Web Design):**
```javascript
var el = $('.equal');
$(window).resize(function () {
  el.equalizeHeights();
}).resize();
```
