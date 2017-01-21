const postcss = require('postcss');
var cssnext = require('postcss-cssnext');
var core = require('cssnano/dist/lib/core');

export default function () {
  return {
    name: 'tagged-template-cssnext', // not required
    visitor: {
      TaggedTemplateExpression(path) {
        if (path.node.tag.name == 'css') {
          path.node.quasi.quasis = path.node.quasi.quasis.map((template) => {
            const plugins = [cssnext()];
            if (process.env.NODE_ENV === 'production') {
              plugins.push(core());
            }
            const convertedCss = postcss(plugins)
            .process(template.value.raw).css;

            template.value.raw = convertedCss;
            template.value.cooked = convertedCss;
            return template;
          });
        }
      }
    }
  };
}
