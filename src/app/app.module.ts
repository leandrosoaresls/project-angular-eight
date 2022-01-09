import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule, MatCheckboxModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardComponent } from "./components/card/card.component";
import { HeaderComponent } from "./header/header.component";
import { AlbumsComponent } from "./pages/albums/albums.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { ToDosComponent } from "./pages/to-dos/to-dos.component";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AlbumsComponent,
    ToDosComponent,
    HeaderComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
