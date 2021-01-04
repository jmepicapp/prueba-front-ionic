import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared.module';

import { PhotoListComponent } from './photo-list.component';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoListComponent],
      imports: [IonicModule.forRoot(), SharedModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should generate photo list', () => {
    component.ngOnInit();
    expect(component.displayedPhotoList.length).toBe(20);
  });
  it('Should render photo list', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('photo-component').length).toBe(20);
  });
});
