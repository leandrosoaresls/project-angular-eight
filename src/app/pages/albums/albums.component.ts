import { AlbumsService } from "./../../services/albums.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.scss"],
})
export class AlbumsComponent implements OnInit {
  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe(
      (albums) => {
        console.table(albums);
      },
      (error) => console.error(error)
    );
  }
}
