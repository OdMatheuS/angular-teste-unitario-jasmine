import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(`${LikeWidgetComponent.name}`, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null
  let instanceWrapper:LikeWidgetComponent = null;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent)
    instanceWrapper = fixture.componentInstance
  });

  it("should create component", () => {

    expect(instanceWrapper).toBeTruthy();
  });

  it("Should auto-generate ID during ngOnInit when (@Input id) is not assigned", () => {
    fixture.detectChanges()
    expect(instanceWrapper.id).toBeTruthy();
  });

  it("Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned", () => {
    const randomId = 'foo'
    instanceWrapper.id = randomId
    fixture.detectChanges()
    expect(instanceWrapper.id).toBe(randomId);
  });

  it(`${LikeWidgetComponent.prototype.like.name}:should trigger (@Output liked) when called`, () => {
    spyOn(instanceWrapper.liked,"emit")
    fixture.detectChanges()
    instanceWrapper.like()
    expect(instanceWrapper.liked.emit).toHaveBeenCalled()
  })

});
