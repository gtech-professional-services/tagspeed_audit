/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Entry point for exposing methods from the bundle to the views
 * and orchestration if required.
 */

import {handleUserCredentialResponse} from './controllers/user-controller';
import {AuthoriseBox} from './components/authorise-box';
import {SelectorList} from './components/selector-list';
import {TagList} from './components/tag-list';

module.exports = {
  handleCredentialResponse: handleUserCredentialResponse,
  AuthoriseBox: AuthoriseBox,
  SelectorList: SelectorList,
  TagList: TagList,
};
