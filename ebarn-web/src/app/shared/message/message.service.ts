import { Injectable, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';

declare const $: any;

/**
 * Enum com os tipos de alerta.
 */
export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
}

/**
 * Service geral da aplicação para alertas
 */
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public showAlertDanger(message: string): void {
    return this.showAlert(AlertTypes.DANGER, message);
  }

  /*public showAlertSuccess(message: string) {
    return swal({
      text: message,
      timer: 3000,
      showConfirmButton: false,
      type: "success"
    }).catch(swal.noop);
  }

  public showConfirm(message: string) {
    return swal({
      title: "Confirmação",
      text: message,
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn btn-success",
      cancelButtonClass: "btn btn-danger",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      buttonsStyling: false
    });
  }
*/
  private showAlert(type: AlertTypes, message: string) {
    $.notify(
      {
        icon: 'notifications',
        message: message,
      },
      {
        type: type,
        timer: 3000,
        placement: {
          from: 'top',
          align: 'right',
        },
        template:
          '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">' +
          '<i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">error</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0"' +
          'aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>',
      }
    );
  }
}
