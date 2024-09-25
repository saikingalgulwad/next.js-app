import mongoose,{Schema} from "mongoose";

const topicSchema = new Schema(
    {
        title:String,
        description:String,
        username:String,
        password:String
    }
);
const Topic = mongoose.models.Topic || mongoose.model("Topic",topicSchema);
export default Topic;