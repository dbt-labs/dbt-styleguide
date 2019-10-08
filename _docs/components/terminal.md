---
title: Terminal Tools
type: components
section: terminal
class: bg-silver-light
---


<h6>Compiling</h6>

<div class="card card-sm">
	<div class="card-header">
		<div class="tools">
			<div class="tool"><h6><svg class="glyph glyph-sm glyph-before margin-left-small"><use xlink:href="#glyph-chevron-right"></use></svg> Runs</h6></div>
			<div class="tool tool-gap"></div>
			<div class="tool tool-grow"></div>
			<div class="tool"><a href="#" class="btn btn-sm btn-clear text-info btn-pill btn-icon spin"><svg class="glyph glyph-sm"><use xlink:href="#glyph-loading"></use></svg></a></div>
		</div>
	</div>
</div>

<h6>Can't Compile</h6>

<div class="card card-sm">
	<div class="card-header">
		<div class="tools">
			<div class="tool"><h6><svg class="glyph glyph-sm glyph-before margin-left-small"><use xlink:href="#glyph-chevron-right"></use></svg> Runs</h6></div>
			<div class="tool tool-gap"></div>
			<div class="tool tool-grow">
				<div class="alert alert-danger alert-sm ellipsis">{% raw %}Compilation Error in model stg_github_comments (models/staging/github/stg_github_comments.sql)\n unexpected ‘}’\n line 1\n {{ config(defer_to=‘prod.github.comments’) }{% endraw %}</div>
			</div>
			<div class="tool"><a href="#" class="btn btn-sm btn-clear text-warning danger btn-icon btn-pill"><svg class="glyph glyph-sm glyph-solid"><use xlink:href="#glyph-square"></use></svg></a></div>
		</div>
	</div>
</div>

<h6>Minor Error</h6>

<div class="card card-sm">
	<div class="card-header">
		<div class="tools">
			<div class="tool"><h6><svg class="glyph glyph-sm glyph-before margin-left-small"><use xlink:href="#glyph-chevron-right"></use></svg> Runs</h6></div>
			<div class="tool tool-gap"></div>
			<div class="tool tool-grow">
				<form class="input-group">
					<input type="text" class="form-control input-sm " placeholder="dbt run..." />
					<div class="input-group-btn"><button type="submit" class="btn btn-sm btn-default btn-icon"><svg class="glyph glyph-sm"><use xlink:href="#glyph-chevron-right"></use></svg></button></div>
				</form>
			</div>
			<div class="tool"><a href="#" class="btn btn-sm btn-clear text-warning btn-icon btn-pill"><svg class="glyph glyph-sm glyph-solid"><use xlink:href="#glyph-triangle"></use></svg></a></div>
		</div>
	</div>
</div>


<h6>Ready</h6>

<div class="card card-sm">
	<div class="card-header">
		<div class="tools">
			<div class="tool"><h6><svg class="glyph glyph-sm glyph-before margin-left-small"><use xlink:href="#glyph-chevron-right"></use></svg> Runs</h6></div>
			<div class="tool tool-gap"></div>
			<div class="tool tool-grow">
				<form class="input-group">
					<input type="text" class="form-control input-sm " placeholder="dbt run..." />
					<div class="input-group-btn"><button type="submit" class="btn btn-sm btn-default btn-icon"><svg class="glyph glyph-sm"><use xlink:href="#glyph-chevron-right"></use></svg></button></div>
				</form>
			</div>
			<div class="tool"><a href="#" class="btn btn-sm btn-clear text-success btn-icon btn-pill"><svg class="glyph glyph-sm glyph-solid"><use xlink:href="#glyph-circle"></use></svg></a></div>
		</div>
	</div>
</div>

<h6>Running</h6>

<div class="card card-sm">
	<div class="card-header">
		<div class="tools">
			<div class="tool"><h6><svg class="glyph glyph-sm glyph-before margin-left-small"><use xlink:href="#glyph-chevron-right"></use></svg> Runs</h6></div>
			<div class="tool tool-gap"></div>
			<div class="tool tool-grow">
				<form class="input-group">
					<div class="input-group-btn">
						<span class="btn btn-default btn-sm"><span class="loading loading-inline loading-small loading-bold"></span> running</span>
					</div>
					<input type="text" class="form-control input-sm " placeholder="dbt run..." value="dbt run" disabled />
					<div class="input-group-btn">
						<button type="reset" class="btn btn-sm btn-default btn-icon"><svg class="glyph glyph-sm"><use xlink:href="#glyph-x"></use></svg></button>
					</div>
				</form>
			</div>
			<div class="tool"><a href="#" class="btn btn-sm btn-clear text-success btn-icon btn-pill"><svg class="glyph glyph-sm glyph-solid"><use xlink:href="#glyph-circle"></use></svg></a></div>
		</div>
	</div>
</div>


<h6>Ran</h6>


<div class="card card-sm">
	<div class="card-body">
		<div class="tools">
			<div class="tool"><h6><svg class="glyph glyph-sm glyph-before margin-left-small"><use xlink:href="#glyph-chevron-right"></use></svg> Runs</h6></div>
			<div class="tool tool-gap"></div>
			<div class="tool tool-grow">
				<form class="input-group">
					<div class="input-group-btn">
						<span class="btn btn-highlight-danger btn-sm">run failed</span>
					</div>
					<input type="text" class="form-control input-sm " placeholder="dbt run..." />
					<div class="input-group-btn">
						<button type="submit" class="btn btn-sm btn-default btn-icon"><svg class="glyph glyph-sm"><use xlink:href="#glyph-chevron-right"></use></svg></button>
					</div>
				</form>
			</div>
			<div class="tool"><a href="#" class="btn btn-sm btn-clear text-success btn-icon btn-pill"><svg class="glyph glyph-sm glyph-solid"><use xlink:href="#glyph-circle"></use></svg></a></div>
		</div>
	</div>
</div>
