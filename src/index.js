const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

export default function () {
  return {
    name: 'css-autoprefixer', // not required
    visitor: {
      TaggedTemplateExpression(path) {
        if (path.node.tag.name == 'prefix') {
          path.node.quasi.quasis = path.node.quasi.quasis.map((template) => {
            const convertedCss = postcss(autoprefixer).process(template.value.raw).css;
            template.value.raw = convertedCss;
            template.value.cooked = convertedCss;
            return template;
          });
        }
      }
    }
  };
}
