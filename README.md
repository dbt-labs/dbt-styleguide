# dbt Styleguide

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

A suite of custom styles, fonts, images and JS from [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/) and [jQuery UI](https://jqueryui.com/). Built and documented using [Jekyll](https://jekyllrb.com/).

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

If you'd like to customize the styleguide in your project or tree-shake unused styles, we've done so with webpack in dbt-cloud. It's suggested you reference that project for this approach.

## Roadmap

TODO

## Contributing

If you aren't a Fishtown Analytics employee, can you reach out to us before you make a contribution? We recommend doing so in our [Slack community](https://community.getdbt.com/).

For internal contribution (Fishtown Analytics employees), follow Fishtown Analytics internal communication and contribution standards.

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

After changes have been approved, publish a release using release-it.

```sh
npm run release
```

More information on releases can be found in Notion under Engineering/Styleguide.

### Constraints

We have duplicate fonts, both under `ui/fonts/` and `sass/fonts`, due to limitations of our build process (Jekyll + Liquid). Some fonts may not work in the Jekyll site.

## License

Pending review
