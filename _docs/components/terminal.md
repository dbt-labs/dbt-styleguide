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
			<div class="tool"><h6><svg class="glyph glyph-sm glyph-before"><use xlink:href="#glyph-chevron-right"></use></svg> Project Run</h6></div>
			<div class="tool tool-gap"></div>
			<div class="tool tool-grow"></div>
			<div class="tool"><span class="btn btn-text btn-sm margin-left">compiling</span></div>
			<div class="tool"><a href="#" class="btn btn-sm btn-highlight-info btn-icon btn-pill"><span class="loading loading-inline loading-small loading-bold"></span></a></div>
			<div class="tool"><a href="#" class="btn btn-sm btn-text btn-icon"><svg class="glyph glyph-sm"><use xlink:href="#glyph-list"></use></svg></a></div>
		</div>
	</div>
</div>

<h6>Can't Compile</h6>

<div class="card card-sm">
	<div class="card-header">
		<div class="tools">
			<div class="tool"><h6><svg class="glyph glyph-sm glyph-before"><use xlink:href="#glyph-chevron-right"></use></svg> Project Run</h6></div>
			<div class="tool tool-gap"></div>
			<div class="tool tool-grow">
				<div class="alert alert-danger alert-sm ellipsis">{% raw %}Compilation Error in model stg_github_comments (models/staging/github/stg_github_comments.sql)\n unexpected ‘}’\n line 1\n {{ config(defer_to=‘prod.github.comments’) }{% endraw %}</div>
			</div>
			<div class="tool"><a href="#" class="btn btn-sm btn-clear text-warning danger btn-icon btn-pill"><svg class="glyph glyph-sm glyph-solid"><use xlink:href="#glyph-triangle"></use></svg></a></div>
			<div class="tool"><a href="#" class="btn btn-sm btn-text text-danger btn-icon"><svg class="glyph glyph-sm"><use xlink:href="#glyph-list"></use></svg></a></div>
		</div>
	</div>
</div>

<h6>Minor Error</h6>

<div class="card card-sm">
	<div class="card-header">
		<div class="tools">
			<div class="tool"><h6><svg class="glyph glyph-sm glyph-before"><use xlink:href="#glyph-chevron-right"></use></svg> Project Run</h6></div>
			<div class="tool tool-gap"></div>
			<div class="tool tool-grow">
				<form class="input-group">
					<input type="text" class="form-control input-sm " placeholder="dbt run..." />
					<div class="input-group-btn"><button type="submit" class="btn btn-sm btn-primary">run</button></div>
				</form>
			</div>
			<div class="tool"><a href="#" class="btn btn-sm btn-clear text-warning btn-icon btn-pill"><svg class="glyph glyph-sm glyph-solid"><use xlink:href="#glyph-triangle"></use></svg></a></div>
			<div class="tool"><a href="#" class="btn btn-sm btn-text text-warning btn-icon"><svg class="glyph glyph-sm"><use xlink:href="#glyph-list"></use></svg></a></div>
		</div>
	</div>
</div>


<h6>Ready</h6>

<div class="card card-sm">
	<div class="card-header">
		<div class="tools">
			<div class="tool"><h6><svg class="glyph glyph-sm glyph-before"><use xlink:href="#glyph-chevron-right"></use></svg> Project Run</h6></div>
			<div class="tool tool-gap"></div>
			<div class="tool tool-grow">
				<form class="input-group">
					<input type="text" class="form-control input-sm " placeholder="dbt run..." />
					<div class="input-group-btn"><button type="submit" class="btn btn-sm btn-primary">run</button></div>
				</form>
			</div>
			<div class="tool"><a href="#" class="btn btn-sm btn-clear text-success btn-icon btn-pill"><svg class="glyph glyph-sm glyph-solid"><use xlink:href="#glyph-circle"></use></svg></a></div>
			<div class="tool"><a href="#" class="btn btn-sm btn-text btn-icon"><svg class="glyph glyph-sm"><use xlink:href="#glyph-list"></use></svg></a></div>
		</div>
	</div>
</div>

<h6>Running</h6>

<div class="card card-sm">
	<div class="card-header">
		<div class="tools">
			<div class="tool"><h6><svg class="glyph glyph-sm glyph-before"><use xlink:href="#glyph-chevron-right"></use></svg> Project Run</h6></div>
			<div class="tool tool-gap"></div>
			<div class="tool tool-grow">
				<form class="input-group">
					<input type="text" class="form-control input-sm " placeholder="dbt run..." value="dbt run" disabled />
					<div class="input-group-btn"><a href="#" class="btn btn-sm btn-highlight-danger">stop</a></div>
				</form>
			</div>
			<div class="tool"><span class="btn btn-text btn-sm margin-left"><span class="loading loading-inline loading-small loading-bold"></span> running</span></div>
			<div class="tool"><a href="#" class="btn btn-sm btn-clear text-success btn-icon btn-pill"><svg class="glyph glyph-sm glyph-solid"><use xlink:href="#glyph-circle"></use></svg></a></div>
			<div class="tool"><a href="#" class="btn btn-sm btn-text btn-icon"><svg class="glyph glyph-sm"><use xlink:href="#glyph-list"></use></svg></a></div>
		</div>
	</div>
</div>


<h6>Ran</h6>


<div class="card card-sm">
	<div class="card-body">
		<div class="tools">
			<div class="tool"><h6><svg class="glyph glyph-sm glyph-before"><use xlink:href="#glyph-chevron-right"></use></svg> Project Run</h6></div>
			<div class="tool tool-gap"></div>
			<div class="tool tool-grow">
				<form class="input-group">
					<input type="text" class="form-control input-xs " placeholder="dbt run..." />
					<div class="input-group-btn"><button type="submit" class="btn btn-xs btn-primary">run</button></div>
				</form>
			</div>
			<div class="tool"><span class="btn btn-highlight-danger btn-pill btn-xs margin-left">run fail</span></div>
			<div class="tool"><a href="#" class="btn btn-xs btn-clear text-success btn-icon btn-pill"><svg class="glyph glyph-sm glyph-solid"><use xlink:href="#glyph-circle"></use></svg></a></div>
			<div class="tool"><a href="#" class="btn btn-xs btn-text btn-icon"><svg class="glyph glyph-sm"><use xlink:href="#glyph-list"></use></svg></a></div>
		</div>
	</div>
</div>
