import { Reminder } from '.'
import { User } from '../user'

let user, reminder

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  reminder = await Reminder.create({ user, id_dose: 'test', id_dose_type: 'test', start_date: 'test', next_date: 'test', dismissed: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = reminder.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(reminder.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.id_dose).toBe(reminder.id_dose)
    expect(view.id_dose_type).toBe(reminder.id_dose_type)
    expect(view.start_date).toBe(reminder.start_date)
    expect(view.next_date).toBe(reminder.next_date)
    expect(view.dismissed).toBe(reminder.dismissed)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = reminder.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(reminder.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.id_dose).toBe(reminder.id_dose)
    expect(view.id_dose_type).toBe(reminder.id_dose_type)
    expect(view.start_date).toBe(reminder.start_date)
    expect(view.next_date).toBe(reminder.next_date)
    expect(view.dismissed).toBe(reminder.dismissed)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
