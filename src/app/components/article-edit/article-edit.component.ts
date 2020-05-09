import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import swal from 'sweetalert';
import { ArticleService } from '../../service/aticle.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Global} from '../../service/global';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

 
  public article: Article
  public status: string
  public is_edit:boolean
  public url:string;

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
    this.is_edit = true
    this.article = new Article("", "", "", null, null);
    this.url =Global.url
    
  }

  ngOnInit(): void {
   
    this.getArticle()
  }


  onSubmit() {
    this._articleService.update(this.article._id,this.article).subscribe(
      response => {
        if (response.status = 'success') {
          this.status = 'success'
          this.article = response.article;
          swal(
            'Articulo Editado',
            'El articulo se ha editado correctamente',
            'success'

          );

          this._router.navigate(['/blog/articulo/',this.article._id])

        } else {
          this.status = 'error';
        }

      }, error => {
        swal(
          'Edicion fallida',
          'El articulo no se ha editado correctamente',
          'success'

        );
        this.status = 'error';
      }
    )
    
  }

  imageUpload(data){
    let image_data = JSON.parse(data.response);
    this.article.image=image_data.image
  }

  getArticle(){
    this._route.params.subscribe(params=>{
      let id = params['id']
      this._articleService.getArticle(id).subscribe(
        response=>{
          if(response){
            this.article=response.article
          }else{
            this._router.navigate(['/home'])
          }
        },
        error=>{
          this._router.navigate(['/home'])
        }
      );
    })
  
  }
}
