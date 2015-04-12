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

# Todo

- Support package managers
- Source map
- Tests

# Author

[Chris Yip](https://github.com/chrisyip)
