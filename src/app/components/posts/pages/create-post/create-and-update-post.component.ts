import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Post } from '../../../../common/interfaces/posts.interface'

@Component({
  selector: 'app-create-and-update-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-and-update-post.component.html',
  styleUrl: './create-and-update-post.component.sass',
})
export class CreateAndUpdatePostComponent implements OnChanges {
  public form: FormGroup
  public isEdit: boolean = true;

  @Input() post: Post | undefined
  @Output() onSubmit: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() {
    this.form = this.initForm()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['post'] && changes['post'].currentValue) {
      this.editPost(changes['post'].currentValue)
    }
  }

  private initForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(null),
      userId: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required),
    })
  }

  private editPost(post: Post) {
    this.isEdit = true
    this.form.patchValue(post)
  }

  public submitForm(): void {
    this.onSubmit.emit(this.form.value)
    this.form = this.initForm()
    this.isEdit = false
  }
}
