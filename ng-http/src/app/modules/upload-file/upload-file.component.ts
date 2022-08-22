import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent {
  public files = new Set<File>();
  public filenames: string[] = [];
  public progress = 0;

  constructor() {}

  get filenamesFormatted(): string {
    return this.filenames.join(', ');
  }

  public onChange(event: Event): void {
    const selectedFiles = (event.target as HTMLInputElement).files ?? [];

    for (let index = 0; index < selectedFiles.length; index++) {
      this.filenames.push(selectedFiles[index].name);
      this.files.add(selectedFiles[index]);
    }

    this.progress = 0;
  }

  public onUpload(): void {
    // TODO: Implement
  }

  public onDownloadExcel(): void {
    // TODO: Implement
  }

  public onDownloadPDF(): void {
    // TODO: Implement
  }

  public handleFileEvent(fileUrl: string, filename: string) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;

    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );

    // Firefox only
    setTimeout(() => {
      window.URL.revokeObjectURL(fileUrl);
      link.remove();
    }, 100);
  }
}
