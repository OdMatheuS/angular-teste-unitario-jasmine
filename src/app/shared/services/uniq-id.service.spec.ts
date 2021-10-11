import { UniqueIdService } from "./uniq-id.service";

/* 
A função describe recebe dois parâmetros. 
O primeiro é uma descrição do artefato que queremos testar, 
o segundo é uma função
*/
describe(UniqueIdService.name, () => {
  /**
   * @method beforeEach
   * antes de executar cada teste, o valor da variável service vai ser uma nova instância de UniqueIdService,
   * assim cada teste it() vai ter sua instância de UniqueidService
   */
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}: should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix("foobar");
    expect(id.startsWith("foobar-")).toBeTrue();
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}: should not generate duplicate Id's when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix("foobar"));
    }
    expect(ids.size).toBe(50);
  });

  it(`${UniqueIdService.prototype.getNumberOfGeneratedUniqueId.name}: should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix("foobar");
    service.generateUniqueIdWithPrefix("foobar");
    expect(service.getNumberOfGeneratedUniqueId()).toBe(2);
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}: should throw exception when called with empty or invalid value`, () => {
    const invalidValues = [null, undefined, "", "2", "0"];
    invalidValues.forEach((invalidValue) => {
      expect(() => service.generateUniqueIdWithPrefix(invalidValue)).toThrow();
    });
  });
});
