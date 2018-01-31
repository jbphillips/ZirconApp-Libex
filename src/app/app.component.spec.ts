import { TestBed, async } from '@angular/core/testing';
import { LibexComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LibexComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LibexComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'libex'`, async(() => {
    const fixture = TestBed.createComponent(LibexComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('libex');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(LibexComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to libex!');
  }));
});
