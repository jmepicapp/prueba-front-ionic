import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Photo } from '../../models/photo';

import { PhotoComponent } from './photo.component';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;


  const photo: Photo = {
    id: 1,
    photo: 'https://picsum.photos/id/1/500/500.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    component.photoItem = photo;
    fixture.detectChanges();
  }));

  afterEach(() => {
    fixture.destroy();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should display render a photoItem', () => {
    fixture.detectChanges();
    component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('ion-card-content').innerText).toBe(component.photoItem.text);
    expect(component.photoIsLoaded).toBe(false);
  });
});
