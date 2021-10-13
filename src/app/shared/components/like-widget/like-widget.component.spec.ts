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
});
