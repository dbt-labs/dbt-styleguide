---
title: Scripts
layout: raw
---

{% include vendors/jquery/jquery-3.2.1.min.js %}
{% include vendors/modernizr/modernizr-3.6.0.min.js %}
{% include scripts/helpers.js %}

{% if site.jqueryui %}
	{% include vendors/jqueryui/jquery-ui-1.12.1/jquery-ui.min.js %}
	{% include scripts/jqueryui.js %}
{% endif %}

{% if site.bootstrap %}
	{% include vendors/bootstrap-3.3.7/js/bootstrap.min.js %}
	{% include scripts/bootstrap.js %}
	
	{% include vendors/bootstrap-validator/dist/validator.min.js %}
	{% include scripts/validator.js %}
	
	{% include vendors/bootstrap-suggest/js/bootstrap-suggest.js %}
	{% include scripts/suggest.js %}
{% endif %}

{% include scripts/app.js %}