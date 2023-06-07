import {Component} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Pipe({
  name: 'safeContent'
})
export class SafeContentPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(content: string, type: string = 'html'): SafeStyle | string {
    if (type === 'html') {
      return this.sanitizer.bypassSecurityTrustHtml(content);
    } else if (type === 'style') {
      return this.sanitizer.bypassSecurityTrustStyle(content);
    } else if (type === 'script') {
      return this.sanitizer.bypassSecurityTrustScript(content);
    } else if (type === 'url') {
      return this.sanitizer.bypassSecurityTrustUrl(content);
    } else if (type === 'resourceUrl') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(content);
    }
    
    return content;
  }
}

@Component({
  selector: 'elevation-overview-example',
  styleUrls: ['elevation-overview-example.css'],
  templateUrl: 'elevation-overview-example.html',
})
export class ElevationOverviewExample {
  isActive = false;
  globals = {
    settingsUploadBackgroundImage: 'Upload Background Image',
    settingsUseDefaultBackgroundImage: 'Use Default Background Image'
  };
  item: any;

  getBackgroundImage() {
    return 'https://pbs.twimg.com/profile_images/1326162218/buddy.jpg'
  }

  getBackgroundSize() {
    // Lógica para obtener el tamaño de la imagen de fondo
  }

  onFileChange(event: any, item: any) {
    // Lógica para manejar el cambio de archivo
  }

  clearBackgroundImage(item: any) {
    // Lógica para eliminar la imagen de fondo
  }
}
