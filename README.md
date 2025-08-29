# Resume Builder

shx cp node_modules/jsonresume-theme-even/dist/index.js themes/even-custom/index.js
This project generates my professional resume using the JSON Resume standard format and the Even theme.

[www.peterkolbe.com](https://www.peterkolbe.com)

## Dev

The project utilizes GitHub Actions for automated deployments to Amazon S3 and CloudFront. When changes are pushed to
the main branch, the site is automatically built and deployed to production.

### Custom Theme

#### Install all dependencies:

```shell
npm install
```

#### Take the `ìndex.js` from [node_modules](node_modules/jsonresume-theme-even/dist/index.js) and copy it to [themes/even-custom](./themes/even-custom):

```shell
npm run copy-even-theme
```

#### Modify the [copied index.js](./themes/even-custom/index.js)

#### Use [cli.js](./themes/even-custom/cli.js) to generate the cv:

```shell
node themes/even-custom/cli.js < resume.json > index.html
```
