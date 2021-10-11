import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw new Error("Prefix can not be empty");
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  /**
   * getNumberOfGeneratedUniqueId
   * número total de ID gerados por esses serviços
   */
  public getNumberOfGeneratedUniqueId(): number {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
