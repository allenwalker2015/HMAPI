import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Reminder } from '.'

const app = () => express(apiRoot, routes)

let userSession, anotherSession, reminder

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const anotherUser = await User.create({ email: 'b@b.com', password: '123456' })
  userSession = signSync(user.id)
  anotherSession = signSync(anotherUser.id)
  reminder = await Reminder.create({ user })
})

test('POST /reminders 201 (user)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession, id_dose: 'test', id_dose_type: 'test', start_date: 'test', next_date: 'test', dismissed: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.id_dose).toEqual('test')
  expect(body.id_dose_type).toEqual('test')
  expect(body.start_date).toEqual('test')
  expect(body.next_date).toEqual('test')
  expect(body.dismissed).toEqual('test')
  expect(typeof body.user).toEqual('object')
})

test('POST /reminders 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /reminders 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
  expect(typeof body.rows[0].user).toEqual('object')
})

test('GET /reminders 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /reminders/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${reminder.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(reminder.id)
  expect(typeof body.user).toEqual('object')
})

test('GET /reminders/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${reminder.id}`)
  expect(status).toBe(401)
})

test('GET /reminders/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /reminders/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${reminder.id}`)
    .send({ access_token: userSession, id_dose: 'test', id_dose_type: 'test', start_date: 'test', next_date: 'test', dismissed: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(reminder.id)
  expect(body.id_dose).toEqual('test')
  expect(body.id_dose_type).toEqual('test')
  expect(body.start_date).toEqual('test')
  expect(body.next_date).toEqual('test')
  expect(body.dismissed).toEqual('test')
  expect(typeof body.user).toEqual('object')
})

test('PUT /reminders/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${reminder.id}`)
    .send({ access_token: anotherSession, id_dose: 'test', id_dose_type: 'test', start_date: 'test', next_date: 'test', dismissed: 'test' })
  expect(status).toBe(401)
})

test('PUT /reminders/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${reminder.id}`)
  expect(status).toBe(401)
})

test('PUT /reminders/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: anotherSession, id_dose: 'test', id_dose_type: 'test', start_date: 'test', next_date: 'test', dismissed: 'test' })
  expect(status).toBe(404)
})

test('DELETE /reminders/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${reminder.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /reminders/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${reminder.id}`)
    .send({ access_token: anotherSession })
  expect(status).toBe(401)
})

test('DELETE /reminders/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${reminder.id}`)
  expect(status).toBe(401)
})

test('DELETE /reminders/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: anotherSession })
  expect(status).toBe(404)
})
