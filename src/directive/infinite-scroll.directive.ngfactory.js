/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var import0 = require('./infinite-scroll.directive');
var import1 = require('@angular/core/src/change_detection/change_detection_util');
var import3 = require('@angular/core/src/linker/view_utils');
var Wrapper_InfiniteScrollDirective = (function () {
    function Wrapper_InfiniteScrollDirective(p0) {
        this._changed = false;
        this.context = new import0.InfiniteScrollDirective(p0);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_InfiniteScrollDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_InfiniteScrollDirective.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_InfiniteScrollDirective.prototype.check_scrollTrigger = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.scrollTrigger = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_InfiniteScrollDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_InfiniteScrollDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_InfiniteScrollDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'scroll')) {
            var pd_sub_0 = (this.context.onScroll($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_InfiniteScrollDirective.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.OnScrollMethod.subscribe(_eventHandler.bind(view, 'OnScrollMethod')));
        }
    };
    return Wrapper_InfiniteScrollDirective;
}());
exports.Wrapper_InfiniteScrollDirective = Wrapper_InfiniteScrollDirective;
//# sourceMappingURL=infinite-scroll.directive.ngfactory.js.map