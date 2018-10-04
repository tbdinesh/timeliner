import langs from 'langs';
import { PROJECT_SETTINGS_KEYS, RDF_NAMESPACE } from '../constants/project';

const IIIF_KEY_ORDER = [
  '@context',
  'id',
  '@id',
  'type',
  '@type',
  'motivation',
  'label',
  'profile',
  'format',
  'language',
  'value',
  'metadata',
  'requiredStatement',
  'thumbnail',
  'homepage',
  'logo',
  'rights',
  'logo',
  'height',
  'width',
  'start',
  'viewingDirection',
  'behavior',
  'navDate',
  'rendering',
  'seeAlso',
  'partOf',
  'includes',
  'items',
  'structures',
  'annotations',
];

const TIMELINE_PROPERTIES = [
  `${RDF_NAMESPACE}:backgroundColour`,
  `${RDF_NAMESPACE}:settings`,
  ...PROJECT_SETTINGS_KEYS.map(key => `${RDF_NAMESPACE}:${key}`),
];

const LANGUAGES = langs.codes('1');

const KEY_ORDER = IIIF_KEY_ORDER.concat(TIMELINE_PROPERTIES, LANGUAGES);

export const serialize = item => {
  return JSON.stringify(item, KEY_ORDER, 2);
};