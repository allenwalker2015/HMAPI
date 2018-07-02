import { success, notFound, authorOrAdmin } from '../../services/response/'
import { Reminder } from '.'

export const create = ({ user, bodymen: { body } }, res, next) =>
  Reminder.create({ ...body, user })
    .then((reminder) => reminder.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Reminder.count(query)
    .then(count => Reminder.find(query, select, cursor)
      .populate('user')
      .then((reminders) => ({
        count,
        rows: reminders.map((reminder) => reminder.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Reminder.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then((reminder) => reminder ? reminder.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ user, bodymen: { body }, params }, res, next) =>
  Reminder.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'user'))
    .then((reminder) => reminder ? Object.assign(reminder, body).save() : null)
    .then((reminder) => reminder ? reminder.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ user, params }, res, next) =>
  Reminder.findById(params.id)
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'user'))
    .then((reminder) => reminder ? reminder.remove() : null)
    .then(success(res, 204))
    .catch(next)
