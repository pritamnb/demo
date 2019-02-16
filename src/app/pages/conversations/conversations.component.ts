// // import { ViewEncapsulation } from '@angular/compiler/src/core';
// import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
// import { RichTextEditorComponent, MarkdownFormatter, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
// // import { LinkService, ImageService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';
// import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-base';
// import Marked from 'marked';

// @ViewChild('mdCustom')
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { addClass, removeClass, Browser } from '@syncfusion/ej2-base';
import { RichTextEditorComponent, ToolbarService, LinkService } from '@syncfusion/ej2-angular-richtexteditor';
import { ImageService, MarkdownEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { createElement, KeyboardEventArgs, isNullOrUndefined } from '@syncfusion/ej2-base';
import Marked from 'marked';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ConversationsComponent {

//   constructor() { }
//   public mode = 'Markdown';
//   public rteObj: RichTextEditorComponent;
//   public textArea: HTMLTextAreaElement;
//   public mdsource: HTMLElement;
//   public htmlPreview: HTMLElement;

//   public tools: object = {
//       items: ['Bold', 'Italic', 'StrikeThrough', '|',
//       'Formats', 'OrderedList', 'UnorderedList', '|',
//       'CreateLink', 'Image', '|',
//       {
//           tooltipText: 'Preview',
//           template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
//               '<span class="e-btn-icon e-icons e-md-preview"></span></button>'
//       }, 'Undo', 'Redo']
//   };
//   public formatter: MarkdownFormatter = new MarkdownFormatter({
//       listTags: { 'OL': '2. ', 'UL': '+ ' },
//       formatTags: {
//           'Blockquote': '> '
//       },
//       selectionTags: {'Bold': '__',  'Italic': '_'}

//   });
//   public onCreate(): void {
//       this.textArea = this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement;
//       this.textArea.addEventListener('keyup', (e: KeyboardEventArgs) => {
//           this.markDownConversion();
//       });
//       this.mdsource = document.getElementById('preview-code');
//       this.mdsource.addEventListener('click', (e: MouseEvent) => {
//           this.fullPreview();
//           if ((e.target as HTMLElement).parentElement.classList.contains('e-active')) {
//               this.rteObj.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
//                   'UnorderedList', 'CreateLink', 'Image']);
//           } else {
//               this.rteObj.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
//                   'UnorderedList', 'CreateLink', 'Image']);
//           }
//       });
//   }
//   public markDownConversion(): void {
//       if (this.mdsource.classList.contains('e-active')) {
//           const id: string = this.rteObj.getID() + 'html-view';
//           const htmlPreview: Element = this.rteObj.element.querySelector('#' + id);
//           htmlPreview.innerHTML = Marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
//       }
//   }
//   public fullPreview(): void {
//       const id: string = this.rteObj.getID() + 'html-preview';
//        this.htmlPreview = this.rteObj.element.querySelector('#' + id) as HTMLElement;
//       if (this.mdsource.classList.contains('e-active')) {
//           this.mdsource.classList.remove('e-active');
//           this.textArea.style.display = 'block';
//           this.htmlPreview.style.display = 'none';
//       } else {
//           this.mdsource.classList.add('e-active');
//           if (!this.htmlPreview) {
//               this.htmlPreview = createElement('div', { className: 'e-content e-pre-source' });
//               this.htmlPreview.id = id;
//               this.textArea.parentNode.appendChild(this.htmlPreview);
//           }
//           this.textArea.style.display = 'none';
//           this.htmlPreview.style.display = 'block';
//           this.htmlPreview.innerHTML = Marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
//           this.mdsource.parentElement.title = 'Code View';
//       }
//   }
//   ngOnInit() {
//   }

// }
// import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
// import { addClass, removeClass, Browser } from '@syncfusion/ej2-base';
// import { RichTextEditorComponent, ToolbarService, LinkService } from '@syncfusion/ej2-angular-richtexteditor';
// import { ImageService, MarkdownEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
// import { createElement, KeyboardEventArgs, isNullOrUndefined } from '@syncfusion/ej2-base';
// import Marked from 'marked';

@Component({
    selector: 'control-content',
    templateUrl: 'markdown-editor-preview.html',
    styleUrls: ['markdown-preview.css'],
    encapsulation: ViewEncapsulation.None,

})
// export class ConversationsComponent {
    @ViewChild('mdPreview')
    public rteObj: RichTextEditorComponent;
    public textArea: HTMLTextAreaElement;
    public mdsource: HTMLElement;
    public mdSplit: HTMLElement;
    public htmlPreview: HTMLElement;
    public tools: object = {
        items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList', 'UnorderedList', '|',
         'CreateTable', 'CreateLink', 'Image', '|',
            {
                tooltipText: 'Preview',
                template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
            }, {
                tooltipText: 'Split Editor',
                template: '<button id="MD_Preview" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                '<span class="e-btn-icon e-view-side e-icons"></span></button>'
            }, 'FullScreen', '|', 'Undo', 'Redo']
    };
    public mode = 'Markdown';
    public onCreate(): void {
        this.textArea = this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement;
        this.textArea.addEventListener('keyup', (e: KeyboardEventArgs) => {
            this.markDownConversion();
        });
        this.mdsource = document.getElementById('preview-code');
        this.mdsource.addEventListener('click', (e: MouseEvent) => {
            this.fullPreview({ mode: true, type: 'preview' });
            if ((e.target as HTMLElement).parentElement.classList.contains('e-active')) {
                this.rteObj.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
                    'UnorderedList', 'CreateTable', 'CreateLink', 'Image']);
                (e.target as HTMLElement).parentElement.parentElement.nextElementSibling.classList.add('e-overlay');
            } else {
                this.rteObj.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'Formats', 'OrderedList',
                    'UnorderedList', 'CreateTable', 'CreateLink', 'Image']);
                (e.target as HTMLElement).parentElement.parentElement.nextElementSibling.classList.remove('e-overlay');
            }
        });
        this.mdSplit = document.getElementById('MD_Preview');
        this.mdSplit.addEventListener('click', (e: MouseEvent) => {
            if (this.rteObj.element.classList.contains('e-rte-full-screen')) {
                this.fullPreview({ mode: true, type: '' });
            }
            this.mdsource.classList.remove('e-active');
            this.rteObj.showFullScreen();
        });
    }
    public actionComplete(e: any): void {
        if (e.targetItem === 'Maximize' && isNullOrUndefined(e.args)) {
            this.fullPreview({ mode: true, type: '' });
        } else if (!this.mdSplit.parentElement.classList.contains('e-overlay')) {
            if (e.targetItem === 'Minimize') {
                this.textArea.style.display = 'block';
                this.textArea.style.width = '100%';
                if (this.htmlPreview) { this.htmlPreview.style.display = 'none'; }
                this.mdSplit.classList.remove('e-active');
                this.mdsource.classList.remove('e-active');
            }
            this.markDownConversion();
        }
    }
    public markDownConversion(): void {
        if (this.mdSplit.classList.contains('e-active')) {
            const id: string = this.rteObj.getID() + 'html-preview';
            const htmlPreview: HTMLElement = this.rteObj.element.querySelector('#' + id) as HTMLElement;
            htmlPreview.innerHTML = Marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
        }
    }
    public fullPreview(e: { [key: string]: string | boolean }): void {
        const id: string = this.rteObj.getID() + 'html-preview';
        this.htmlPreview = this.rteObj.element.querySelector('#' + id) as HTMLElement;
        if ((this.mdsource.classList.contains('e-active') || this.mdSplit.classList.contains('e-active')) && e.mode) {
            this.mdsource.classList.remove('e-active');
            this.mdSplit.classList.remove('e-active');
            this.textArea.style.display = 'block';
            this.textArea.style.width = '100%';
            this.htmlPreview.style.display = 'none';
        } else {
            this.mdsource.classList.add('e-active');
            this.mdSplit.classList.add('e-active');
            if (!this.htmlPreview) {
                this.htmlPreview = createElement('div', { className: 'e-content' });
                this.htmlPreview.id = id;
                this.textArea.parentNode.appendChild(this.htmlPreview);
            }
            if (e.type === 'preview') {
                this.textArea.style.display = 'none';
                this.htmlPreview.classList.add('e-pre-source');
            } else {
                this.htmlPreview.classList.remove('e-pre-source');
                this.textArea.style.width = '50%';
            }
            this.htmlPreview.style.display = 'block';
            this.htmlPreview.innerHTML = Marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
        }
    }
    public handleFullScreen(e: any): void {
        const leftBar: HTMLElement = document.querySelector('#left-sidebar');
        if (e.targetItem === 'Maximize') {
            addClass([leftBar], ['e-close']);
            removeClass([leftBar], ['e-open']);
        } else if (e.targetItem === 'Minimize') {
            removeClass([leftBar], ['e-close']);
            if (!Browser.isDevice) {
                addClass([leftBar], ['e-open']);
            }
        }
    }
}
