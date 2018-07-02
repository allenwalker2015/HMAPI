import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Reminder, { schema } from './model'

const router = new Router()
const { id_dose, id_dose_type, start_date, next_date, dismissed } = schema.tree

/**
 * @api {post} /reminders Create reminder
 * @apiName CreateReminder
 * @apiGroup Reminder
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam id_dose Reminder's id_dose.
 * @apiParam id_dose_type Reminder's id_dose_type.
 * @apiParam start_date Reminder's start_date.
 * @apiParam next_date Reminder's next_date.
 * @apiParam dismissed Reminder's dismissed.
 * @apiSuccess {Object} reminder Reminder's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reminder not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ id_dose, id_dose_type, start_date, next_date, dismissed }),
  create)

/**
 * @api {get} /reminders Retrieve reminders
 * @apiName RetrieveReminders
 * @apiGroup Reminder
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of reminders.
 * @apiSuccess {Object[]} rows List of reminders.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /reminders/:id Retrieve reminder
 * @apiName RetrieveReminder
 * @apiGroup Reminder
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} reminder Reminder's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reminder not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /reminders/:id Update reminder
 * @apiName UpdateReminder
 * @apiGroup Reminder
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam id_dose Reminder's id_dose.
 * @apiParam id_dose_type Reminder's id_dose_type.
 * @apiParam start_date Reminder's start_date.
 * @apiParam next_date Reminder's next_date.
 * @apiParam dismissed Reminder's dismissed.
 * @apiSuccess {Object} reminder Reminder's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reminder not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ id_dose, id_dose_type, start_date, next_date, dismissed }),
  update)

/**
 * @api {delete} /reminders/:id Delete reminder
 * @apiName DeleteReminder
 * @apiGroup Reminder
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Reminder not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
