/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './highlight.directive';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
export class Wrapper_HighlightDirective {
  /*private*/ _eventHandler:Function;
  context:import0.HighlightDirective;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.HighlightDirective(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_classe(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.classe = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'mouseenter')) {
      const pd_sub_0:any = ((<any>this.context.onMouseEnter()) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'mouseleave')) {
      const pd_sub_1:any = ((<any>this.context.onMouseLeave()) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}