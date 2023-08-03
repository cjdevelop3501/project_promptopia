import { mongoose, Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required!'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required!'],
    }
});

// check in mongoose's models, if Prompt exists, reuse the existing one
// if not, mongoose will create a new one and assign to the variable Prompt
const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;