import { FileService } from './services/file.service';
import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { uploadProgress } from '@shared/operators/upload-progress';
import filterResponse from '@shared/operators/filter-response';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnDestroy {
  public files = new Set<File>();
  public filenames: string[] = [];
  public progress = 0;

  private destroyed$ = new Subject<void>();

  constructor(private fileService: FileService) {}

  get filenamesFormatted(): string {
    return this.filenames.join(', ');
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
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
    if (this.files.size === 0) return;

    this.fileService
      .upload(this.files)
      .pipe(
        uploadProgress((progress) => {
          this.progress = progress;
        }),
        filterResponse(),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        alert('Uploaded with success');
      });
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
