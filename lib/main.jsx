import ReactDOM from "react-dom";
import App from './app';
import store from './store';

window.store = store;

const render = () => {
	ReactDOM.render(<App items={store.getState()}></App>, document.getElementById('react-app'));
}
store.subscribe(render);
render();

