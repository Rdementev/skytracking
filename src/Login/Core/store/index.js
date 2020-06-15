import {applyMiddleware, compose, createStore} from "redux";
import ReduxThunk from 'redux-thunk';
import createReducer from "./rootReducer";

/**
 *  пока не удалось  реализовать данную логику
 *  (подмешивать новые редюсеры и с помощью HOCa и с помощью функции)
 *
 *  выше этого тексте реализовано подмешивание с помощью вызова функции
 *  если компонент пытается получить данные из подмешенного редюсера надо проверять есть ли там эти данные,
 *  есть возможность динамически подмешивать редюсеры
 *
 *
 *
 * ниже расположена реализация через HOC
 * нет возможности подмешивать динамически только конкретно указав какой редюсер
 * нет возможности зичищать стайт если редюсер больше не акктуален
 *
 *ß
 *
 * в идеале надо объеденить два этих способа
 */
const initializeStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(createReducer(),
        composeEnhancers(
            applyMiddleware(ReduxThunk)
        ))

    store.asyncReducers = {};
    store.injectReducer = (key, reducer) => {
        store.asyncReducers[key] = reducer;
        store.replaceReducer(createReducer(store.asyncReducers));
        return store;
    };
    return store;
};
let index = initializeStore()


export default index
