// model/Post.js
import { Model } from "@nozbe/watermelondb";
import {
  children,
  date,
  field,
  readonly,
} from "@nozbe/watermelondb/decorators";

export default class Allocation extends Model {
  static table = "allocations";
  static associations = {
    account_allocations: {
      type: "has_many" as const,
      foreignKey: "allocation_id",
    },
  };

  @field("income") income: number | undefined;
  @readonly @date("created_at") createdAt: Date | undefined;

  @children("account_allocations") accountAllocations: any;
}
