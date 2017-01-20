## Babel Style AutoPrefix
This plugin will take any 'css' tagged template string and automatically run it's code through a css autoprefixer.

## Example
```js
const example = css`
  .babel { 
    display: flex 
  }
`;
```
will output: 
```js
const example = css`
  .babel { 
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex 
  }
`;
```

### Run Tests
`npm t`

### Build Plugin
`npm run build`


