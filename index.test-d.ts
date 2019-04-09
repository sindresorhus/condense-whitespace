import {expectType} from 'tsd';
import condense = require('.');

expectType<string>(condense('   \n\n\t Hello    World \t\n'));
