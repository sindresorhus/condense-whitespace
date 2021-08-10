import {expectType} from 'tsd';
import condenseWhitespace from './index.js';

expectType<string>(condenseWhitespace('   \n\n\t Hello    World \t\n'));
