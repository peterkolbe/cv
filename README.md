# Resume Builder

This project generates my professional resume using the JSON Resume standard format and the Even theme.

[www.peterkolbe.com](https://www.peterkolbe.com)

## Dev

The project utilizes GitHub Actions for automated deployments to Amazon S3 and CloudFront. When changes are pushed to
the main branch, the site is automatically built and deployed to production.

### Custom Theme

Install all dependencies:

```shell
npm install
```

Take the `ìndex.js` from [node_modules](node_modules/jsonresume-theme-even/dist/index.js) and modify it. The
`cli.js`can be used to generate the cv with:

```shell
node themes/even-custom/cli.js < resume.json > index.html
```
