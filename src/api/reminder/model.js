import mongoose, { Schema } from 'mongoose'

const reminderSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  id_dose: {
    type: String
  },
  id_dose_type: {
    type: String
  },
  start_date: {
    type: String
  },
  next_date: {
    type: String
  },
  dismissed: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

reminderSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      user: this.user.view(full),
      id_dose: this.id_dose,
      id_dose_type: this.id_dose_type,
      start_date: this.start_date,
      next_date: this.next_date,
      dismissed: this.dismissed,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Reminder', reminderSchema)

export const schema = model.schema
export default model
