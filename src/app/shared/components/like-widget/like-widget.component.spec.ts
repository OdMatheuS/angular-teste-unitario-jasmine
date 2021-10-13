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

  it("Should auto generate ID when id input empty", () => {
    fixture.detectChanges()
    expect(instanceWrapper.id).toBeTruthy();
  });

  it("Should NOT generate ID when id input is present", () => {
    const randomId = 'foo'
    instanceWrapper.id = randomId
    fixture.detectChanges()
    expect(instanceWrapper.id).toBe(randomId);
  });

});
