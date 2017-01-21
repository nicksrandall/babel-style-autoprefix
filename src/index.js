const postcss = require('postcss');
var cssnext = require("postcss-cssnext")

export default function () {
  return {
    name: 'tagged-template-cssnext', // not required
    visitor: {
      TaggedTemplateExpression(path) {
        if (path.node.tag.name == 'css') {
          path.node.quasi.quasis = path.node.quasi.quasis.map((template) => {
            const convertedCss = postcss([
              cssnext(/* no options */)
            ])
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
