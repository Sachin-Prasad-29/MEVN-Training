// const lodash = require('lodash');

import lodash from 'lodash';
import chalk from 'chalk';

console.log(lodash.capitalize('helloworld'));

console.log(chalk.green('Hello world!'));
console.log(chalk.red('Hello world!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.white('Hello world!'));
console.log(chalk.rgb(123, 45, 67).underline('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
