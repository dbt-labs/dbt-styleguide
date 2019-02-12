---
title: Radios and Checkboxes
type: styles
section: forms
---

<h6>Standard Checkboxes (enabled and disabled)</h6>

<label class="option">
	<input type="checkbox" />
	<svg class="glyph glyph-check"><use xlink:href="#glyph-form-check"></use></svg> 
	Option one is this and that &mdash; be sure to include why it's great
</label>
<label class="option">
	<input type="checkbox" checked />
	<svg class="glyph glyph-check"><use xlink:href="#glyph-form-check"></use></svg> 
	Option two is checked
</label>
<label class="option">
	<input type="checkbox" />
	<svg class="glyph glyph-check"><use xlink:href="#glyph-form-check"></use></svg> 
	Option three
</label>
<label class="option">
	<input type="checkbox" />
	<svg class="glyph glyph-check"><use xlink:href="#glyph-form-check"></use></svg> 
	Option four
</label>
<label class="option">
	<input type="checkbox" />
	<svg class="glyph glyph-check"><use xlink:href="#glyph-form-check"></use></svg> 
	Option five
</label>
<label class="option">
	<input type="checkbox" disabled checked />
	<svg class="glyph glyph-check"><use xlink:href="#glyph-form-check"></use></svg> 
	Option six is disabled but still checked
</label>
<label class="option">
	<input type="checkbox" disabled />
	<svg class="glyph glyph-check"><use xlink:href="#glyph-form-check"></use></svg> 
	Option seven is just disabled
</label>

<h6>Standard Radio Buttons</h6>

<label class="option">
	<input type="radio" name="radio1" />
	<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
	Option one is this and that &mdash; be sure to include why it's great
</label>
<label class="option">
	<input type="radio" name="radio1" checked />
	<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
	Option two is selected by default
</label>
<label class="option">
	<input type="radio" name="radio1" />
	<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
	Option three
</label>
<label class="option">
	<input type="radio" name="radio1" />
	<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
	Option four
</label>
<label class="option">
	<input type="radio" name="radio1" />
	<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
	Option five
</label>
<label class="option">
	<input type="radio" name="radio1" />
	<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
	Option six
</label>
<label class="option">
	<input type="radio" name="radio1" disabled />
	<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
	Option seven is disabled
</label>
<br>

<hr>
<h6>Indeterminate States</h6>

<label class="option">
	<input type="checkbox" id="changeme"/>
	<svg class="glyph glyph-check"><use xlink:href="#glyph-form-check"></use></svg> 
	This option is indeterminate
</label>

<script>document.getElementById('changeme').indeterminate = true;</script>

<hr>
<h6>Disabled Radio Buttons</h6>

<label class="option">
	<input type="radio" name="radio2" disabled />
	<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
	Option one is this and that &mdash; be sure to include why it's great
</label>
<label class="option">
	<input type="radio" name="radio2" disabled />
	<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
	Option two is selected by default
</label>
<label class="option">
	<input type="radio" name="radio2" disabled checked />
	<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
	Option three is disabled
</label>

<hr>
<h6>Error States</h6>

<div class="has-error">
	<label class="option">
		<input type="radio" name="radio3" checked />
		<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
		Radio 1
	</label>
	<label class="option">
		<input type="radio" name="radio3" />
		<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
		Radio 2
	</label>
	<label class="option">
	<input type="checkbox" checked />
		<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
		Check 1
	</label>
	<label class="option">
		<input type="checkbox" />
		<svg class="glyph glyph-radio"><use xlink:href="#glyph-form-radio"></use></svg> 
		Check 2
	</label>
</div>