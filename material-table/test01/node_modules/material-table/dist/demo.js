"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _materialTable = _interopRequireDefault(require("./material-table"));

var direction = 'ltr'; // direction = 'rtl';

var theme = (0, _styles.createMuiTheme)({
  direction: direction,
  palette: {
    type: 'light'
  }
});

var App =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "tableRef", _react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      selecteds: 0,
      data: [{
        id: 1,
        name: 'a',
        surname: 'baran',
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 0,
        sex: 'Male',
        type: 'adult',
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35)
      }, {
        id: 2,
        name: 'b',
        surname: 'baran',
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: 'Female',
        type: 'adult',
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1
      }, {
        id: 3,
        name: 'c',
        surname: 'baran',
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: 'Female',
        type: 'child',
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1
      }, {
        id: 4,
        name: 'd',
        surname: 'baran',
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: 'Female',
        type: 'child',
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 3
      }, {
        id: 5,
        name: 'e',
        surname: 'baran',
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: 'Female',
        type: 'child',
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35)
      }, {
        id: 6,
        name: 'f',
        surname: 'baran',
        isMarried: true,
        birthDate: new Date(1989, 1, 1),
        birthCity: 34,
        sex: 'Female',
        type: 'child',
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 5
      }],
      columns: [{
        title: 'Adı',
        field: 'name'
      }, {
        title: 'Soyadı',
        field: 'surname'
      }, {
        title: 'Evli',
        field: 'isMarried',
        type: 'boolean'
      }, {
        title: 'Cinsiyet',
        field: 'sex',
        disableClick: true,
        editable: 'onAdd'
      }, {
        title: 'Tipi',
        field: 'type',
        removable: false,
        editable: 'never'
      }, {
        title: 'Doğum Yılı',
        field: 'birthDate',
        type: 'date'
      }, {
        title: 'Doğum Yeri',
        field: 'birthCity',
        lookup: {
          34: 'İstanbul',
          0: 'Şanlıurfa'
        }
      }, {
        title: 'Kayıt Tarihi',
        field: 'insertDateTime',
        type: 'datetime'
      }, {
        title: 'Zaman',
        field: 'time',
        type: 'time'
      }],
      remoteColumns: [{
        title: 'Avatar',
        field: 'avatar',
        render: function render(rowData) {
          return _react["default"].createElement("img", {
            style: {
              height: 36,
              borderRadius: '50%'
            },
            src: rowData.avatar
          });
        }
      }, {
        title: 'Id',
        field: 'id'
      }, {
        title: 'First Name',
        field: 'first_name'
      }, {
        title: 'Last Name',
        field: 'last_name'
      }]
    });
    return _this;
  }

  (0, _createClass2["default"])(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_core.MuiThemeProvider, {
        theme: theme
      }, _react["default"].createElement("div", {
        style: {
          maxWidth: '100%',
          direction: direction
        }
      }, _react["default"].createElement(_core.Grid, {
        container: true
      }, _react["default"].createElement(_core.Grid, {
        item: true,
        xs: 12
      }, _react["default"].createElement(_materialTable["default"], {
        ref: this.tableRef,
        columns: this.state.columns,
        data: this.state.data,
        title: "Demo Title",
        parentChildData: function parentChildData(row, rows) {
          return rows.find(function (a) {
            return a.id === row.parentId;
          });
        },
        options: {
          selection: true
        }
      }))), _react["default"].createElement("button", {
        onClick: function onClick() {
          _this2.tableRef.current.onQueryChange();
        }
      }, "ok"))), _react["default"].createElement(_core.MuiThemeProvider, {
        theme: (0, _styles.createMuiTheme)({
          palette: {
            primary: {
              main: '#abc'
            }
          }
        })
      }, _react["default"].createElement(_materialTable["default"], {
        ref: this.tableRef,
        columns: this.state.columns,
        data: this.state.data,
        title: "Demo Title",
        parentChildData: function parentChildData(row, rows) {
          return rows.find(function (a) {
            return a.id === row.parentId;
          });
        },
        options: {
          selection: true
        },
        isLoading: true
      })));
    }
  }]);
  return App;
}(_react.Component);

_reactDom["default"].render(_react["default"].createElement(App, null), document.getElementById('app'));

module.hot.accept();