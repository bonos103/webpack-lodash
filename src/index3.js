import join from 'lodash/join';
import compact from 'lodash/compact';
import cloneDeep from 'lodash/cloneDeep';

join(['hello', 'world'], ' ');
compact([0, 1, false, 2, '', 3]);
cloneDeep([{ 'a': 1 }, { 'b': 2 }]);
