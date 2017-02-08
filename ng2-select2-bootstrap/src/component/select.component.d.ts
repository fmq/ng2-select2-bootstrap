import { ElementRef, NgZone, EventEmitter, TemplateRef } from '@angular/core';
import { Select } from './../common/select';
export declare class SelectComponent extends Select {
    elementRef: ElementRef;
    zone: NgZone;
    name: any;
    classe: any;
    placeholder: string;
    templateResultado: TemplateRef<any>;
    templateSelecionado: TemplateRef<any>;
    templateSemResultado: TemplateRef<any>;
    indiceId: string;
    indiceNome: string;
    valores: any;
    change: EventEmitter<any>;
    onSelecionarItem: EventEmitter<any>;
    onBuscar: EventEmitter<any>;
    onApagar: EventEmitter<any>;
    onRemoverItem: EventEmitter<any>;
    onAbrir: EventEmitter<any>;
    onFechar: EventEmitter<any>;
    onLimpar: EventEmitter<any>;
    campoBusca: ElementRef;
    constructor(elementRef: ElementRef, zone: NgZone);
    abrir(): void;
    selecionar(item: any): void;
    limpar(event: any): void;
    buscar(): void;
    value: any;
}
