import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import swal from 'sweetalert';
import { ArticleService } from '../../service/aticle.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Global} from '../../service/global';



@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.scss'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article
  public status: string
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gig,.jpeg",
    maxSize: "1",
    uploadAPI: {
      url: Global.url+"upload-image/",
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,

  ) {
    
  }

  ngOnInit(): void {
    this.article = new Article("", "", "", null, null);
  }
  onSubmit() {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status = 'success') {
          this.status = 'success'
          this.article = response.article;
          console.log(response)

          swal(
            'Articulo Creado',
            'El articulo se ha creado correctamente',
            'success'

          );

          this._router.navigate(['/blog'])

        } else {
          this.status = 'error';
        }

      }, error => {
        console.log(error)
        this.status = 'error';
      }
    )
    
  }

  imageUpload(data){
    let image_data = JSON.parse(data.response);
    this.article.image=image_data.image
  }


}

