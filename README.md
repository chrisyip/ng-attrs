# ng-attrs

Dynamic set or remove attributes in Angular, like `ngClass` for classes.

# Install

Bower:

```
bower install ng-attrs
```

Or manually download it.

# Usage

```html
<!-- For unmin version -->
<script src="bower_components/ng-attrs/ng-attrs.js"></script>
<!-- For min version -->
<script src="bower_components/ng-attrs/dist/ng-attrs.min.js"></script>
<script>
  angular.module('yourApp', ['ngAttrs'])
</script>
<body ng-app="yourApp">
  <div ng-controller="yourCtrl">
    <div ng-attrs="{ contenteditable: isEditable, 'custom-attr': isCustomAttr }"></div>
  </div>
</body>
```

The different between [`ngAttr`](https://docs.angularjs.org/guide/directive#-ngattr-attribute-bindings) and `ngAttrs` is when value is:

- `true`: `ngAttrs` will set attribute to `''`, useful for attribute that doesn't have value, e.g. `contenteditable`, `novalidate`; `ngAttr` will just set attribute to `'true'`, e.g. `contenteditable="true"`.
- `false` or `undefined`: `ngAttrs` will remove attribute from element, `ngAttr` will keep attribute without value.
- Other data types, `ngAttrs` and `ngAttr` will convert it to `String` and set it as value.

# Todo

- Support package managers
- Source map
- Tests

# Author

[Chris Yip](https://github.com/chrisyip)
