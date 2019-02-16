// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-calendar',
//   templateUrl: './calendar.component.html',
//   styleUrls: ['./calendar.component.scss']
// })
// export class CalendarComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
/**
 * RichTextEditor Markdown Custom Format Sample
 */

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { RichTextEditorComponent, MarkdownFormatter, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { LinkService, ImageService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-base';
import Marked from 'marked';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None,

})
export class CalendarComponent {
    // @ViewChild('mdCustom')
    // public rteObj: RichTextEditorComponent;
    // public textArea: HTMLTextAreaElement;
    // public mdsource: HTMLElement;
    // public tools: object = {
    //     items: ['Bold', 'Italic', 'StrikeThrough', '|',
    //     'Formats', 'OrderedList', 'UnorderedList', '|',
    //     'CreateLink', 'Image', '|',
    //     {
    //         tooltipText: 'Preview',
    //         template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
    //             '<span class="e-btn-icon e-icons e-md-preview"></span></button>'
    //     }, 'Undo', 'Redo']
    // };
    // public mode = 'Markdown';
    // public formatter: MarkdownFormatter = new MarkdownFormatter({
    //     listTags: { 'OL': '2. ', 'UL': '+ ' },
    //     formatTags: {
    //         'Blockquote': '> '
    //     },
    //     selectionTags: {'Bold': '__',  'Italic': '_'}

    // });
    // public onCreate(): void {
    //     this.textArea = this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement;
    //     this.textArea.addEventListener('keyup', (e: KeyboardEventArgs) => {
    //         this.markDownConversion();
    //     });
    //     this.mdsource = document.getElementById('preview-code');
    //     this.mdsource.addEventListener('click', (e: MouseEvent) => {
    //         this.fullPreview();
    //         if ((e.target as HTMLElement).parentElement.classList.contains('e-active')) {
    //             this.rteObj.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
    //                 'UnorderedList', 'CreateLink', 'Image']);
    //         } else {
    //             this.rteObj.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
    //                 'UnorderedList', 'CreateLink', 'Image']);
    //         }
    //     });
    // }
    // public markDownConversion(): void {
    //     if (this.mdsource.classList.contains('e-active')) {
    //         const  id: string = this.rteObj.getID() + 'html-view';
    //         const htmlPreview: Element = this.rteObj.element.querySelector('#' + id);
    //         htmlPreview.innerHTML = Marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
    //     }
    // }
    // public fullPreview(): void {
    //     const id: string = this.rteObj.getID() + 'html-preview';
    //     let htmlPreview: HTMLElement = this.rteObj.element.querySelector('#' + id) as HTMLElement;
    //     if (this.mdsource.classList.contains('e-active')) {
    //         this.mdsource.classList.remove('e-active');
    //         this.textArea.style.display = 'block';
    //         htmlPreview.style.display = 'none';
    //     } else {
    //         this.mdsource.classList.add('e-active');
    //         if (!htmlPreview) {
    //             htmlPreview = createElement('div', { className: 'e-content e-pre-source' });
    //             htmlPreview.id = id;
    //             this.textArea.parentNode.appendChild(htmlPreview);
    //         }
    //         this.textArea.style.display = 'none';
    //         htmlPreview.style.display = 'block';
    //         htmlPreview.innerHTML = Marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
    //         this.mdsource.parentElement.title = 'Code View';
    //     }
    // }
}
