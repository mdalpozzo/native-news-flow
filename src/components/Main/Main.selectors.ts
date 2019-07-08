import {
    NAME_SPACE,
    NestedState,
    Stories,
} from './Main.types';

export const selectView = (state: NestedState): string => state[NAME_SPACE].view;
export const selectStories = (state: NestedState): Stories => state[NAME_SPACE].stories;