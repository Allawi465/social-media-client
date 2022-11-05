import { createPost } from './create';

function fetchSuccessPost() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    json: () => Promise.resolve(newPost),
  });
}

function fetchFailureLogin(status = 401, statusText = 'refresh token missing') {
  return Promise.resolve({
    ok: false,
    status: 'Unauthorized',
    statusText,
  });
}

const oldPost = { title: 'old Post', body: 'old post body', media: 'url' };
const newPost = {
  title: 'new Post',
  body: 'new post body',
  media: 'url',
  id: 1,
};

describe('createPost', () => {
  it('The create item function trow error if fetch is a failure', async () => {
    global.fetch = jest.fn(() => fetchFailureLogin());
    const creatingNewPost = await createPost(
      oldPost.title,
      oldPost.body,
      oldPost.media
    );
    expect(creatingNewPost).toThrow('refresh token missing');
  });

  it('The create item function creates a new item on the API', async () => {
    global.fetch = jest.fn(() => fetchSuccessPost());
    const creatingNewPost = await createPost(
      oldPost.title,
      oldPost.body,
      oldPost.media
    );
    expect(creatingNewPost).toEqual(newPost);
  });
});
