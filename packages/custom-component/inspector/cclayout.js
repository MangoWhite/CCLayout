"use strict";
Vue.component("cc-layout", {
    template: `

    <ui-prop
      v-prop="target.type"
      :multi-values="multi"
    ></ui-prop>
    <ui-prop
      v-prop="target.resizeMode"
      :multi-values="multi"
    ></ui-prop>

    <div>
      <ui-prop
        v-prop="target.cellSize"
        :multi-values="multi"
        v-show="_isShowCellSize()"
      ></ui-prop>
      <ui-prop
        v-prop="target.startAxis"
        :multi-values="multi"
        v-show="_isGridLayout()"
      ></ui-prop>
      <ui-prop name="Padding"
        v-show="_isPaddingEnabled()"
      >
        <div class="child layout vertical">
          <ui-prop name="Left" type="number" indent=1
            v-value="target.paddingLeft.value"
            v-values="target.paddingLeft.values"
            :multi-values="multi"
            v-show="_isPaddingHorizontalEnabled()"
          ></ui-prop>
          <ui-prop name="Right" type="number" indent=1
            v-value="target.paddingRight.value"
            v-values="target.paddingRight.values"
            :multi-values="multi"
            v-show="_isPaddingHorizontalEnabled()"
          ></ui-prop>
          <ui-prop name="Top" type="number" indent=1
            v-value="target.paddingTop.value"
            v-values="target.paddingTop.values"
            :multi-values="multi"
            v-show="_isPaddingVerticalEnabled()"
          ></ui-prop>
          <ui-prop name="Bottom" type="number" indent=1
            v-value="target.paddingBottom.value"
            v-values="target.paddingBottom.values"
            :multi-values="multi"
            v-show="_isPaddingVerticalEnabled()"
          ></ui-prop>
        </div>
      </div>
      <ui-prop
        v-prop="target.spacingX"
        v-show="_isAllowHorizontalLayout()"
        :multi-values="multi"
      ></ui-prop>
      <ui-prop
        v-prop="target.spacingY"
        v-show="_isAllowVerticalLayout()"
        :multi-values="multi"
      ></ui-prop>
      <ui-prop
        v-prop="target.horizontalCenter"
        :multi-values="multi"
      ></ui-prop>
      <ui-prop
        v-prop="target.verticalCenter"
        :multi-values="multi"
      ></ui-prop>
      <ui-prop
        v-prop="target.horizontalDirection"
        v-show="_isAllowHorizontalLayout()"
        :multi-values="multi"
      ></ui-prop>
    </div>
    <ui-prop
      v-prop="target.affectedByScale"
      :multi-values="multi"
    ></ui-prop>

    `,
    props: {
        target: {
            twoWay: !0,
            type: Object
        },
        multi: {
            type: Boolean
        }
    },
    methods: {
        T: Editor.T,
        _checkValues: (t,e,i)=>t.every(t=>i ? t == e : t != e),
        _isPaddingEnabled() {
            var t = this.target.type
              , e = this.target;
            return this.multi ? !(!this._checkValues(t.values, 0, !0) || !this._checkValues(e.values, 1, !0)) || (this._checkValues(t.values, 0, !1),
            !1) : 0 === this.target.type.value && 1 === this.target.resizeMode.value || 0 !== this.target.type.value
        },
        _isPaddingHorizontalEnabled() {
            return this.multi ? this._checkValues(this.target.type.values, 2, !1) : 2 !== this.target.type.value
        },
        _isPaddingVerticalEnabled() {
            return this.multi ? this._checkValues(this.target.type.values, 1, !1) : 1 !== this.target.type.value
        },
        _isAllowHorizontalLayout() {
            var t = this.target.type;
            return this.multi ? this._checkValues(t.values, 1, !0) || this._checkValues(t.values, 3, !0) : 1 === t.value || 3 === t.value
        },
        _isAllowVerticalLayout() {
            var t = this.target.type;
            return this.multi ? this._checkValues(t.values, 2, !0) || this._checkValues(t.values, 3, !0) : 2 === this.target.type.value || 3 === this.target.type.value
        },
        _isGridLayout() {
            return this.multi ? this._checkValues(this.target.type.values, 3, !0) : 3 === this.target.type.value
        },
        _isShowCellSize() {
            return this.multi ? !(!this._checkValues(this.target.type.values, 3, !0) || !this._checkValues(this.target.resizeMode.values, 2, !0)) : 3 === this.target.type.value && 2 === this.target.resizeMode.value
        }
    }
});
