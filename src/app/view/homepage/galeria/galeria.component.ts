import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Galeria } from 'src/app/models/galeria';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.less']
})
export class GaleriaComponent implements OnInit {
  closeResult = '';
  constructor(private modalService: NgbModal, private http: HttpClient) { }

  ngOnInit(): void {
	this.proImagem()
  }
  imagem: Galeria[] = []
  url(valor:string | null){
	if (valor == null) return null;
	return environment.fileUrl+valor
  }

  
proImagem(){
	this.http.get<{img:Galeria[]}>(environment.apiUrl + 'galeria').subscribe({
		next: (res)=>{
			this.imagem = res.img
			//console.log(res.img)
		}
	})
}


  open(content: any) {
		this.modalService.open(content, {size: 'lg', centered:true, ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
