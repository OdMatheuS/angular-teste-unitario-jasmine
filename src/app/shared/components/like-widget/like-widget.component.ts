import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { UniqueIdService } from "../../services/uniq-id.service";

@Component({
  selector: "app-like-widget",
  templateUrl: "./like-widget.component.html",
  styleUrls: ["./like-widget.component.scss"],
})
export class LikeWidgetComponent implements OnInit {
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;

  public fonts = { faThumbsUp };

  constructor(private uniqIdService: UniqueIdService) {}

  public ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqIdService.generateUniqueIdWithPrefix("like-widget");
    }
  }

  /**
   * metodo like dispara evento via @Output
   */
  public like(): void {
    this.liked.emit();
  }
}
