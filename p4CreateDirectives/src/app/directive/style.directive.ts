import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

interface DStyle {
	border?: string
	borderRadius?: string
	fontWeight?: string
}

@Directive( {
	selector: '[appStyle]'
} )
export class StyleDirective {
	@Input( 'appStyle' ) color: string;
	@Input() dStyle: DStyle;
	
	@HostBinding('style.border') elBorder = null
	@HostBinding('style.borderRadius') elBorderRadius = null
	@HostBinding('style.fontWeight') elFontWeight = null
	
	constructor( private elRef: ElementRef, private renderer: Renderer2 ) {
		this.renderer.setStyle( this.elRef.nativeElement, 'color', 'red' );
	}
	
	@HostListener( 'click', [ '$event.target' ] ) onClick( event: Event ) {
		console.log( event );
	}
	
	@HostListener( 'mouseenter') onEnter() {
		this.renderer.setStyle( this.elRef.nativeElement, 'color', this.color );
		this.renderer.setStyle( this.elRef.nativeElement, 'fontWeight', this.dStyle.fontWeight)
		this.elBorder = this.dStyle.border
		this.elBorderRadius = this.dStyle.borderRadius
	}
	
	@HostListener( 'mouseleave') onLeave( ) {
		this.renderer.setStyle( this.elRef.nativeElement, 'color', null );
		this.renderer.setStyle( this.elRef.nativeElement, 'fontWeight', null )
		this.elBorder = null
		this.elBorderRadius = null
	}
}
