import { createPost } from './create';
import { LocalStorageMock } from '../../test/LocalStorageMock.js';

global.localStorage = new LocalStorageMock();
