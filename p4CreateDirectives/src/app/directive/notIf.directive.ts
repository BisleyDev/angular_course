import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive( { selector: '[appNotif]' } )
export class NotIfDirective {
	@Input( 'appNotif' ) set notIf( param: boolean ) {
		if( !param ) {
			this.viewContainer.createEmbeddedView( this.templateRef )
		} else {
			this.viewContainer.clear()
		}
	}
	
	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef
	) {}
}
