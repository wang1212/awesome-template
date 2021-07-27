/**
 * api test
 * @see https://jestjs.io/docs/api
 */
import process from 'process';
import request from 'supertest'; // eslint-disable-line
import app from '../../app.js';
import { PREFIX } from './api.js';

const { BASE_URL } = process.env;

describe(`${BASE_URL + PREFIX} api`, () => {
  test(BASE_URL + PREFIX, async () => {
    const response = await request(app.callback()).get(BASE_URL + PREFIX);

    expect(response.statusCode).toBe(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(expect.arrayContaining([{ name: expect.any(String) }]));
  });
});
