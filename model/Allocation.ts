// model/Post.js
import { Model } from "@nozbe/watermelondb";
import { date, field, readonly } from "@nozbe/watermelondb/decorators";

export default class Allocation extends Model {
  static table = "allocations";

  @field("income") income!: number;
  @readonly @date("created_at") createdAt!: Date;
}
