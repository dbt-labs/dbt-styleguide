# dbt Styleguide

<a href="https://community.getdbt.com">
  <img src="https://community.getdbt.com/badge.svg" alt="Slack" />
</a>

A suite of custom styles, fonts, images and JS from [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/) and [jQuery UI](https://jqueryui.com/) for the [dbt](https://github.com/fishtown-analytics/dbt) ecosystem. Built and documented using [Jekyll](https://jekyllrb.com/).

## Install

### Download (Recommended)

For basic usage, it's recommended to install a specific version of the styleguide for long term use. You may download the assets in `dist` or install the repository as a git submodule.

### npm

If your project needs to stay up-to-date with incremental changes, it's recommended that you install the styleguide as node module.

```sh
npm install --save-dev fishtown-analytics/dbt-styleguide
```

## Usage

For basic usage, it's recommended to consume assets from the `dist` directory. See the [example/index.html](example/index.html) for example HTML markup.

If you'd like to customize the styleguide in your project or tree-shake unused styles, it's possible to do so with webpack.

## Contributing

Use npm to install JS packages.

```sh
npm install
```

You may need to install Jekyll and related ruby gems if you'd like to review the Jekyll site, or if you plan on performing a release.

```sh
gem install jekyll:3.8.6 liquify jekyll-octicons --no-document
```

Use the run script to serve the site locally.

```sh
./_run.sh
```

> Internal use: More information on releases can be found in Notion under Engineering/Styleguide.

### Constraints

We have duplicate fonts under `ui/fonts` and `sass/fonts` due to limitations of our build process (Jekyll + Liquid). Some fonts may not work in the Jekyll site, but work for distribution.

## License

[Apache License, Version 2.0](LICENSE)
