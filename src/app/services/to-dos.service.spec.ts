import { TestBed } from "@angular/core/testing";

import { ToDosService } from "./to-dos.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ToDosService", () => {
  beforeEach(async () =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it("should be created", () => {
    const service: ToDosService = TestBed.get(ToDosService);
    expect(service).toBeTruthy();
  });
});
