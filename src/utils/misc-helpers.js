import get from 'lodash.get';
import curry from 'lodash.curry';

/** equalWithinPath
  takes two objects and a path.
  returns true if both objects share the same value at the given path.

  @example
    obj1 = { a: { b: ['hello'] } }
    obj2 = { a: { b: ['hello'] } }
    equalWithinPath(obj1, obj2, ['a', 'b', 0]) --> true, 'hello' === 'hello'
  @example
    obj1 = { a: { b: ['hello'] } }
    obj2 = { a: { b: ['goodbye'] } }
    equalWithinPath(obj1, obj2, ['a', 'b', 1]) --> false, 'hi' !== 'goodbye'

  @param {obj1} object
  @param {obj2} object
  @param {path} array or string (string formatted as 'a.b.0')
*/
export const equalWithinPath = curry((obj1, obj2, path) => (
  get(obj1, path) === get(obj2, path)
));


/** updatedWithinPath
  takes two objects and a path.
  returns false if the path produces different results from both objects.
  the inverse of `equalWithinPath`

  @example
    obj1 = { a: { b: ['hello'] } }
    obj2 = { a: { b: ['hello'] } }
    updatedWithinPath(obj1, obj2, ['a', 'b', 0]) --> false, 'hello' === 'hello'
  @example
    obj1 = { a: { b: ['hello'] } }
    obj2 = { a: { b: ['goodbye'] } }
    updatedWithinPath(obj1, obj2, ['a', 'b', 1]) --> true, 'hi' !== 'goodbye'

    @param {obj1} object
    @param {obj2} object
    @param {path} array or string (string formatted as 'a.b.0')
*/
export const updatedWithinPath = curry((obj1, obj2, path) => (
  get(obj1, path) !== get(obj2, path)
));


/** delay
  A simple promise that waits for n milliseconds.
*/
export const delay = ms => new Promise(resolve => (
  window.setTimeout(resolve, ms)
));

/** toRoman
  Incredibly naive function to convert an integer to a roman numeral.
  Only handles values between 1 and 3, because that's all I actually need.

  @example
    toRoman(1) --> I
  @example
    toRoman(2) --> II

  @param {num} number
*/
export const toRoman = num => 'I'.repeat(num);


/** getQueryParams
  Returns an object holding all query parameters

  @example
    http://www.mysite.com
    getQueryParams() --> {}
  @example
    http://www.mysite.com?page=2&sort=asc
    getQueryParams() --> { page: '2', sort: 'asc' }
*/
export const getQueryParams = () => {
  const paramString = window.location.search;

  if (paramString === '') { return {}; }

  return paramString
    .replace('?', '')
    .split('&')
    .reduce((acc, item) => {
      const [key, value] = item.split('=');
      return {
        ...acc,
        [key]: value,
      };
    }, {});
};
