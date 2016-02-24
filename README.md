# eslint-config-mikewilcox

Linters are great for projects. Use this as an example for how to setup a custom set of rules.

By default, this plugin extends the [airbnb base rules](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/base.js);

You can then overwrite any rules as you wish. The full list of [ESLint](http://eslint.org/) rules can be found [here](http://eslint.org/docs/rules/)

## Install

```bash
$ npm i -g eslint -D
$ npm i eslint-config-mikewilcox -D
```

Now add an eslint config file to your project...

```bash
$ touch .eslintrc
```

> _.eslintrc_
```js
{    
  "extends": "mikewilcox"   
}
```

You can then lint files using this extension by running eslint on the files you wish to:

```bash
$ eslint foo.js
```

...or to make it part of your project's build step, you can add a lint task to your npm scripts:

```js
"scripts": {
  "lint": "eslint src"
}
```