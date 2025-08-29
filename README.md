# Resume Builder

This project generates my professional resume using the JSON Resume standard format and the Even theme.

[www.peterkolbe.com](https://www.peterkolbe.com)

## Dev

The project utilizes GitHub Actions for automated deployments to Amazon S3 and CloudFront. When changes are pushed to
the main branch, the site is automatically built and deployed to production.

### Custom Theme

Just take the `ìndex.js` from [node_modules](node_modules/jsonresume-theme-even/dist/index.js) and modify it. The
`cli.js`can be used to generate the cv with:

```shell
mkdir -p dist && node themes/even-custom/cli.js < resume.json > dist/index.html
```
