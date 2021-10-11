import { UniqueIdService } from "./uniq-id.service";

/* 
A função describe recebe dois parâmetros. 
O primeiro é uma descrição do artefato que queremos testar, 
o segundo é uma função
*/
describe(UniqueIdService.name, () => {
  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}: should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix("foobar");
    expect(id.startsWith("foobar-")).toBeTrue();
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}: should not generate duplicate Id's when called multiple times`, () => {
    const service = new UniqueIdService();
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix("foobar"));
    }
    expect(ids.size).toBe(50);
  });
});
