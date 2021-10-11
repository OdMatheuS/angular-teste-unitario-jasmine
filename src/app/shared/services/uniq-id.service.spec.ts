import { UniqueIdService } from "./uniq-id.service";

/* 
A função describe recebe dois parâmetros. 
O primeiro é uma descrição do artefato que queremos testar, 
o segundo é uma função
*/
describe("UniqueIdService", () => {
  it("generateUniqueIdWithPrefix: should generate id when called with prefix", () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix("foobar");
    expect(id).toContain("foobar-");
  });
});
