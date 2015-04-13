/**
 * ng-attrs
 * @author Chris Yip i@chrisyip.im
 * @website https://github.com/chrisyip/ng-attrs
 * @license MIT
 * @example
 * <div ng-attrs="{ contenteditable: isEditable }"
 * Use key-value pair, key will be attribute name, value will be the value.
 * If value is a boolean value, then:
 *   1. true - set attribute with '' value to element, this behavior is useful
 *      for attribute that has no value, e.g. <div contenteditable></div>
 *   2. false - remove attribute from element
 * Otherwise, the value will be convert to a string
 */

~function (window, factory) {
  'use strict'

  if (!window.angular) {
    return
  }

  // Initialize ngAttrs module
  // @TODO support package manager, e.g. browserify, requirejs
  factory(angular)
}(window, function (angular) {
  'use strict'

  angular.module('ngAttrs', [])
    .directive('ngAttrs', function () {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          function ngAttrsWatchAction (value) {
            angular.forEach(value, function (value, key) {
              if (value === false) {
                element.removeAttr(key)
              } else {
                element.attr(key, value === true ? '' : value)
              }
            })
          }

          scope.$watch(attrs.ngAttrs, ngAttrsWatchAction, true)
        }
      }
    })
});
