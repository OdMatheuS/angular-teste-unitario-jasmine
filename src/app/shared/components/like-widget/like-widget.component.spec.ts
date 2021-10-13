import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(`${LikeWidgetComponent.name}`, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[LikeWidgetModule]
    }).compileComponents();
    fixture = TestBed.createComponent(LikeWidgetComponent)
  });

  it("should create component", () => {
    const instanceWrapper = fixture.componentInstance

    expect(instanceWrapper).toBeTruthy();
  });

  it("Should auto generate ID when id input empty", () => {
    const instanceWrapper = fixture.componentInstance
    fixture.detectChanges()
    expect(instanceWrapper.id).toBeTruthy();
  });

  it("Should NOT generate ID when id input is present", () => {
    const instanceWrapper = fixture.componentInstance
    const randomId = 'foo'
    instanceWrapper.id = randomId
    fixture.detectChanges()
    expect(instanceWrapper.id).toBe(randomId);
  });

});
