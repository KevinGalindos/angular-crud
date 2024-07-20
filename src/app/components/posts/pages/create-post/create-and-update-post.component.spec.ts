import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndUpdatePostComponent } from './create-and-update-post.component';

describe('CreatePostComponent', () => {
  let component: CreateAndUpdatePostComponent;
  let fixture: ComponentFixture<CreateAndUpdatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAndUpdatePostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAndUpdatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
