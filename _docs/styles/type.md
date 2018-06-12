---
title: Basic Type
type: styles
section: typography
order: 99
---


<p>We'll add a few helpers in for font smoothing, positioning, and reduction of unnecessary decorations.</p>
<pre class="highlight">
*, *:before, *:after { position: relative; outline: none !important; text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; font-smoothing: grayscale; }
</pre>

<p>Make typography easy. Use a calc function for line heights, and specify all font sizes in rem units. You can also share header sizes. We can also use a native font stack.</p>
<pre class="highlight">
html { font-size: 15px; -webkit-text-size-adjust: 100%; }
* { line-height: calc( 1em + ( ( 1.6 - 1 ) / ( 5rem - 1rem ) ) * ( 5rem - 1em ) ); }
body { font-size: 1rem; color: #919599; -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; }
h1, h2, h3, h4, h5, h6 { color: #313539; }
h1, h2 { font-size: 2.5rem; }
h3, h4 { font-size: 1.75rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }
</pre>

<p>Let's add some sensible margins, too. This CSS also trims margins on the first and last element of any container. This can be very helpful for alignment, as we're usually just trying to separate peer elements.</p>
<pre class="highlight">
h1, h2, h3, h4, h5, h6, p, ol, ul, blockquote, table { margin: 1.5em 0; }
h1, h2, h3, h4, h5, h6 { margin-bottom: .5em; }
*:first-child { margin-top: 0; }
*:last-child { margin-bottom: 0; }
</pre>


<h1>h1. Heading <small>Secondary text</small></h1>
<h2>h2. Heading <small>Secondary text</small></h2>
<h3>h3. Heading <small>Secondary text</small></h3>
<h4>h4. Heading <small>Secondary text</small></h4>
<h5>h5. Heading <small>Secondary text</small></h5>
<h6>h6. Heading <small>Secondary text</small></h6>

<h1>Header leading is relative to font size. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</h1>

<h2>Header text is bold. <br/><em>Emphasis is light.</em> <br/>Breaks disappear on mobile.</h2>

<p class="text-larger"><strong>Larger Paragraph:</strong> Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>

<p class="text-large"><strong>Large Paragraph:</strong> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>

<p><strong>Standard Paragraph:</strong> Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>

<p class="text-light"><strong>Light Paragraph:</strong> Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>

<blockquote>Blockquote: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</blockquote>

---

<h6>Color Variations</h6>

<p class="text-dark">Dark Text <span class="text-light text-italic">(default, class not needed)</span></p>
<p class="text-light">Light Text</p>
<p class="text-red">Red Text</p>
<p class="text-orange">Orange Text</p>
<p class="text-yellow">Yellow Text <span class="text-light text-italic">(same as orange)</span></p>
<p class="text-green">Green Text</p>
<p class="text-blue">Blue Text</p>


