import { Album } from "./../../models/album.model";
import { AlbumsService } from "./../../services/albums.service";
import { Component, OnInit } from "@angular/core";
import { MenuItem } from "src/app/components/breadcrumb/breadcrumb.component";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.scss"],
})
export class AlbumsComponent implements OnInit {
  public albums: Album[];

  public breadcrumb: MenuItem[] = [
    {
      label: "Albuns",
    },
  ];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe(
      (albums: Album[]) => {
        this.albums = albums;
        console.table(albums);
      },
      (error) => console.error(error)
    );
  }
}
